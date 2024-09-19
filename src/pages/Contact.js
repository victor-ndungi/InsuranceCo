import React, {useState} from "react";
import '../MyComponent_css/Contact.css';

const Contact = () =>{
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
       
    };

    const handleSubmit = (e) =>{
         e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Us</h2>
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
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;