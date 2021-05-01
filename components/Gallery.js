const Gallery = ({ blok }) => {
  // console.log('blok', blok);
  return (
    <div>
      <h2 className="is-size-1 has-text-primary mb-3 has-text-centered">
        {blok.title}
      </h2>
      <div className="columns is-multiline">
        {blok.galleryImages &&
          blok.galleryImages.map((item) => (
            <div key={item.id} className="column is-4">
              <figure className="image is-5by4">
                <img src={item.filename} alt={item.alt || 'gallery'} />
              </figure>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Gallery;
