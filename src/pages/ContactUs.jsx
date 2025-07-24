import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const buttonRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    buttonRef.current.value = 'Sending...';

    emailjs.sendForm('default_service', 'template_y3761nm', form.current, 'lSko3cw00lIyC8ACs')
      .then(() => {
        buttonRef.current.value = 'Send Email';
        alert('Sent!');
        form.current.reset();
      }, (err) => {
        buttonRef.current.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Send Your Request</h2>
      <form ref={form} onSubmit={handleSubmit} id="form" className="space-y-5">
        <div className="flex flex-col">
          <label htmlFor="from_name" className="mb-1 font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email_id" className="mb-1 font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            name="email_id"
            id="email_id"
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium text-gray-700">Your Message</label>
          <input
            type="text"
            name="message"
            id="message"
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <input
          type="submit"
          id="button"
          ref={buttonRef}
          value="Send Email"
          className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default ContactUs;