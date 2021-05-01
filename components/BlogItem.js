const BlogItem = ({ blok }) => {
  console.log('blog item', blok);
  return <li>{blok.title}</li>;
};

export default BlogItem;
