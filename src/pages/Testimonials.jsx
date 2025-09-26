// ✅ Auto-Rotating Testimonials.jsx Section with Extra Content & CTA

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: 'Rani Sharma',
    feedback: 'Basti Ki Pathshala changed my life. I got access to quality education!',
    image: '/images/RaniSharma.webp',
    loading: "lazy",
  },
  {
    name: 'Ravi Kumar',
    feedback: 'Their volunteers are amazing and helped me learn computers.',
    image: '/images/RaviKumar.webp',
    loading: "lazy",
  },
  {
    name: 'Fatima Ali',
    feedback: 'The team is doing great work for underprivileged kids.',
    image: '/images/FatimaAli.webp',
    loading: "lazy",
  },
  {
    name: 'Vikram Singh',
    feedback: 'I was able to get my daughter enrolled in school thanks to this NGO.',
    image: '/images/VikramSingh.webp',
    loading: "lazy",
  },
  {
    name: 'Sana Qureshi',
    feedback: 'From no hope to big dreams — thank you for changing our lives.',
    image: '/images/SanaQureshi.webp',
    loading: "lazy",
  },
  {
    name: 'Prakash Raj',
    feedback: 'Volunteering here gave my life purpose. I’ve learned more than I’ve taught.',
    image: '/images/PrakashRaj.webp',
    loading: "lazy",
  },
  {
    name: 'Ramesh Shukla',
    feedback: 'Every visit reminds me why I joined this mission. We are making change visible.',
    image: '/images/RameshShukla.webp',
    loading: "lazy",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-5">
      {/* 🔷 Section Header */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h1 className="fw-bold">Voices of Change</h1>
        <p className="lead">Real stories from real lives we've impacted.</p>
      </div>

      {/* 🔶 Auto-Rotating Testimonials */}
      <div className="d-flex justify-content-center mb-5">
        <div className="card shadow-sm p-4 bg-light text-center" style={{ maxWidth: '500px' }} data-aos="zoom-in">
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="rounded-circle mx-auto mb-3"
            style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #ffc107' }}
          />
          <h5 className="fw-bold">{testimonials[activeIndex].name}</h5>
          <p className="fst-italic">“{testimonials[activeIndex].feedback}”</p>
          <div className="text-warning">
            ★★★★★
          </div>
        </div>
      </div>

      {/* 🔷 Additional Testimonials Grid */}
      <div className="row g-4">
        {testimonials.map((t, index) => (
          index !== activeIndex && (
            <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 shadow-sm p-3 bg-white text-center">
                <img
                  src={t.image}
                  className="rounded-circle mx-auto mb-3"
                  alt={t.name}
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <h6 className="fw-bold mb-1">{t.name}</h6>
                <small className="text-muted">“{t.feedback}”</small>
              </div>
            </div>
          )
        ))}
      </div>

      {/* 🔶 CTA Block */}
      <div className="bg-warning bg-opacity-25 mt-5 text-center p-5 rounded shadow" data-aos="zoom-in">
        <h3 className="fw-bold mb-3">Want to Be Featured?</h3>
        <p className="lead">Your journey can inspire others. Share your experience with Basti Ki Pathshala.</p>
        <a href="/volunteer" className="btn btn-warning btn-lg px-4">Join Our Mission</a>
      </div>

      {/* 🔷 Impact Quote or Mini Testimonial Banner */}
      <div className="bg-dark text-light text-center mt-5 p-4 rounded shadow" data-aos="fade-up">
        <h4 className="fw-bold mb-2">“Small steps by many can change millions of lives.”</h4>
        <p className="lead">We believe your support is powerful — thank you for being with us.</p>
      </div>

      {/* 🔷 What Makes Us Unique */}
      <div className="container my-5" data-aos="fade-up">
        <h3 className="text-center fw-bold mb-4">What Makes Us Unique</h3>
        <div className="row text-center">
          {[
            {
              icon: '🎯',
              title: 'Child-Centered Approach',
              desc: 'We build everything around the child’s needs, emotions, and long-term goals.',
            },
            {
              icon: '🤝',
              title: 'Volunteer-Driven Impact',
              desc: 'Our volunteers aren’t just helpers—they’re leaders of transformation.',
            },
            {
              icon: '📈',
              title: 'Measurable Progress',
              desc: 'We track each child’s development with clarity, care, and precision.',
            },
          ].map((feature, index) => (
            <div className="col-md-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <div className="fs-1">{feature.icon}</div>
                <h5 className="fw-bold mt-3">{feature.title}</h5>
                <p className="text-muted">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔷 Our Stats Speak Loudly */}
      <div className="bg-dark text-light py-5" data-aos="zoom-in">
        <div className="container">
          <h3 className="text-center fw-bold mb-4">More Than Words—Our Numbers Speak</h3>
          <div className="row text-center">
            {[
              { count: '99%', label: 'Student Satisfaction' },
              { count: '90%', label: 'Girls Participation' },
              { count: '3200+', label: 'Books Donated' },
              { count: '100+', label: 'Workshops Conducted' },
            ].map((stat, index) => (
              <div className="col-md-3 mb-3" key={index}>
                <h2 className="fw-bold text-warning">{stat.count}</h2>
                <p className="mb-0">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔷 Volunteer Testimonials Preview */}
      <div className="container my-5" data-aos="fade-up">
        <h3 className="text-center fw-bold mb-4">Voices of Our Volunteers</h3>
        <div className="row g-4">
          {[
            {
              name: 'Priya Gupta',
              role: 'Youth Mentor',
              text: 'Volunteering here gave my life purpose. I’ve learned more than I’ve taught.',
              img: '/images/PriyaGupta.webp',
              loading: "lazy",
            },
            {
              name: 'Nikhil Verma',
              role: 'Health Coordinator',
              text: 'Every visit reminds me why I joined this mission. We are making change visible.',
              img: '/images/NikhilVerma.webp',
              loading: "lazy",
            },
          ].map((volunteer, i) => (
            <div className="col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="card border-0 shadow-sm h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-md-4">
                    <img
                      src={volunteer.img}
                      alt={volunteer.name}
                      className="img-fluid rounded-start"
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="fw-bold mb-1">{volunteer.name}</h5>
                      <p className="text-muted mb-1">{volunteer.role}</p>
                      <p className="mb-0 fst-italic">“{volunteer.text}”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Testimonials;