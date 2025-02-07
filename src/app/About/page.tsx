import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-24 px-6 sm:px-12 lg:px-24">
      {/* About Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate__fadeIn">
          About Me
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-gray-300">Who I am and what I do</p>
      </header>

      {/* My Story Section */}
      <section className="story-section mb-16 animate__fadeIn animate__delay-1s">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white">My Story</h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300">
          I am passionate about creating innovative solutions for the modern world. My journey began with
          a small idea, and over time, it has evolved into a mission to build cutting-edge technology that
          helps businesses and individuals grow and thrive in an ever-changing world.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="mission-section mb-16 animate__fadeIn animate__delay-1s">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white">Mission & Values</h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          My mission is to empower individuals and businesses with technology that drives growth and innovation. 
          I believe in putting people first and ensuring that my work addresses the real challenges faced by others.
        </p>
        <ul className="mt-6 space-y-4 text-lg sm:text-xl text-white">
          <li className="flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-80">
            <span>✔ Innovation: Constantly pushing the boundaries of what’s possible.</span>
          </li>
          <li className="flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-80">
            <span>✔ Integrity: I hold myself to the highest standards of honesty and transparency.</span>
          </li>
          <li className="flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-80">
            <span>✔ Collaboration: I value teamwork and believe that great things happen when people work together.</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
