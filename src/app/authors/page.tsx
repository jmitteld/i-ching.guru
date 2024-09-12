import Container from "@/components/Container";
import joshPhoto from "@/assets/images/about-josh.jpg";
import gregPhoto from "@/assets/images/about-greg.jpg";
import merylPhoto from "@/assets/images/about-meryl.jpg";
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
        <p><b>Josh Mitteldorf</b> has a broad science background with a PhD in astrophysics and many articles on evolutionary biology and the science of aging. He speculates about science, politics, and other mysteries at <a href='https://mitteldorf.substack.com/' target='_blank'>mitteldorf.substack.com</a>. <a href='http://daily-inspiration.org/' target='_blank'>Daily Inspiration</a> is where he posts uplifting stories, videos, and poetry (including his own). More of his poetry is on <a href='https://www.poemhunter.com/josh-mitteldorf/' target='_blank'>PoemHunter</a>. His book, <a href='https://scienceblog.com/484749/preface-cracking-aging-code-josh-mitteldorf-dorion-sagan/' target='_blank'>Cracking the Aging Code</a> (Flatiron, 2016) proposes a new way to think about why we age and what we can do to stop it. He has taught a weekly yoga class since 1977. He is also a pianist and chamber musician. His two daughters were among the first girls to be adopted from PRC.</p>
        </div>
      </div>

      <div className='grid cols-12'>
        <div className='col-span-12 sm:col-span-4'>
          <Image src={merylPhoto.src} alt="I Ching Sonnets" className="max-w-100%" width={merylPhoto.width} height={merylPhoto.height} />
        </div>
        <div className='col-span-12 sm:col-span-8'>
        <p><b>Meryl Ann Butler</b> is an award-winning visionary artist, published author, editor, labyrinth builder, intuitive consultant, and Renaissance Woman. She owns and operates Ocean View Arts, in Norfolk, Virginia, a combination working studio and art school where she creates her art and offers online and in-person workshops and classes in traditional drawing and painting, visionary art, fiber art and creativity. Her website is OceanViewArts.com.</p>
        <p>Meryl Ann received seven years of private classical art training in New York under Harold Stevenson, a student of Norman Rockwell, and creates work in a wide variety of media including traditional drawing and painting; fabric art and wearable art, outdoor art installations, and digital art. The artwork she created for this I Ching project is her innovative technique which combines transparent layers of images of her original paintings and photos with images in the public domain.</p>
        <p>Meryl Ann’s artwork is in collections around the world, including those of HH the late Swami Satchidananda, the late Nelson Mandela, Oprah Winfrey, Martha Stewart, Esther Hicks, Caroline Myss, Dr. Norman Shealy, Dr. Gladys McGarey, former Congressmen Dennis Kucinich, Dr. Patch Adams, Edgar Cayce’s A.R.E. Headquarters, the University of Peace in Costa Rica, the Findhorn Community in Scotland, and many others.</p>
        <p>Meryl Ann was featured as the creativity expert in the Edgar Cayce New Millennium TV series. She is the author of two craft books and she is Managing Editor of OpEdNews where her articles have had over three million views. She has owned and operated two art schools, taught art at the university level, and continues to offer art instruction online in group workshops and to private students. In addition, she is a workshop facilitator on a wide variety of topics including anatomical drawing, perspective drawing, women artists, mandalas, labyrinths, quilting, wearable art, rites of passage, angels, mythology, astrology, the eternal feminine, quantum physics and the healing power of art.</p>
        <p>Meryl Ann believes that “Art is not a luxury; it is essential foodstuff for the soul.” She loves her exciting and creative life, especially the one life experience that outshines them all: catching her granddaughter when the midwife was late!</p>
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



    </Container>

  </>);
}
