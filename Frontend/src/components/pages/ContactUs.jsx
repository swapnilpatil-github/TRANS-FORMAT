import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-400">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-lg mb-4 text-center">
          We would love to hear from you! Please reach out to us through the following channels:
        </p>
        <ul className="text-lg mb-4 list-disc list-inside">
          <li>Email: <a href="mailto:ehswapnilpatil@gmail.com" className="text-blue-500 hover:underline">ehswapnilpatil@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/swapnilpatil-github" className="text-blue-500 hover:underline">https://github.com/swapnilpatil-github</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/swapnil-patil-dev/" className="text-blue-500 hover:underline">https://www.linkedin.com/in/swapnil-patil-dev/</a></li>
        </ul>
        <p className="text-lg mb-4 text-center">
          Feel free to reach out for collaboration, questions, or just to say hi!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
