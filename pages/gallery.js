import Head from 'next/head';
import DynamicComponent from '../components/DynamicComponent';
import useStoryblok from '../lib/storyblok-hook';
import Storyblok from '../lib/storyblok';
import Header from '../components/Header';

export default function Home(props) {
  // the Storyblok hook to enable live updates
  const story = useStoryblok(props.story);
  console.log('story', story);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
        />
      </Head>

      <Header />

      <main>
        {story
          ? story.content.body.map((blok) => (
              <DynamicComponent blok={blok} key={blok._uid} />
            ))
          : null}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  // the slug of the story
  const slug = 'gallery';
  // the storyblok params
  const params = {
    version: 'draft', // or 'published'
  };
  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = 'draft';
    // appends the cache version to get the latest content
    params.cv = Date.now();
  }
  // loads the story from the Storyblok API
  const { data } = await Storyblok.get(`cdn/stories/${slug}`, params);
  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      story: data ? data.story : false,

      preview: context.preview || false,
    },
    revalidate: 10,
  };
}
