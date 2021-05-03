import React from 'react';
// import SbEditable from 'storyblok-react';
import { render } from 'storyblok-rich-text-react-renderer';

const BlogPost = ({ blok }) => {
  return (
    <>
      {/* <SbEditable content={blok} key={blok._uid}> */}
      <div className="columns w-full has-text-centered is-centered">
        <div className="column-8">
          <h1 className="has-text-primary has-text-centered is-size-1">
            {blok ? blok.name : ''}
          </h1>

          <p className="text-gray-500 text-lg max-w-lg">
            {blok ? blok.content.intro : ''}
          </p>
          <figure className="image is-5by4 mt-5">
            <img
              className="w-full bg-gray-300 my-16"
              src={
                blok
                  ? blok.content.image
                  : 'https://versions.bulma.io/0.7.0/images/placeholders/600x480.png'
              }
              alt="img"
            />
          </figure>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
        <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
          {render(blok && blok.content.long_text)}
        </div>
      </div>
      {/* </SbEditable> */}
    </>
  );
};

export default BlogPost;
