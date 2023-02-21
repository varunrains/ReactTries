import React from 'react';
import HeroImage from '../assets/heroImage.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="lg:h-screen md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white xs:pt-20">
            Full Stack Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            As a seasoned full stack developer with over 11 years of experience,
            I am passionate about coding and designing performant and scalable
            solutions.
            <br />
            <span>
              With a diverse range of project experience and a strong
              proficiency in technologies such as Angular, .NET Framework, .NET
              Core, React, SQL, Azure and Git, I am well-equipped to tackle any
              development challenge.
            </span><br/>
            <span className="mt-5 ">
              I am a hands-on developer who values practical experience over
              theory. I am constantly experimenting and exploring new
              technologies in my spare time, as evidenced by my{" "}
              <a
                className="underline font-bold"
                href="https://github.com/varunrains/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>{" "}
              repository which showcases various proof-of-concept projects.
            </span>
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-cyan-500 to-blue-500 cursor-pointer group"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;