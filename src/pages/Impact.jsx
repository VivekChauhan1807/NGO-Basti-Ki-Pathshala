// ✅ Redesigned & Enhanced Impact.jsx Section with Animated Counters, Timeline, Stories & CTA

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Impact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <div className="container-fluid px-4 py-5">
      {/* 🔷 Section Header */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h1 className="fw-bold">Our Impact</h1>
        <p className="lead">See how your support has transformed lives across villages and cities.</p>
      </div>

      {/* 🔶 Key Metrics with Animated Counters */}
      <div className="row g-4 text-center mb-5">
        {[
          { target: 5000, label: 'Children Educated', color: 'warning' },
          { target: 2500, label: 'Villages Reached', color: 'success' },
          { target: 1250, label: 'Volunteers Onboarded', color: 'primary' },
          { target: 500, label: 'Community Events', color: 'danger' },
        ].map((item, idx) => (
          <div className="col-md-3" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
            <div className={`p-4 bg-${item.color} bg-opacity-10 rounded shadow-sm`}>
              <h2 className={`text-${item.color} fw-bold counter`} data-target={item.target}>0</h2>
              <p className="mb-0">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔷 Timeline Section */}
      <div className="my-5" data-aos="fade-up">
        <h2 className="text-center fw-bold mb-4">Growth Timeline</h2>
        <div className="row g-4">
          {[
            { year: '2019', desc: 'Started under a tree with 10 kids in Delhi slums.' },
            { year: '2020', desc: 'Expanded to 5 centers & added evening tuition.' },
            { year: '2021', desc: 'Launched girl empowerment & hygiene programs.' },
            { year: '2022', desc: 'Set up digital hubs in 10+ rural communities.' },
            { year: '2023', desc: 'Received National Award for Community Service.' },
            { year: '2024', desc: 'Received National Award for Community Service.' },
          ].map((step, i) => (
            <div className="col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-bold text-primary">{step.year}</h5>
                <p className="mb-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔶 Impact Stories */}
      <div className="my-5">
        <h2 className="text-center fw-bold mb-4" data-aos="fade-up">Real Stories, Real Change</h2>
        <div className="row g-4">
          {[
            {
              name: 'Aman (12 yrs)',
              text: 'From collecting scrap to topping his class, Aman is now a young leader in his community.',
              img: '/images/Aman.webp',
              loading: "lazy",
            },
            {
              name: 'Sakshi (15 yrs)',
              text: 'Empowered with self-defense and hygiene awareness, Sakshi inspires 30+ other girls.',
              img: '/images/Sakshi.webp',
              loading: "lazy",
            },
            {
              name: 'Ravi (18 yrs)',
              text: 'Once directionless, Ravi is now pursuing a career in web development after our workshops.',
              img: '/images/Ravi.webp',
              loading: "lazy",
            },
          ].map((story, i) => (
            <div className="col-md-4" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={story.img}
                  alt={story.name}
                  className="card-img-top"
                  style={{ height: '230px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">{story.name}</h5>
                  <p>{story.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔷 Final CTA */}
      <div className="bg-warning bg-opacity-25 text-center p-5 rounded mt-5" data-aos="zoom-in">
        <h3 className="fw-bold mb-3">Want to Create More Impact?</h3>
        <p className="lead">Your support can transform more lives. Volunteer, Donate, or Spread the Word!</p>
        <a href="/donate" className="btn btn-warning btn-lg mt-3 px-4">Donate Now</a>
      </div>
    </div>
  );
}

export default Impact;