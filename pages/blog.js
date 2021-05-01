import Head from 'next/head';
import styles from '../styles/Home.module.css';

// The Storyblok Client
import Storyblok from '../lib/storyblok';
// import useStoryblok from '../lib/storyblok-hook';
import DynamicComponent from '../components/DynamicComponent';

export default function Blog({ story }) {
  // the Storyblok hook to enable live updates
  // const story = useStoryblok(props.story);
  console.log('story', story);

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{story ? story.name : 'My Site'}</h1>
      </header>

      <main>
        <ul>
          {story
            ? story.content.body.map((blok) => (
                <DynamicComponent blok={blok} key={blok._uid} />
              ))
            : null}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  let slug = 'blog';
  let params = {
    version: 'published', // or 'draft, published'
    resolve_relations: 'blog-posts.posts',
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
