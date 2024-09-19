import React, {useState} from "react";
import '../MyComponent_css/Services.css';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedService: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending the data to a server
    console.log('Form Submitted:', formData);
    alert(`Service Selected: ${formData.selectedService}`);
  };
    return (
        <section id="services" className="services">
            <h2>Our Insurance Services</h2>
            <div className="services-list">
                <div className="service">
                    <h3>Auto Insurance</h3>
                    <p>Protect your vehicle with our comprehensive auto insurance plans.</p>
                </div>
                <div className="service">
                    <h3>Home Insurance</h3>
                    <p>Ensure your home is safe from any unforeseen circumstances.</p>
                </div>
                <div className="service">
                    <h3>Health Insurance</h3>
                    <p>Secure your health and well-being with our tailored health insurance packages.</p>
                </div>
                <div className="service-form">
                <h3>Request a Service</h3>
                <form onSubmit={handleSubmit}>
                <input

                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                />
                <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                />
                <select
                name="selectedService"
                value={formData.selectedService}
                onChange={handleChange}
                required
                >
                <option value="">Select a Service</option>
                <option value="Auto Insurance">Auto Insurance</option>
                <option value="Home Insurance">Home Insurance</option>
                <option value="Health Insurance">Health Insurance</option>
                <option value="Life Insurance">Life Insurance</option>
                <option value="Business Insurance">Business Insurance</option>
                </select>
                <button type="submit">Submit</button>
                </form>
                </div>
            </div>
        </section>

    );
};

export default Services;