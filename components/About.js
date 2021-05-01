const About = ({ blok }) => {
  // console.log(blok);
  return (
    <div className="">
      <h2 className="is-size-1 has-text-primary mb-3 has-text-centered">
        {blok.title}
      </h2>
      <p className="my-3 has-text-centered has-text-grey">{blok.subtitle}</p>
      <div className="columns is-multiline is-centered">
        {blok.images &&
          blok.images.map((item) => (
            <div key={item.id} className="column is-4">
              <figure className="image is-5by4">
                <img src={item.filename} alt="images" />
              </figure>
            </div>
          ))}
      </div>
    </div>
  );
};
export default About;
