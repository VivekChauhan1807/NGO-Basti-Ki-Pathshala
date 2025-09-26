// ✅ Redesigned Navbar.jsx — With Contact Strip, Social Icons, Support Button, Certified Banner, Search Box, Fixed Gaps, and Hover Fixes

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* 🔷 Top Strip with Contact Info + Socials + Support */}
      <div className="bg-warning text-dark py-2 small px-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex flex-column flex-md-row gap-2 align-items-center">
          <span><i className="bi bi-telephone-fill me-1"></i><strong> Helpline:</strong> +91 9876543210</span>
          <span><i className="bi bi-envelope-fill me-1"></i><strong> Email:</strong> contact@bastikipathshala.org</span>
        </div>
        <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
          <a href="#" className="text-dark"><i className="bi bi-whatsapp"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-youtube"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-meta"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-google"></i></a>
          <Link to="/donate" className="btn btn-danger btn-sm fw-bold">Support A Cause</Link>
        </div>
      </div>

      {/* 🔶 Certified Image Strip with Flexbox Fix */}
      <div className="d-flex justify-content-between align-items-center bg-light px-5 py-0">
        <div className="text-end d-flex d-md-block">
          <p className="mb-0 fw-semibold text-muted">India’s Trusted NGO for Slum Education</p>
          <small className="text-muted">Recognized & Certified by Local & Global Agencies</small>
        </div>
        <div className="d-flex"style={{ height: '80px' }}>
          <img
            src="/logo.webp"
            loading= "lazy"
            alt="Certified"
            style={{ height: '100%', objectFit: 'contain' }}
          />
          <img
            src="/images/certified.webp"
            loading= "lazy"
            alt="Certified"
            style={{ height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* 🔷 Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top border-top">
        <div className="container-fluid px-4">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/logo.webp" loading= "lazy" alt="Logo" width="40" height="40" className="me-2" />
            <span className="fw-bold">Basti Ki Pathshala</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/volunteer">Volunteer</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="moreDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="moreDropdown"
                  style={{ maxHeight: '300px', overflowY: 'auto', minWidth: '220px' }}
                >
                  <li><Link className="dropdown-item" to="/mission">Mission & Vision</Link></li>
                  <li><Link className="dropdown-item" to="/impact">Impact</Link></li>
                  <li><Link className="dropdown-item" to="/testimonials">Testimonials</Link></li>
                  <li><Link className="dropdown-item" to="/donate">Donate</Link></li>
                  <li><Link className="dropdown-item" to="/events">News & Events</Link></li>
                  <li><Link className="dropdown-item" to="/team">Our Team</Link></li>
                  <li><Link className="dropdown-item" to="/gallery">Gallery</Link></li>
                </ul>
              </li>
            </ul>

            {/* 🔶 Search Input */}
            <form className="d-flex ms-3">
              <input
                className="form-control form-control-sm me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;