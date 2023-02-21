import React from 'react';
import html from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import github from '../assets/experience/github.png'
import javascript from '../assets/experience/javascript.png'
import reactImage from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'
import azure from '../assets/experience/azure.png';
import core from '../assets/experience/core.png'
import bootstrap from '../assets/experience/bootstrap.jpg'
import csharp from '../assets/experience/csharp.png'
import docker from '../assets/experience/docker.png';
import sql from '../assets/experience/sql.png';
import angular from '../assets/experience/angular.png';

const Technologies = () => {
    const techs = [
      {
        id: 10,
        src: core,
        title: ".Net Core",
        style: "shadow-violet-700",
      },
      {
        id: 20,
        src: csharp,
        title: "C#",
        style: "shadow-violet-800",
      },
      {
        id: 30,
        src: azure,
        title: "Microsoft Azure",
        style: "shadow-sky-600",
      },
      {
        id: 40,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 50,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 60,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        id: 70,
        src: reactImage,
        title: "React",
        style: "shadow-cyan-600",
      },
      {
        id: 80,
        src: angular,
        title: "Angular",
        style: "shadow-rose-500",
      },
      {
        id: 90,
        src: docker,
        title: "Docker",
        style: "shadow-cyan-400",
      },

      {
        id: 100,
        src: sql,
        title: "SQL",
        style: "shadow-sky-600",
      },

      {
        id: 110,
        src: tailwind,
        title: "TailWind",
        style: "shadow-sky-400",
      },
      {
        id: 120,
        src: bootstrap,
        title: "Bootstrap",
        style: "shadow-violet-700",
      },
      {
        id: 130,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
      },
    ];
  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tech stack
          </p>
          <div className="py-6">These are the technologies I've worked with</div>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;