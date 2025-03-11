import React from "react";
import java from "../Images/java.png";
import python from "../Images/python.webp";
import mongoDB from "../Images/mongodb.jpg";
import express from "../Images/express.png";
import reactjs from "../Images/reactjs.png";
import nodejs from "../Images/nodejs.png";

function PortFolio() {
  const cardItem = [
    { id: 1, logo: mongoDB, name: "MongoDB" },
    { id: 2, logo: express, name: "Express" },
    { id: 3, logo: reactjs, name: "ReactJS" },
    { id: 4, logo: nodejs, name: "NodeJS" },
    { id: 5, logo: python, name: "Python" },
    { id: 6, logo: java, name: "Java" },
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-4xl font-bold text-center text-black mb-8">Portfolio</h1>
      <p className="text-lg text-center text-gray-700 font-medium mb-6">
        Here are some of the technologies I specialize in:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-5 justify-items-center">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="w-[260px] h-auto border border-gray-300 rounded-lg shadow-md p-5 flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-300 bg-white"
          >
            <img
              src={logo}
              className="w-[110px] h-[110px] p-2 rounded-full border-2 border-gray-400"
              alt={name}
            />
            <div className="text-center">
              <div className="font-bold text-xl text-gray-900 mt-3">{name}</div>
              <p className="text-gray-600 text-sm px-3 mt-2">
                A powerful tool for modern web development.
              </p>
            </div>
            <div className="flex space-x-3 mt-4">
              <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
                Video
              </button>
              <button className="bg-green-600 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
