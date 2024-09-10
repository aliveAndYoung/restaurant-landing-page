import React from "react";
import { DISHES } from "../constants/index.jsx";
import DishCard from "./DishCard";

const Dishes = () => {
    return (
        <section className="container mx-auto  py-16 " id="dishes">
            <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl ">
                Our Dishes
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {DISHES.map((projectt, index) => {
                    return <DishCard key={index} project={projectt} />;
                })}
            </div>
        </section>
    );
};

export default Dishes;
