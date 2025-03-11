import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12">
      <h1 className="text-4xl font-bold text-center text-black mb-8">About Me</h1>

      <p className="text-gray-800 text-lg text-center">
        Hello, I'm <span className="text-green-700 font-semibold">Abhay</span>, a passionate Web Developer specializing in 
        <span className="text-green-700 font-semibold"> MERN Stack</span>. With a background in IT, I strive to create impactful and visually stunning 
        software solutions that leave a lasting impression.
      </p>

      {/* Education & Training */}
      <div className="mt-10">
        <h2 className="text-green-700 text-2xl font-semibold border-b border-gray-400 pb-2">Education & Training</h2>
        <ul className="text-gray-800 mt-4 space-y-2 list-disc list-inside">
          <li>Class 10th, MP Board, 2019</li>
          <li>Class 12th, MP Board 2021</li>
          <li>Intergrated MCA, RGPV University, 2026</li>
          <li>C/C++ Course, Universal Coaching, 2023</li>
          <li>Mern Stack Course, Vivek IT Solution, 2024</li>
        </ul>
      </div>
{/* Skills & Expertise */}
<div className="mt-10">
  <h2 className="text-green-700 text-2xl font-semibold border-b border-gray-400 pb-2">Skills & Expertise</h2>
  <ul className="text-gray-800 mt-4 space-y-2 list-disc list-inside">
    <li>Proficient in <strong>full-stack MERN development (MongoDB, Express.js, React.js, Node.js)</strong></li>
    <li>Experienced in building <strong>RESTful APIs</strong> and integrating them with front-end applications</li>
    <li>Skilled in <strong>front-end development</strong> using React.js, Redux, and modern JavaScript (ES6+)</li>
    <li>Strong knowledge of <strong>database design</strong> and management with MongoDB and Mongoose</li>
    <li>Proficient in <strong>back-end development</strong> using Node.js, Express.js, and middleware integration</li>
    <li>Experienced with <strong>state management</strong> tools like Redux and Context API</li>
    <li>Familiar with <strong>authentication and authorization</strong> (JWT, OAuth, bcrypt)</li>
    <li>Knowledgeable in <strong>version control systems</strong> (Git/GitHub) and deployment tools (Heroku, Vercel, Netlify)</li>
    <li>Strong understanding of <strong>Agile methodologies</strong> and collaborative development workflows</li>
    <li>Excellent problem-solving skills and ability to debug and optimize code</li>
    <li>Effective communicator and team player in cross-functional teams</li>
  </ul>
</div>

      {/* Professional Experience */}
      <div className="mt-10">
        <h2 className="text-green-700 text-2xl font-semibold border-b border-gray-400 pb-2">Professional Experience</h2>
        <ul className="text-gray-800 mt-4 space-y-2 list-disc list-inside">
          <li>Software Testing, Sharad Technologies, 2025 - Work on Testing The Real Time App</li>
        </ul>
      </div>

      {/* Achievements & Awards
      <div className="mt-10">
        <h2 className="text-green-700 text-2xl font-semibold border-b border-gray-400 pb-2">Achievements & Awards</h2>
        <ul className="text-gray-800 mt-4 space-y-2 list-disc list-inside">
          <li>[Award/Recognition], [Organization/Institution], [Year]</li>
          <li>[Achievement], [Organization/Platform], [Year]</li>
        </ul>
      </div> */}

      {/* Mission Statement */}
      <div className="mt-10">
        <h2 className="text-green-700 text-2xl font-semibold border-b border-gray-400 pb-2">Mission Statement</h2>
        <p className="text-gray-800 mt-4">
          My mission is to leverage my skills and creativity to deliver innovative 
          <span className="text-green-700 font-semibold"> Solution </span> that exceed client expectations and contribute positively 
          to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities 
          to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
