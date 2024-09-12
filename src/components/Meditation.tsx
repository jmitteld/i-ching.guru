'use client';
import {useEffect, useState} from 'react';
import AudioPlayer from "react-h5-audio-player";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button";

export default function Meditation() {
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(true) }, []); // to avoid "hydration" error, do this instead of setting useState above to true

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <Button className="mx-auto my-5 block" onClick={() => setOpen(true)}>▶ Meditation</Button>
          <DialogContent className="font-default">
            <DialogHeader>
              <DialogTitle className='text-stone-7'>Meditation</DialogTitle>
              <DialogDescription className='text-stone-7'>
                The more you put into your I Ching experience, the more you will get out. We recommend that you set aside a quiet time for guided meditation, and have a question crystal clear in your mind before you ask for guidance. Note: Often this process generates an answer that comes from your heart, and you have no need of the I Ching.
              </DialogDescription>
            </DialogHeader>
            <AudioPlayer className="audioplayer"
              showSkipControls={false}
              showJumpControls={false}
              src="audio/meditation.mp3"
              onEnded={() => setOpen(false)}
            />
          <Button onClick={() => setOpen(false)} className="block mx-auto">Skip Meditation</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
