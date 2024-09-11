import React from "react";
import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="container mx-auto mb-8" id="about">
            <motion.h2
                initial={{ opacity: 0, x: -400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="mb-8 text-center will-change-transform text-3xl tracking-tighter lg:text-4xl "
            >
                About Us
            </motion.h2>
            <div className="flex flex-wrap">
                <div className="w-full p-4 lg:w-1/2 ">
                    <img
                        src={about}
                        alt="chef"
                        className="rounded-3xl h-[85%] lg:-rotate-3"
                    />
                </div>
                <div className="w-full px-2 lg:w-1/2">
                    <h2 className="text-4xl tracking-tighter lg:text-6xl">
                        {ABOUT.header}
                    </h2>
                    <div className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3"></div>
                    <motion.p
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{once : true}}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
                    >
                        {ABOUT.content}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;
