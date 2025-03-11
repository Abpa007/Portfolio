import React from "react";
import html from "../Images/html.png";
import css from "../Images/css.jpg";
import javascript from "../Images/javascript.png";
import reactJs from "../Images/reactjs.png";
import expressJs from "../Images/express.png";
import nodejs from "../Images/nodejs.png"
import mongoDb from '../Images/mongodb.jpg';


function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: reactJs, name: "React js" },
    { id: 5, logo: expressJs, name: "Express js" },
    { id: 6, logo: mongoDb, name: "Mongo DB" },
    { id: 7, logo: nodejs, name: "Node Js" },
  ];

  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-3 text-black">Experience</h1>
        <p className="text-lg text-gray-700 mb-8">
          I have<span className="font-semibold text-blue-600"></span> experience working with these technologies.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="w-[180px] h-[220px] bg-white/10 border border-gray-600 backdrop-blur-lg rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <img src={logo} className="w-[90px] h-[90px] rounded-lg my-7 shadow-sm" alt={name} />
            <div className="text-center mt-4">
              <p className="text-lg font-semibold text-black">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
