import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to convertIT</h1>
        <p className="text-gray-600 mt-4">Your one-stop solution for all file conversions</p>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Audio Conversion</h2>
          <p className="text-gray-600">Convert your audio files to MP3, WAV, OGG, and more with ease.</p>
          <Link 
            to="/audio" 
            className="mt-4 inline-block bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300"
          >
            Start Converting
          </Link>
        </div>
        <div className="p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Video Conversion</h2>
          <p className="text-gray-600">Easily convert your video files to MP4, AVI, MOV, and more.</p>
          <Link 
            to="/video" 
            className="mt-4 inline-block bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300"
          >
            Start Converting
          </Link>
        </div>
        <div className="p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Image Conversion</h2>
          <p className="text-gray-600">Convert your images to JPEG, PNG, WEBP, and more in seconds.</p>
          <Link 
            to="/image" 
            className="mt-4 inline-block bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300"
          >
            Start Converting
          </Link>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose convertIT?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At convertIT, we offer a user-friendly interface, fast and reliable conversions, and support for a wide range of file formats. Whether you need to convert audio, video, or image files, we've got you covered. Get started today and experience seamless file conversions!
        </p>
      </section>
    </div>
  );
}

export default Home;
