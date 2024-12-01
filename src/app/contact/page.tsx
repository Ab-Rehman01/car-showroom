import React from 'react';

const Contact = () => {
  return (
    <div>
      <section
        className="contact-bg" style={{ backgroundImage: "url(contact.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        
        <form className="contact-form">
        <h2 className="fade-in">Get in Touch with KeM Autos</h2><br />
    <fieldset className='fade-in'>
      <input type="text" placeholder="Full Name" required />
   <input type="email" placeholder="Email Address" required />
   <input type="text" placeholder="Contact Number" required />
    <textarea placeholder="Your Message" required></textarea>
   <button>SUBMIT</button>
    </fieldset>
  </form>
      </section>
    </div>
  );
};

export default Contact;