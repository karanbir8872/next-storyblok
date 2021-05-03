// The Storyblok Client
import Head from 'next/head';
import Storyblok from '../../lib/storyblok';
import useStoryBlok from '../../lib/storyblok-hook';
import BlogPost from '../../components/BlogPost';
import Header from '../../components/Header';

export default function Post(props) {
  // the Storyblok hook to enable live updates
  const story = useStoryBlok(props.story);
  console.log('story', story);
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
        />
      </Head>
      <Header />

      <main>
        {' '}
        <BlogPost blok={story} />
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  // const params = {
  //   version: 'draft', // or 'published'
  // };

  // if (context.preview) {
  //   params.version = 'draft';
  //   params.cv = Date.now();
  // }

  const { data } = await Storyblok.get('cdn/links/', {});
  // eslint-disable-next-line prefer-const
  let paths = [];
  // console.log('path', paths);
  Object.keys(data.links).forEach((linkKey) => {
    if (!data.links[linkKey].is_folder) {
      if (data.links[linkKey].slug !== 'home') {
        paths.push({ params: { slug: data.links[linkKey].slug } });
      }
    }
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const params = {
    version: 'draft', // or 'published'
  };

  if (context.preview) {
    params.version = 'draft';
    params.cv = Date.now();
  }

  const { data } = await Storyblok.get(
    `cdn/stories/post/my-first-post`,
    params,
  );
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    revalidate: 10,
  };
}
