import React from "react";
import { DISHES } from "../constants/index.jsx";
import DishCard from "./DishCard";
import { motion } from "framer-motion";

const Dishes = () => {
    return (
        <section className="container mx-auto  py-16 " id="dishes">
            <motion.h2
                initial={{ opacit: 0, x: -400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="mb-8 will-change-transform text-center text-3xl tracking-tighter lg:text-4xl "
            >
                Our Dishes
            </motion.h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {DISHES.map((projectt, index) => {
                    return <DishCard key={index} project={projectt} />;
                })}
            </div>
        </section>
    );
};

export default Dishes;
