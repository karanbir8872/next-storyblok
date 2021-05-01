const Header = () => (
  // console.log('blok', blok);
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <a href="/" className="navbar-item">
          Home
        </a>
        <a href="/about" className="navbar-item">
          About
        </a>{' '}
        <a href="/gallery" className="navbar-item">
          Gallery
        </a>{' '}
        <a href="/blog" className="navbar-item">
          Blogs
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
