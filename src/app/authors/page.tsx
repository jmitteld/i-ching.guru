import Container from "@/components/Container";
import joshPhoto from "@/assets/images/about-josh.jpg";
import gregPhoto from "@/assets/images/about-greg.jpg";
import merylPhoto from "@/assets/images/about-meryl.jpg";
import andreyPhoto from "@/assets/images/about-andrey.jpg";
import Image from "next/image";

export const metadata = {
  title: 'I Ching Art & Poetry | Authors',
  description: 'About the Authors',
};

export default function AuthorsPage() {
  return(<>

    <Container className="[&>div>div]:(px-2 mb-5) [&_img]:mt-1.5 [&_p]:mb-3 text-stone-7">

    <div className='grid cols-12'>
        <div className='col-span-12 sm:col-span-4'>
          <Image src={joshPhoto.src} alt="I Ching Sonnets" className="max-w-100%" width={joshPhoto.width} height={joshPhoto.height} />
        </div>
        <div className='col-span-12 sm:col-span-8'>
        <p><b>Josh Mitteldorf</b> has a broad science background with a PhD in astrophysics and many articles on evolutionary biology and the science of aging. He speculates about science, politics, and other mysteries at <a href='https://mitteldorf.substack.com/' target='_blank'>UnauthorizedScience.org</a>. An anti-blog at <a href='http://daily-inspiration.org/' target='_blank'>Daily Inspiration</a> is where he posts uplifting stories, videos, and poetry (including his own). More of his poetry is on <a href='https://www.poemhunter.com/josh-mitteldorf/' target='_blank'>PoemHunter</a>. His book, <a href='https://scienceblog.com/484749/preface-cracking-aging-code-josh-mitteldorf-dorion-sagan/' target='_blank'>Cracking the Aging Code</a> (Flatiron, 2016) proposes a new way to think about why we age and what we can do to stop it. He has taught a weekly yoga class since 1977. He is also a pianist and chamber musician. His two daughters were among the first girls to be adopted from PRC.</p>
        </div>
      </div>

     <div className='grid cols-12'>
        <div className='col-span-12 sm:col-span-4'>
          <Image src={gregPhoto.src} alt="I Ching Sonnets" className="max-w-100%" width={gregPhoto.width} height={gregPhoto.height} />
        </div>
        <div className='col-span-12 sm:col-span-8'>
          <p><b>Gregory C. Richter</b> (Ph.D. in Linguistics, University of California San Diego, 1982) served as Professor of German and Linguistics at Truman State University, Missouri, from 1983 to 2022; among his course offerings were <i>German/English Translation, Linguistics of the Romance Languages,</i> and courses on Latin, French, Russian, Chinese, and Icelandic. He maintains interests in formal linguistics, translation, and translation theory. His publications include translations from German centering on the Viennese psychoanalytic writings of Sigmund Freud and Otto Rank. He has also published poetry translations from Icelandic (<i>Chariton Review</i>), a translation of Albert Giraud's rondel cycle <i>Pierrot Lunaire</i>(1884), and <i>The Gate of All Marvelous Things,</i> a translation of Laozi's <i>Dao De Jing.</i> Additional work has appeared in <i>International Journal of American Linguistics, The Journal of Religion and Health,</i> and <i>The Journal of American Folklore.</i> He currently serves as an editor and translator for Plain Wrapper Press Redux.</p>
        </div>
      </div>

     <div className='grid cols-12'>
        <div className='col-span-12 sm:col-span-4'>
          <Image src={andreyPhoto.src} alt="I Ching Sonnets" className="max-w-100%" width={andreyPhoto.width} height={andreyPhoto.height} />
        </div>
        <div className='col-span-12 sm:col-span-8'>
        <p><b>Andrey Samode</b> is a freelance software engineer and site design artist. He is also trained as a counselor and has practiced yoga and meditation for over twenty years. Check out his <a href="https://www.youtube.com/watch?v=ssBOkj2VJHo">music</a>!</p>
        </div>
      </div>

    <div className='grid cols-12'>
        <div className='col-span-12 sm:col-span-4'>
          <Image src={merylPhoto.src} alt="I Ching Sonnets" className="max-w-100%" width={merylPhoto.width} height={merylPhoto.height} />
        </div>
        <div className='col-span-12 sm:col-span-8'>
        <p>Visionary artist <b>Meryl Ann Butler</b> is known for fabric art and spiritual mandalas. Her <a href="https://oceanviewarts.com/">teaching studio</a> is in Virginia Beach.</p>
        </div>
      </div>

    </Container>

  </>);
}
