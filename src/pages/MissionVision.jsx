// ✅ Fully Redesigned: Mission & Vision Page with Transitions, Cards, Content & Impact Sections
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MissionVision() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">
      {/* 🔷 TITLE SECTION */}
      <h1 className="text-center fw-bold mb-4" data-aos="fade-down">Our Mission & Vision</h1>
      <p className="lead text-center mb-5 px-md-5" data-aos="fade-up">
        We are dedicated to transforming lives through holistic education. Our mission and vision embody our core belief: that every child deserves a future filled with hope, opportunity, and dignity.
      </p>

      {/* 🔶 MISSION & VISION CARDS */}
      <div className="row g-4">
        <div className="col-md-6" data-aos="fade-right">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="fw-bold text-warning">Our Mission</h4>
              <p>
                To educate, empower, and uplift underprivileged children by providing them with the resources, mentorship, and support they need to thrive academically and socially.
              </p>
              <ul className="list-unstyled mt-3">
                <li>✔️ Evening Schools in Slums</li>
                <li>✔️ Digital Learning Labs</li>
                <li>✔️ Vocational & Soft Skills</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="fw-bold text-success">Our Vision</h4>
              <p>
                A future where no child is left behind — where education paves the path to equality, innovation, and global leadership for every child regardless of their socioeconomic background.
              </p>
              <ul className="list-unstyled mt-3">
                <li>🌍 Inclusive Education Models</li>
                <li>📈 Life Skills Beyond Textbooks</li>
                <li>💼 Future-Ready Youth Workforce</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 IMPACT STATISTICS */}
      <div className="row text-center my-5" data-aos="fade-up">
        <div className="col-md-4">
          <div className="bg-light p-4 shadow-sm rounded">
            <h2 className="text-warning fw-bold">25+</h2>
            <p>Ongoing Education Campaigns</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-light p-4 shadow-sm rounded">
            <h2 className="text-success fw-bold">3,000+</h2>
            <p>Children Directly Impacted</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-light p-4 shadow-sm rounded">
            <h2 className="text-primary fw-bold">150+</h2>
            <p>Workshops & Events Conducted</p>
          </div>
        </div>
      </div>

      {/* 🔹 VALUES CAROUSEL STYLE SECTION */}
      <div className="py-5 px-md-5 bg-light rounded shadow-sm" data-aos="fade-up">
        <h3 className="text-center fw-bold mb-4">Our Core Values</h3>
        <div className="row g-4">
          <div className="col-md-3" data-aos="zoom-in">
            <div className="card text-center border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold">Integrity</h5>
                <p>We lead with honesty and stand by our commitments to community welfare.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="100">
            <div className="card text-center border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold">Inclusiveness</h5>
                <p>Every child, every background — we serve without bias or judgment.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="200">
            <div className="card text-center border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold">Innovation</h5>
                <p>Adapting to change through modern tech-based learning and teaching models.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="300">
            <div className="card text-center border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold">Empathy</h5>
                <p>Walking alongside our students with compassion and care every step of the way.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 STRATEGIC PILLARS SECTION */}
      <div className="py-5" data-aos="fade-up">
        <h3 className="text-center fw-bold mb-4">Strategic Pillars of Our Work</h3>
        <ul className="list-group list-group-flush px-md-5">
          <li className="list-group-item">🎓 Building learning centers in remote villages</li>
          <li className="list-group-item">📚 Partnering with schools for hybrid education</li>
          <li className="list-group-item">🤝 Collaboration with local health & youth groups</li>
          <li className="list-group-item">🧠 Mental health awareness for children & parents</li>
          <li className="list-group-item">🖥️ Equipping digital skills for next-gen readiness</li>
        </ul>
      </div>

      {/* 🔹 FINAL CTA */}
      <div className="text-center mt-5" data-aos="zoom-in">
        <h4 className="fw-bold mb-3">Do you believe in our mission?</h4>
        <p className="lead">Join our vision — volunteer, donate, or spread the word.</p>
        <a href="/volunteer" className="btn btn-lg btn-warning fw-bold px-4">Get Involved</a>
      </div>
    </div>
  );
}

export default MissionVision;