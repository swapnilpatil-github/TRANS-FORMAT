import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-400">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg mb-4">
          Ambitious Computer Science Engineering student with a dual passion for Cyber Security and Development. I am dedicated to leveraging my skills and knowledge to develop secure and efficient software solutions.
        </p>
        <p className="text-lg mb-4">
          <strong>Areas of Expertise:</strong><br />
          - Computer Science Student<br />
          - Cyber Security<br />
          - Full Stack Development (React, Node.js, Express, MongoDB)<br />
          - Python<br />
          - C++<br />
          - React Native
        </p>
        <p className="text-lg mb-4">
          I am constantly exploring new technologies and methodologies to improve my skillset and contribute to innovative projects.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

