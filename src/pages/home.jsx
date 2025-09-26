// src/pages/Home.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Home.css';
import SuccessStories from '../components/SuccessStories';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* 🔷 HERO SECTION */}
      <div
        className="hero-section text-light d-flex align-items-center"
        style={{
          minWidth: '99vw',
          minHeight: '100vh',
          backgroundImage: `url('/images/home1.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          loading : "lazy",
        }}
      >
        <div className="container text-center" data-aos="fade-up">
          <h1 className="display-4 fw-bold mb-4">
            Welcome to <span className="text-warning">Basti Ki Pathshala</span>
          </h1>
          <p className="lead mb-5">
            Empowering underprivileged children with education, care, and a brighter future.
          </p>
          <div>
            <Link to="/volunteer" className="btn btn-outline-light btn-lg me-3">
              Become a Volunteer
            </Link>
            <Link to="/donate" className="btn btn-warning btn-lg">
              Donate Now
            </Link>
          </div>

          {/* 🔷 WHY CHOOSE US SECTION */}
          <div className="container my-5 py-5 bg-light text-dark rounded shadow" data-aos="fade-up">
            <h2 className="fw-bold mb-3 text-center">Why Choose Us?</h2>
            <p className="lead text-center">
              We’ve impacted 1000+ children across 15+ villages with education, healthcare, and support. Join our mission today.
            </p>
          </div>

        </div>
      </div>

      {/* 🔹 STATS SECTION */}
      <div className="container my-5">
        <div className="row text-center" data-aos="fade-up">
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <h2 className="text-warning fw-bold">1000+</h2>
              <p className="mb-0">Children Educated</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <h2 className="text-warning fw-bold">200+</h2>
              <p className="mb-0">Villages Reached</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <h2 className="text-warning fw-bold">350+</h2>
              <p className="mb-0">Volunteers Trained</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 MOTIVATIONAL QUOTE BANNER */}
      <div className="bg-warning text-dark text-center py-5" data-aos="zoom-in">
        <h3 className="fw-bold mb-3">“Together, we can light up every life with education.”</h3>
        <p className="lead">Join us in building a stronger, smarter, and more equal tomorrow.</p>
      </div>

      {/* 🔹 NGO PROGRAM AREAS with IMAGES */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4" data-aos="fade-up">Our Focus Areas</h2>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4" data-aos="fade-right">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/childEducation.webp" loading="lazy" className="card-img-top" alt="Education" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="fw-bold">Child Education</h5>
                <p>Evening classes, digital labs, and school supplies to transform futures.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4" data-aos="fade-up">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/girlEmpowerment.webp" loading="lazy" className="card-img-top" alt="Empowerment" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="fw-bold">Girl Empowerment</h5>
                <p>Special programs for adolescent girls: menstrual hygiene, self-defense & more.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4" data-aos="fade-left">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/health&Nutrition.webp" loading="lazy" className="card-img-top" alt="Health" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="fw-bold">Health & Nutrition</h5>
                <p>We conduct regular medical camps, checkups, and provide nutritional meals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 🔷 WHAT WE DO SECTION */}
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">What We Do</h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="zoom-in">
            <div className="card h-100 shadow-sm">
              <img src="/images/Education.webp" loading="lazy" className="card-img-top" alt="Education Support" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Education for All</h5>
                <p className="card-text">
                  We provide basic to advanced education to underprivileged children through evening classes, digital learning, and workshops.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="150">
            <div className="card h-100 shadow-sm">
              <img src="/images/Health.webp" loading="lazy" className="card-img-top" alt="Health Care" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Healthcare Initiatives</h5>
                <p className="card-text">
                  From free medical checkups to hygiene awareness, we support children’s well-being through periodic health camps and counseling.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="card h-100 shadow-sm">
              <img src="/images/Empowerment.webp" loading="lazy" className="card-img-top" alt="Empowerment Programs" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Skill Empowerment</h5>
                <p className="card-text">
                  We offer vocational training, computer classes, and workshops to help youth become self-reliant and job-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ...other content */}
      <SuccessStories/>
    </>
  );
}

export default Home;
