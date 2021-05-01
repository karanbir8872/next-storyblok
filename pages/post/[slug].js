import Head from 'next/head';
import styles from '../styles/Home.module.css';

// The Storyblok Client
import Storyblok from '../lib/storyblok';
import useStoryblok from '../lib/storyblok-hook';
import DynamicComponent from '../components/DynamicComponent';

export default function Post(props) {
  // the Storyblok hook to enable live updates
  const story = useStoryblok(props.story);
  console.log('story', story);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{story ? story.name : 'My Site'}</h1>
      </header>

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
  console.log('context', context.query);
  let slug = 'home';
  let params = {
    version: 'draft', // or 'published'
  };

  if (context.preview) {
    params.version = 'draft';
    params.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    revalidate: 10,
  };
}
