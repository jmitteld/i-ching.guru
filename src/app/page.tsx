import { Button } from "@/components/ui/button";
import bookArt from "@/assets/images/book.png";
import Link from "next/link";
import Image from "next/image";
import ParallaxBanner from "@/components/ParallaxBanner";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="text-(lg stone-7) overflow-hidden max-w-100%">

      <ParallaxBanner className="text-background [&_button]:(my-1)" bgImage='/images/homepage-intro-bg.jpg' bgImageStyle={{bottom: "-150px"}} bgImageAlt="the cat" strength={200}>
      <div className="max-w-screen-md w-screen-md mx-auto my-7 px-5 font-cursive">
          <h1 className="text-13 mb-5 leading-50px">Consult the I Ching</h1>
          <h2 className="text-7 mb-5">with Josh Mitteldorf and Gregory Richter, graphics by Meryl Ann Butler</h2>
          <h2 className="text-7 mb-5">An interactive experience!!!</h2>
          <Link href="/cast"><Button>Begin</Button></Link>&nbsp;&nbsp;
          <Link href="#buy"><Button>Download PDF ebook</Button>&nbsp;&nbsp;</Link>
          <Link href='/about'><Button>About I Ching</Button></Link>
        </div>
      </ParallaxBanner>

      <Container className="mt-7">
        <p>The more you put into your I Ching experience, the more you will get out. We recommend that you set aside a quiet time for guided meditation, and have a question crystal clear in your mind before you ask for guidance. Note: Often this process generates an answer that comes from your heart, and you have no need of the I Ching.</p>

        <blockquote className="pl-50px lt-sm:pl-0">
          <div>&nbsp;</div>
          <div>You’ve come because you want to learn what’s coming;</div>
          <div>You hope to dodge a blow or cheat a blight.</div>
          <div>You hear the drone of distant drummers drumming,</div>
          <div>And wish to circumvent a nasty fight.</div>
          <div>&nbsp;</div>
          <div>A fear has blurred your thought, you feel alone.</div>
          <div>Like many gallant souls, you’ve lost your mooring,</div>
          <div>Forgotten things that once you’ve deeply known.</div>
          <div>(Remembered, they would not be reassuring.)</div>
          <div>&nbsp;</div>
          <div>The sybil’s work is not to help you hide;</div>
          <div>Your destiny, we know, is to be bold. </div>
          <div>You’ll neither fight the future nor evade it;</div>
          <div>You’ll co-create with allies far and wide.</div>
          <div>The outcome in advance cannot be told—</div>
          <div>You won’t know destiny until you’ve made it.</div>
        </blockquote>
        <p>&nbsp;</p>

        <div className="grid cols-12 lt-sm:text-center" id="buy">
          <div className="col-span-12 sm:col-span-7">
            <Image src={bookArt.src} alt="I Ching Sonnets" className="max-w-100%" width={bookArt.width} height={bookArt.height} />
          </div>
          <div className="col-span-12 my-5 sm:(col-span-5 pl-5)">
            <h2 className="text-7 mb-2">I Ching Sonnets</h2>
            <h5 className="text-4.2 mb-3">by Josh Mitteldorf<br/>and Gregory Richter</h5>
            <Button className="mb-2 mr-2">Buy PDF</Button>
            <Button className="mb-2 mr-2">Printed Book (available soon)</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
