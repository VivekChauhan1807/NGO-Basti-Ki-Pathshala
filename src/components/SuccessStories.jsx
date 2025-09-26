// ✅ SUCCESS STORIES SECTION (Fully Responsive, Carousel Ready)
// File: src/components/SuccessStories.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SuccessStories = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const stories = [
    {
      name: 'Aarti Kumari',
      story: 'From slum to scholarship, Aarti now studies at a reputed college thanks to our support.',
      image: '/images/aartiKumari.webp',
      loading: "lazy",
    },
    {
      name: 'Manoj Yadav',
      story: 'Once a school dropout, Manoj now teaches computers to village kids.',
      image: '/images/manojYadav.webp',
      loading: "lazy",
    },
    {
      name: 'Salma Sheikh',
      story: 'Salma overcame odds and became the first girl from her community to go to high school.',
      image: '/images/salmaSheikh.webp',
      loading: "lazy",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5" data-aos="fade-up">🌟 Success Stories</h2>
      <div className="row g-4">
        {stories.map((s, index) => (
          <div className="col-md-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="card h-100 shadow border-0">
              <img src={s.image} alt={s.name} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{s.name}</h5>
                <p className="card-text">“{s.story}”</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;