import React, { useEffect, useState } from 'react';
import {
  faGitAlt,
  faTiktok,
  faYoutube,
  faFacebook,
  faInstagram,
  
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  
  faVideoCamera

} from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
    }, 1500);

    return () => {
      clearTimeout(timeoutId); // Clean up the timeout on unmount
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          {/* <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1> */}
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faTiktok} color="#000000" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faInstagram} color="#E1306C" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faYoutube} color="#FF0000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faFacebook} color="#3B5998" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faXTwitter} color="#000000" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faVideoCamera} color="#660066" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
