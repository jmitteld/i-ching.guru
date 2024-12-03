'use client';
import { createRef, useEffect, useRef, useState } from 'react';
import AudioPlayer from "react-h5-audio-player";
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import Image from 'next/image';
import hexagramsData from '@/data/hexagrams';
import H5AudioPlayer from 'react-h5-audio-player';

const Viewer: React.FC<{hexagram1:number, hexagram2:number}> = ({hexagram1, hexagram2}) => {
  const [open, setOpen] = useState(false);
  const [art, setArt] = useState<string>(`${hexagram1}`);
  const player1 = createRef<H5AudioPlayer>();
  const player2 = createRef<H5AudioPlayer>();
  // const [src1, setSrc1] = useState('');
  // const [src2, setSrc2] = useState('');
  const handleClick1 = () => {
    setArt(`${hexagram1}`);
    //setSrc1(hexagramsData.find(e => e.num === hexagram1)?.audio || '')
    player2?.current?.audio?.current?.pause();
    player2?.current?.audio?.current?.load();
  }

  const handleClick2 = () => {
    setArt(`${hexagram2}`);
    //setSrc2(hexagramsData.find(e => e.num === hexagram2)?.audio || '');
    player1?.current?.audio?.current?.pause();
    player1?.current?.audio?.current?.load();
  }

  const buttonClasses = "inline-flex items-center justify-center rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 b-1 font-default font-medium uppercase transition duration-300 ease-in-out bg-black text-white hover:bg-stone-800 h-10 px-0 py-2 whitespace-normal leading-4 cursor-pointer mt-15px w-80px h-80px flex-col lt-sm:(mt-0 px-2 flex-row w-120px h-50px)";

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <Button variant="outline" className="h-20 b-5 w-100% text-(!4.3 primary-foreground) hover:b-black" onClick={() => setOpen(true)}>
          SEE ART AND SONNETS
        </Button>
        <DialogContent className="w-100% !max-w-100% h-100vh bg-black text-white b-none p-0 !rounded-0
        [&>button]:(t-10px r-10px shadow-md scale-150%) [&>button]:focus:shadow-none">
          <div className="flex items-center justify-evenly lt-sm:(flex-col-reverse)">
            <div className="flex flex-col justify-center h-100% w-100px text-white [&_img]:max-w-100% p-2 text-center
              [&>div>button]:(w-80px h-40px mt-20px) lt-sm:(w-100% h-100px [&_img]:w-50px [&>div>button]:(mt-0 h-50px))">
              <div className="lt-sm:(flex items-center justify-around)">
              <div><p align="center">PRESENT</p></div>
                <div onClick={handleClick1} className="font-500 text-5 lt-sm:(w-30px) cursor-pointer">{hexagram1}</div>
                <Image onClick={handleClick1} className="filter-invert cursor-pointer" src={'/hexagrams/'+hexagram1+'.png'} alt="Hexagram" width={200} height={200} priority />
                <div onClick={handleClick1} className={buttonClasses}>
                  <div>READ<br/>aloud</div>
                  <AudioPlayer className="audioplayer-hexagram"
                      ref={player1}
                      showSkipControls={false}
                      showJumpControls={false}
                      showDownloadProgress={false}
                      showFilledProgress={false}
                      showFilledVolume={false}
                      autoPlay={false}
                      src={hexagramsData.find(e => e.num === hexagram1)?.audio}
                      onPlay={handleClick1}
                  />
                </div>
                <Button variant="outlineBlack" onClick={() => setArt(`${hexagram1}g`)} className="whitespace-normal leading-4 !text-2.4">LITERAL TRANSLATION</Button>
                <div><br></br></div>
              </div>
              { hexagram1 != hexagram2 && <hr className="my-5 lt-sm:my-2 w-100% h-0" /> }
              { hexagram1 != hexagram2 &&
                <div className="lt-sm:(flex items-center justify-around pt-10px) h-40%">
                <div><p align="center">POSSIBLE FUTURE</p></div>
                 <div onClick={handleClick2} className="font-500 text-5 lt-sm:(w-30px) cursor-pointer">{hexagram2}</div>
                  <Image onClick={handleClick2} className="filter-invert cursor-pointer" src={'/hexagrams/'+hexagram2+'.png'} alt="Hexagram" width={200} height={200} priority/>
                  <div onClick={handleClick2} className={buttonClasses}>
                    <div>READ<br/>aloud</div>
                    <AudioPlayer className="audioplayer-hexagram"
                        ref={player2}
                        showSkipControls={false}
                        showJumpControls={false}
                        showDownloadProgress={false}
                        showFilledProgress={false}
                        showFilledVolume={false}
                        autoPlay={false}
                        src={hexagramsData.find(e => e.num === hexagram2)?.audio}
                        onPlay={handleClick2}
                    />
                  </div>
                  <Button variant="outlineBlack" onClick={() => setArt(`${hexagram2}g`)} className="whitespace-normal leading-4 !text-2.4">LITERAL TRANSLATION</Button>
                  <div><p align="center"><br></br><br></br><hr></hr><br></br>Right click on screen<br></br> to save contents for later.</p>
                  <p><br></br><hr></hr><br></br>Press &lt;Esc&gt; to return.</p>
                  </div>
                </div>
              }
            </div>
            <div className="sm:h-100vh flex items-center justify-center">
              <img className="max-w-100% max-h-100vh aspect-1.29 w-inherit" src={'/art/'+art+'.jpg'} alt="Art" width={2000} height={2000} />
              {/* preload images */}
              <img src={`/art/${hexagram1}.jpg`} className='absolute opactiy-0 w-1px h-1px'/>
              <img src={`/art/${hexagram2}.jpg`} className='absolute opactiy-0 w-1px h-1px'/>
            </div>
            <div></div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Viewer;
