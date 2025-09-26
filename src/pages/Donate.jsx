// ✅ Redesigned Donate.jsx with Cards, Online Methods, QR, Bank Details & Full AOS Effects

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Donate = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid px-4 py-5">
      {/* 🔷 Title & Message */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h1 className="fw-bold">Support Our Mission</h1>
        <p className="lead">
          Your generous donation helps us bring education, meals, and hope to hundreds of underprivileged children. Every rupee you give makes a difference.
        </p>
      </div>

      {/* 🔶 Donation Options Cards */}
      <div className="row g-4 mb-5">
        {[
          {
            icon: '🎒',
            title: "Sponsor a Child",
            desc: "Fund a child's education and future with a monthly donation.",
          },
          {
            icon: '📚',
            title: 'Donate Books & Supplies',
            desc: 'Help us keep our centers stocked with quality learning materials.',
          },
          {
            icon: '🍲',
            title: 'Fund Mid-Day Meals',
            desc: 'Ensure no child goes hungry while learning.',
          },
          {
            icon: '👩‍🏫',
            title: 'Support a Volunteer',
            desc: 'Sponsor the training and development of an on-ground change-maker.',
          },
        ].map((item, idx) => (
          <div className="col-md-3" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
            <div className="bg-light text-center p-4 shadow-sm rounded h-100">
              <div className="fs-1 mb-2">{item.icon}</div>
              <h5 className="fw-bold">{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔷 Donation Methods */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6" data-aos="fade-right">
          <img
            src="/images/QR_Code.webp"
            loading="lazy"
            alt="Donate QR"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h4 className="fw-bold mb-3">Easy Ways to Donate</h4>
          <ul className="list-group mb-4">
            <li className="list-group-item">✅ UPI: bastikipathshala@upi</li>
            <li className="list-group-item">✅ PayTM / Google Pay / PhonePe: 9876543210</li>
            <li className="list-group-item">✅ Net Banking: Basti Ki Pathshala Foundation</li>
            <li className="list-group-item">✅ IFSC Code: BKID0001234 | A/C No: 1234567890</li>
          </ul>
          <a href="#" className="btn btn-success btn-lg px-4">Donate Now</a>
        </div>
      </div>

      {/* 🔶 Why Your Help Matters */}
      <div className="row g-4 text-center mb-5">
        {[
          {
            title: 'Real Impact',
            text: 'Your contribution helps children read, write, and dream.',
          },
          {
            title: 'Transparency',
            text: 'We provide detailed reports and real-time usage insights.',
          },
          {
            title: 'Tax Benefits',
            text: 'All donations are eligible under Section 80G of the IT Act.',
          },
        ].map((item, i) => (
          <div className="col-md-4" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
            <div className="bg-white shadow-sm rounded p-4 h-100">
              <h5 className="fw-bold text-primary mb-2">{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔷 FAQs */}
      <div className="mb-5" data-aos="fade-up">
        <h3 className="fw-bold text-center mb-4">Frequently Asked Questions</h3>
        <div className="accordion" id="donationFAQs">
          {[
            {
              q: 'Can I donate monthly?',
              a: 'Yes, you can choose recurring monthly donations to continuously support a child.',
            },
            {
              q: 'Will I get a receipt?',
              a: 'Absolutely! We email a donation receipt and also issue an 80G certificate.',
            },
            {
              q: 'Is there a minimum amount?',
              a: 'No minimum—every rupee counts and supports a real cause.',
            },
          ].map((faq, idx) => (
            <div className="accordion-item" key={idx}>
              <h2 className="accordion-header" id={`heading${idx}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${idx}`}
                >
                  {faq.q}
                </button>
              </h2>
              <div
                id={`collapse${idx}`}
                className="accordion-collapse collapse"
                data-bs-parent="#donationFAQs"
              >
                <div className="accordion-body">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔶 Final CTA Banner */}
      <div className="bg-success bg-opacity-25 p-5 text-center rounded shadow-sm" data-aos="zoom-in">
        <h3 className="fw-bold mb-2">Be the Reason for Someone's Smile</h3>
        <p className="lead mb-3">
          With your help, we can educate, inspire, and uplift thousands. Start your impact journey today.
        </p>
        <a href="#" className="btn btn-success btn-lg px-4">Contribute Now</a>
      </div>
    </div>
  );
};

export default Donate;