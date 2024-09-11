import React from "react";
import { CUSINES } from "../constants";
import { motion } from "framer-motion";

const Expertise = () => {
    return (
        <section id="expertise">
            <motion.h2
                initial={{ opacity: 0, x: -400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className=" my-8 will-change-transform text-center text-3xl tracking-tighter lg:text-4xl "
            >
                Expertise
            </motion.h2>
            <div className="container mx-auto  px-4 ">
                {CUSINES.map((cuisine, index) => {
                    return (
                        <div
                            key={index}
                            className="flex  lg:mx-5 items-center border-b-4 border-dotted border-neutral-700/40 py-2"
                        >
                            <div className="flex-shrink-0 pr-8 text-2xl">
                                {cuisine.number}
                            </div>
                            <div className=" w-1/3 flex-shrink-0 ">
                                <img
                                    src={cuisine.image}
                                    alt={cuisine.title}
                                    className="h-auto rounded-3xl"
                                />
                            </div>
                            <div className="pl-8">
                                <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                                    {cuisine.title}
                                </h3>
                                <p className="mt-4 text-lg tracking-tighter">
                                    {cuisine.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Expertise;
