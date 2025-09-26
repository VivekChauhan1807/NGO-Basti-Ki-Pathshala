import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 border-top mt-5">
      <div className="container">
        <div className="row g-4">

          {/* 🔷 About Section */}
          <div className="col-md-4">
            <img src="/logo.webp" loading= "lazy" alt="NGO Logo" style={{ width: '150px' }} className="mb-3" />
            <p>
              Basti Ki Pathshala is a grassroots initiative dedicated to bringing education, dignity, and dreams to slum children across India.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
              <a href="https://youtube.com" className="text-light fs-5"><i className="bi bi-youtube"></i></a>
              <a href="mailto:contact@bastikipathshala.org" className="text-light fs-5"><i className="bi bi-envelope-fill"></i></a>
            </div>
          </div>

          {/* 🔶 Quick Links */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/volunteer" className="text-light text-decoration-none">Volunteer</Link></li>
              <li><Link to="/donate" className="text-light text-decoration-none">Donate</Link></li>
              <li><Link to="/gallery" className="text-light text-decoration-none">Gallery</Link></li>
              <li><Link to="/news" className="text-light text-decoration-none">News & Events</Link></li>
            </ul>
          </div>

          {/* 🔷 Support */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Support Us</h5>
            <ul className="list-unstyled">
              <li>UPI: <span className="text-warning">bastikipathshala@upi</span></li>
              <li>PhonePe / GPay: 9876543210</li>
              <li>Email: contact@bastikipathshala.org</li>
              <li>Address: 123, Slum Area, Delhi - 110001</li>
              <li><a href="/donate" className="btn btn-warning btn-sm mt-2">Contribute Now</a></li>
            </ul>
          </div>

          {/* 🔶 Important */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Why Choose Us?</h5>
            <ul className="list-unstyled small">
              <li>✔️ 100% Transparent</li>
              <li>✔️ 80G Tax Benefit</li>
              <li>✔️ Direct Community Impact</li>
              <li>✔️ Women & Girl Focused</li>
              <li>✔️ Stories of Change</li>
            </ul>
          </div>

        </div>

        {/* 🔷 Bottom Footer Strip */}
        <div className="text-center py-3 mt-5 border-top border-secondary">
          <p className="mb-0">&copy; {new Date().getFullYear()} Basti Ki Pathshala Foundation | All Rights Reserved</p>
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-warning d-block mt-1 small">↑ Back to Top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;