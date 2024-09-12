import Generator from "@/components/Generator";
import Meditation from "@/components/Meditation";
import "react-h5-audio-player/lib/styles.css";

export const metadata = {
  title: 'I Ching Art & Poetry | Cast The Coins',
  description: 'Cast coins to draw your hexagrams.',
};

export default function CastPage() {
  return(<div className="text-stone-7">

    <Meditation/>

    <Generator/>

  </div>);
}
