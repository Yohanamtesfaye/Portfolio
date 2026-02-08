import React from 'react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Mentorship from "../components/sections/Mentorship";
import Contact from "../components/sections/Contact";

const Home = ({ darkMode, setDarkMode }) => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            {/* <Experience /> */}
            <Mentorship />
            <Contact />
        </>
    );
};

export default Home;
