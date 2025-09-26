// src/pages/About.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import './About.css'; // Optional custom styling (create if needed)

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* 🔷 INTRO SECTION */}
      <div className="bg-light py-5">
        <div className="container text-center" data-aos="fade-up">
          <h1 className="fw-bold mb-4">About <span className="text-warning">Basti Ki Pathshala</span></h1>
          <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
            Basti Ki Pathshala is a grassroots initiative aimed at transforming the lives of underprivileged children through education, healthcare, and empowerment.
          </p>
        </div>
      </div>

      {/* 🔷 OUR MISSION & VISION */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6" data-aos="fade-right">
            <img src="/images/mission.webp" loading="lazy" alt="Mission" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h3 className="fw-bold mb-3">Our Mission</h3>
            <p>
              To empower marginalized children with access to quality education, vocational training, and community support — enabling them to break the cycle of poverty.
            </p>
            <h3 className="fw-bold mt-4 mb-3">Our Vision</h3>
            <p>
              A world where every child, regardless of background, has equal opportunity to learn, grow, and thrive.
            </p>
          </div>
        </div>
      </div>

      {/* 🔷 CORE VALUES CARDS with IMAGES */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">What Drives Us</h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="zoom-in">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <img
                src="/images/empathy.webp"
                loading="lazy"
                alt="Empathy"
                className="mx-auto mb-3"
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1rem' }}
              />
              <div className="card-body">
                <h5 className="fw-bold mb-2 text-warning">Empathy</h5>
                <p className="mb-0">Understanding the real challenges of slum children and addressing them with compassion.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <img
                src="/images/inclusivity.webp"
                loading="lazy"
                alt="Inclusivity"
                className="mx-auto mb-3"
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1rem' }}
              />
              <div className="card-body">
                <h5 className="fw-bold mb-2 text-success">Inclusivity</h5>
                <p className="mb-0">We believe every child deserves a fair chance — regardless of caste, religion, or gender.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <img
                src="/images/transparency.webp"
                loading="lazy"
                alt="Transparency"
                className="mx-auto mb-3"
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1rem' }}
              />
              <div className="card-body">
                <h5 className="fw-bold mb-2 text-primary">Transparency</h5>
                <p className="mb-0">We maintain clear communication and reporting with our donors and volunteers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 🔷 CALL TO ACTION */}
      <div className="bg-warning py-5 text-center" data-aos="zoom-in">
        <h3 className="fw-bold mb-3">Want to Know More or Support Us?</h3>
        <a href="/volunteer" className="btn btn-dark btn-lg me-3">Join as Volunteer</a>
        <a href="/donate" className="btn btn-outline-dark btn-lg">Donate Now</a>
      </div>
    </>
  );
};

export default About;