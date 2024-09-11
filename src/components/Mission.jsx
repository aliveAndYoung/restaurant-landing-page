import React from "react";
import missionImg from "../assets/mission.jpeg";
import mission from "../assets/mission.mp4";
import { MISSION } from "../constants";
import { motion } from "framer-motion";

const Mission = () => {
    return (
        <section id="mission">
            <div className="container w-[95%] mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, x: -400 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="mb-8 will-change-transform text-3xl lg:text-4xl"
                >
                    Our Mission
                </motion.h2>
                <div className="relative flex items-center justify-center">
                    <video
                        className="w-full rounded-3xl"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={missionImg}
                    >
                        <source src={mission} type="video/mp4" />
                    </video>
                    <div className=" absolute h-full w-full rounded-3xl bg-black/40  "></div>
                    <p className="absolute max-w-lg tracking-tighter lg:text-3xl">
                        {MISSION}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Mission;
