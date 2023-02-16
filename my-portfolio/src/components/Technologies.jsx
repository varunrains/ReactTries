import React from 'react';
import html from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import github from '../assets/experience/github.png'
import graphql from '../assets/experience/graphql.png'
import javascript from '../assets/experience/javascript.png'
import nextjs from '../assets/experience/nextjs.png'
import reactImage from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'
import azure from '../assets/experience/azure.png';
import core from '../assets/experience/core.png'
import bootstrap from '../assets/experience/bootstrap.jpg'
import csharp from '../assets/experience/csharp.jpg'

const Technologies = () => {
    const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-cyan-600'
        },
        {
            id:5,
            src:tailwind,
            title:'TailWind',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:nextjs,
            title:'Next JS',
            style:'shadow-white'
        },
        {
            id:7,
            src:graphql,
            title:'GraphQL',
            style:'shadow-pink-400'
        },
        {
            id:8,
            src:github,
            title:'GitHub',
            style:'shadow-gray-400'
        },
        
        {
            id:9,
            src:core,
            title:'.Net Core',
            style:'shadow-gray-400'
        }
        ,
        {
            id:10,
            src:csharp,
            title:'C#',
            style:'shadow-gray-400'
        }
        ,
        {
            id:11,
            src:azure,
            title:'Microsoft Azure',
            style:'shadow-gray-400'
        }
        ,
        {
            id:12,
            src:bootstrap,
            title:'Bootstrap',
            style:'shadow-gray-400'
        }
    ];
  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tech stack
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
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