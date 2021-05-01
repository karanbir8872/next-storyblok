import Link from 'next/link';

const BlogItem = ({ blok }) => {
  console.log('blog item', blok);
  return (
    <>
      <h1 className="has-text-primary has-text-centered is-size-1">
        {blok.title}
      </h1>
      <div className="columns is-centered">
        {blok.posts &&
          blok.posts.map((item) => (
            <Link href={`/post/${item.slug}`} key={item.id}>
              <div className="column is-4">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={item.content.image} alt="Placeholder " />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{item.name}</p>
                        <p className="subtitle is-6">{item.content.intro}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default BlogItem;
