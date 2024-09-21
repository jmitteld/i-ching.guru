'use client';
import { Button} from "./ui/button";
import { useEffect, useState } from "react";
import Viewer from "./Viewer";
import hexagramsData from "../data/hexagrams";
import Hexagram from "./Hexagram";

/*
 * The idea here is to generate an I Ching hexagram one line at a time. To generate a line, the user casts coins.
 * Heads = 3, Tails = 2. When the line is drawn, the process is repeated until there are six lines.
 * Then the user is presented with a button that takes them to the Art and Gloss viewer page.
 */

export default function Generator() {
  const [coinState, setCoinState] = useState(["", "", ""]);
  const [currentCoin, setCurrentCoin] = useState(-1);
  const [castResult, setCastResult] = useState<number[]>([]);
  const [lines, setLines] = useState<string[][]>([[], []]);
  const [hexagrams, setHexagrams] = useState([0, 0]);

  // Handle coin casting
  const coinCast = (num:number) => {
    if (coinState[num] === "") {
      const newCoinState = [...coinState];
      if (Math.random() < 0.5) {
        newCoinState[num] = "heads";
        setCastResult([...castResult, 3]);
      } else {
        newCoinState[num] = "tails";
        setCastResult([...castResult, 2]);
      }
      setCoinState(newCoinState);
      setCurrentCoin(num);
    }
  }

  // Once all three have been cast, add them up and generate a line
  useEffect(() => {
    if (castResult.length == 3) {
      const sum = castResult.reduce((a,b) => a+b);
      generateLine(sum);
    }
  }, [castResult]);

  // Generate line
  const generateLine = (num:number) => {
    const newLines1 = [...lines[0]];
    const newLines2 = [...lines[1]];
    switch(num) {
      case 6:
        setLines([[...newLines1, "brokenX"], [...newLines2, "filled"]]);
        break;
      case 7:
        setLines([[...newLines1, "filled"], [...newLines2, "filled"]]);
        break;
      case 8:
        setLines([[...newLines1, "broken"], [...newLines2, "broken"]]);
        break;
      case 9:
        setLines([[...newLines1, "filledO"], [...newLines2, "broken"]]);
        break;
    }
  }

  // When a line has been generated and drawn, reset the coins
  useEffect(() => {
    if (castResult.length == 3) {
      setTimeout(resetCast, 3500);
    }
  }, [lines]);

  // Reset the coins if < 6 lines, generate the hexagrams otherwise
  const resetCast = () => {
    if (lines[0].length < 6) {
      // reset cast after the line is painted
      setCoinState(["", "", ""]);
      setCurrentCoin(-1);
      setCastResult([]);
    } else {
      // calculate and set the hexagrams
      const newHexagrams = [...hexagrams];
      lines.map((_, index) => {
        let binary = "";
        lines[index].map((line) => {
          if (line.startsWith('filled')) {
            binary += "1";
          } else {
            binary += "0";
          }
        });
        binary = binary.split('').reverse().join(''); // reverse binary order since we're drawing from the bottom up
        const match = hexagramsData.filter((obj) => obj.binary == binary);
        const hexNum = match[0].num;
        newHexagrams[index] = hexNum;
      });
      setHexagrams(newHexagrams);

      // preload images
      newHexagrams.map((hexagram) => {
        const data = hexagramsData.filter(entry => entry.num == hexagram)[0];
        const art = new Image(); art.src = data.art;
        const gloss = new Image(); gloss.src = data.gloss;
        const icon = new Image(); icon.src = data.icon;
      });
    }
  }

  // DEV: "test" button to auto-fill the values for faster testing
  const handleTest = () => {
    setLines([
      ["filled", "filledO", "broken", "brokenX", "filled", "filled"],
      ["filled", "broken", "broken", "filled", "filled", "filled"]
    ]);
    resetCast();
  }
  const handleTest2 = () => {
    const newLines = [...lines];
    newLines[0].push("filledO");
    newLines[1].push("broken");
    setLines(newLines);
    resetCast();
  }
  const handleTest3 = () => {
    const newLines = [...lines];
    newLines[0].push("brokenX");
    newLines[1].push("filled");
    setLines(newLines);
    resetCast();
  }
  const [swiping, setSwiping] = useState(false);

  return (
    <>
      <div className="h-200px">
      { hexagrams[0] === 0
        ? <div>
            <div className={"text-center text-(4.8) my-5 py-0 transition duration-1s ease-in-out "+(castResult.length == 3 && "opacity-0")}>Touch all coins to cast. Repeat 6x to create full hexagram.</div>
            <div className="pt-7px text-center flex w-fit mx-auto
              [&>.heads]:(animate-flipHeads animate-forwards)
              [&>.tails]:(animate-flipTails animate-forwards) ">
              {
                coinState.map((headsOrTails, index) => {
                  return(
                    <div className={"relative mx-10px w-100px h-100px transition duration-1000 ease-in preserve-3d touch-none "+
                      "[&>div]:(w-100px h-100px rounded-full shadow-[0_12px_20px_-10px_#777] bg-contain absolute backface-hidden) "+
                      headsOrTails+
                      (currentCoin === index ? " z-1" : "") // keep the last touched coin on top
                      } key={index}>
                      { ['bg-[url(/images/coin-front.png)] z-100',
                         'bg-[url(/images/coin-back.png)] -rotate-y-180'].map((x, i) =>
                        <div className={x} key={i}
                          data-index={index}
                          onMouseEnter={() => coinCast(index)}
                          onTouchStart={() => {coinCast(index); setSwiping(true)}}
                          onTouchEnd={() => setSwiping(false)}
                          onTouchMove={(e) => {
                            if (swiping) {
                              const el = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) as HTMLDivElement;
                              const hoverIndex = el?.getAttribute('data-index');
                              if (!!hoverIndex) coinCast(parseInt(hoverIndex))
                            }
                          }}
                        ></div>
                      )}
                    </div>
                  )
                })
              }
            </div>
          </div>
        : <div className={"max-w-300px mx-auto py-50px opacity-0 "+(hexagrams[0] > 0 ? "animate-puffIn animate-forwards" : "")}>
            <Viewer hexagram1={hexagrams[0]} hexagram2={hexagrams[1]} />
          </div>
      }
      </div>

      <div className="max-w-900px mx-auto grid cols-12 min-h-400px">

        <div className="col-span-6 lt-sm:(col-span-12)">
          <Hexagram hexagram={hexagrams[0]} lines={lines[0]} text="Present" />
        </div>

        <div className="col-span-6 lt-sm:(col-span-12 pt-60px)">
          <Hexagram hexagram={hexagrams[1]} lines={lines[1]} text="Possible future" />
        </div>
      </div>

     {/* !DEV - "TEST" button for faster hexagram generation 
     <div className="text-center mt-100px [&_button]:mx-2">
      <Button onClick={handleTest}>QUICK TEST</Button>
       <Button onClick={handleTest2}>FILLED-O</Button>
        <Button onClick={handleTest3}>BROKEN-X</Button>
      </div>
     */}   
    </>
  );
}

/* NOTE: JS random() creates a new random number generator. Its seed is initialized to a value based on the current time:
 *      public Random() { this(System.currentTimeMillis());
 */
