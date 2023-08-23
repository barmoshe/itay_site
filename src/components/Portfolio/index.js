import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import MyVideoSlider from '../MyVideoSlider';


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });
    return (
        <>
            <div className="container portfolio-page">
                <div  className="Gallery"> 
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"My Work".split("")}
                        idx={15}
                    />
                </h1>
            <MyVideoSlider />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;