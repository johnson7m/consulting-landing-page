function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <a href="#top" className="logo">
          Consulting Co.
        </a>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;