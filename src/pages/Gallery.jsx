// ✅ Redesigned Gallery.jsx with Masonry Layout, Modals, Filters, Captions, and Animated View

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import './Gallery.css'; // Optional: You can customize with additional CSS

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const allImages = [
    { src: '/images/IDC.webp', loading: "lazy", category: 'Events', caption: 'Independence Day Celebration' },
    { src: '/images/VTC.webp', loading: "lazy", category: 'Classroom', caption: 'Volunteers Teaching Children' },
    { src: '/images/DLW.webp', loading: "lazy", category: 'Workshops', caption: 'Digital Literacy Workshop' },
    { src: '/images/DCWK.webp', loading: "lazy", category: 'Festivals', caption: 'Diwali Crafts With Kids' },
    { src: '/images/SOP.webp', loading: "lazy", category: 'Community', caption: 'Slum Outreach Program' },
    { src: '/images/RDFH.webp', loading: "lazy", category: 'Events', caption: 'Republic Day Flag Hoisting' },
    { src: '/images/MMD.webp', loading: "lazy", category: 'Meals', caption: 'Midday Meal Distribution' },
    { src: '/images/SDT.webp', loading: "lazy", category: 'Girls Empowerment', caption: 'Self-Defense Training' },
    { src: '/images/SK.webp', loading: "lazy", category: 'Tech', caption: 'Computer Skills for All' },
  ];

  const categories = ['All', ...new Set(allImages.map(img => img.category))];
  const [filter, setFilter] = useState('All');
  const [modalImage, setModalImage] = useState(null);

  const filteredImages = filter === 'All' ? allImages : allImages.filter(img => img.category === filter);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold" data-aos="fade-up">Moments That Matter</h2>
      <p className="text-center lead mb-5" data-aos="fade-up" data-aos-delay="100">
        These are not just pictures, these are the snapshots of change we bring every day.
      </p>

      {/* 🔶 Filter Buttons */}
      <div className="text-center mb-4" data-aos="fade-up" data-aos-delay="200">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`btn btn-outline-warning mx-2 mb-2 ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔷 Masonry Grid */}
      <div className="row g-4">
        {filteredImages.map((img, index) => (
          <div className="col-sm-6 col-md-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="position-relative gallery-card rounded overflow-hidden shadow-sm">
              <img
                src={img.src}
                alt={img.caption}
                className="img-fluid w-100 h-100 object-fit-cover gallery-img"
                onClick={() => setModalImage(img)}
              />
              <div className="gallery-caption position-absolute bottom-0 start-0 w-100 p-2 bg-dark bg-opacity-50 text-white text-center">
                {img.caption}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔶 Modal View */}
      {modalImage && (
        <div className="modal fade show d-block" tabIndex="-1" onClick={() => setModalImage(null)}>
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <img src={modalImage.src} className="img-fluid rounded" alt="Large View" />
              <div className="modal-footer">
                <p className="mb-0 fw-bold">{modalImage.caption}</p>
                <button className="btn btn-danger" onClick={() => setModalImage(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔷 CTA Section */}
      <div className="text-center mt-5 pt-5" data-aos="fade-up">
        <h3 className="fw-bold">Want to be a part of our next beautiful memory?</h3>
        <p className="lead">Come volunteer, click, share, and cherish the journey with us.</p>
        <a href="/volunteer" className="btn btn-warning btn-lg px-4 mt-3">Join Our Team</a>
      </div>
    </div>
  );
};

export default Gallery;