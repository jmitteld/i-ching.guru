import Container from "@/components/Container";

export const metadata = {
  title: 'I Ching Art & Poetry | About',
  description: 'About I Ching',
};

export default function AuthorsPage() {
  return(<>

    <Container className="[&_p]:mb-5 text-stone-7">

    <h1 className="font-5 font-500 mb-3 text-(5 center)">About the I Ching</h1>

    <p>The origin of the I Ching is shrouded in mystery, as seems appropriate to its content. The mythical ruler Fu Xi was said to have given character-based writing to the Chinese people, and this same Fu Xi categorized all of creation using trigrams made from yin and yang symbols. Each has three lines, solid for yang or broken for yin. All combinations of solid and broken lines yield 8 trigrams. The trigrams represent 8 elements, extensions of the European Earth, Ar, Water, and Fire; and they also represent primal qualities. By the time that the I Ching was codified, the 8 trigrams were paired in all combinations (top and bottom) to form 64 hexagrams.</p>
    <p>Lao Tzu is generally regarded as the person who codified the Daoist creed, and he is traditionally dated to 571 BC. The I Ching was already about 400 years old at Lao Tzu’s birth, having been used as a guide for diviners and oracles in the region of China near the delta of the Yangtze, where Shanghai is today. But the form that it took in this early period has not been preserved.</p>
    <p>All Western renderings of the I Ching, beginning with Hellmut Wilhelm in the 1930s, have freely translated not just words but whole concepts and even ideologies, framed for our modern sensibilities.  My poems are an extreme in this direction, and I offer Prof. Richter’s gloss as an antidote for anyone who wishes to connect more directly with the bare bones of the Chinese text.</p>
    <p align="right">&ndash; JJM&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p> 
    </Container>

  </>);
}
