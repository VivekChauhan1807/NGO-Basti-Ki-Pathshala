// ✅ Redesigned Volunteer.jsx with Validation + AOS + Netlify Form + Stats + Visual Appeal

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Volunteer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    skills: '',
    reason: '',
    availability: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = 'Valid email required';
    if (!/^\d{10}$/.test(formData.phone)) err.phone = '10-digit phone required';
    if (!formData.city.trim()) err.city = 'City is required';
    if (!formData.reason.trim()) err.reason = 'Why is required';
    if (!formData.availability.trim()) err.availability = 'Availability is required';
    return err;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setFormData({
        name: '', email: '', phone: '', city: '', skills: '', reason: '', availability: ''
      });
    } else {
      setErrors(validation);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-3" data-aos="fade-up">Volunteer With Us</h1>
      <p className="text-center lead mb-5" data-aos="fade-up" data-aos-delay="100">
        Be the change you want to see. Join us in empowering lives through education, care, and compassion.
      </p>

      <div className="bg-warning text-dark text-center p-4 rounded shadow-sm mb-5" data-aos="zoom-in">
        <h4 className="fw-bold">“The best way to find yourself is to lose yourself in the service of others.” – Mahatma Gandhi</h4>
      </div>

      <div className="row">
        <div className="col-md-8" data-aos="fade-right">
          <div className="card shadow-sm p-4 border-0">
            <h4 className="fw-bold mb-3">Volunteer Registration Form</h4>
            <form onSubmit={handleSubmit} name="volunteer-form" method="POST" data-netlify="true" netlify>
              <input type="hidden" name="form-name" value="volunteer-form" />
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Full Name</label>
                  <input name="name" type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} value={formData.name} onChange={handleChange} />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="col">
                  <label className="form-label">Email</label>
                  <input name="email" type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={formData.email} onChange={handleChange} />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Phone</label>
                  <input name="phone" type="tel" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} value={formData.phone} onChange={handleChange} />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <div className="col">
                  <label className="form-label">City</label>
                  <input name="city" type="text" className={`form-control ${errors.city ? 'is-invalid' : ''}`} value={formData.city} onChange={handleChange} />
                  {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Skills or Expertise</label>
                <input name="skills" type="text" className="form-control" value={formData.skills} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Why do you want to volunteer?</label>
                <textarea name="reason" rows="3" className={`form-control ${errors.reason ? 'is-invalid' : ''}`} value={formData.reason} onChange={handleChange}></textarea>
                {errors.reason && <div className="invalid-feedback">{errors.reason}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Availability (days/hours)</label>
                <input name="availability" type="text" className={`form-control ${errors.availability ? 'is-invalid' : ''}`} value={formData.availability} onChange={handleChange} />
                {errors.availability && <div className="invalid-feedback">{errors.availability}</div>}
              </div>
              <button type="submit" className="btn btn-warning w-100 fw-bold">Submit Application</button>
            </form>

            {submitted && (
              <div className="alert alert-success mt-4" role="alert">
                Thank you for registering as a volunteer! We'll reach out to you soon.
              </div>
            )}
          </div>
        </div>

        <div className="col-md-4" data-aos="fade-left">
          <div className="card h-100 border-0 shadow-sm">
            <img src="/images/volunteerInspiration.webp" loading="lazy" alt="Volunteer Inspiration" className="card-img-top" style={{ height: '280px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="fw-bold">You Matter!</h5>
              <p>Every small act of kindness you offer has the power to transform a life. Be that light.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 text-center" data-aos="fade-up">
        <div className="col-md-4 mb-4">
          <div className="bg-light p-4 rounded shadow-sm">
            <h2 className="text-warning fw-bold">150+</h2>
            <p className="mb-0">Active Volunteers</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="bg-light p-4 rounded shadow-sm">
            <h2 className="text-warning fw-bold">95%</h2>
            <p className="mb-0">Volunteer Satisfaction</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="bg-light p-4 rounded shadow-sm">
            <h2 className="text-warning fw-bold">24/7</h2>
            <p className="mb-0">Support & Guidance</p>
          </div>
        </div>
      </div>

      <div className="bg-dark text-light text-center p-4 rounded mt-5 shadow-sm" data-aos="zoom-in">
        <h4 className="fw-bold mb-2">Still thinking?</h4>
        <p className="lead">Let’s make this world better — one child, one step at a time.</p>
        <a href="/donate" className="btn btn-warning btn-lg mt-2 px-4">Support in Other Ways</a>
      </div>
    </div>
  );
}

export default Volunteer;