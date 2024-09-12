const Hexagram: React.FC<{hexagram: number, lines: string[], text: string}> = ({hexagram, lines, text}) => {
  return <>
    <div className="text-center text-4.8">{text}</div>
    <div className={"text-center transition ease-in-out duration-1s text-(10 black) tracking-1 font-700 opacity-"+(hexagram > 0 ? "100" : "0")}>
      &nbsp;{hexagram}&nbsp;
    </div>
    <div className="mx-auto w-fit flex flex-col-reverse ">
      {[...Array(6)].map((_, index) => {
        return (
          <div key={index} className={`transition-all delay-500 duration-500 ${lines[index] ? 'h-50px' : 'h-1px'}`}>
            { lines[index] === "filledO" && <div className="absolute w-50px h-50px b-(7px solid black) rounded-full ml-125px mt-15px opacity-0 animate-fade-in animate-delay-1s animate-forwards" /> }
            { lines[index]?.startsWith("broken") && <div className="bg-white w-60px h-30px absolute ml-120px mt-6 opacity-0 animate-fade-in animate-delay-0.5s animate-forwards" /> }
            { lines[index] === "brokenX" && <div className="i-mdi-close w-70px h-70px absolute bg-black ml-115px mt-5px opacity-0 animate-fade-in animate-delay-1s animate-forwards" /> }
            <div className={lines[index]+" w-300px h-20px mt-30px transition-all delay-1.5s duration-1s ease-in-out "+
              "bg-([radial-gradient(circle,black_50%,transparent_50%)] center no-repeat) "+
              (lines.length > index ? "[background-size:200%] " : "[background-size:0%] ")}></div>
            
          </div>
        )
      })}
    </div>
  </>
}
export default Hexagram;