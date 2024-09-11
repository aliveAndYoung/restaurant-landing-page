import React from "react";
import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import { delay, motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8,
        },
    },
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 90,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: 0.6,
        },
    },
};

const Review = () => {
    return (
        <section className="container mx-auto  mb-8 mt-16" id="review">
            <motion.h2
                initial={{ opacity: 0, x: -400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="mt-2 will-change-transform text-center text-3xl tracking-tighter lg:text-4xl "
            >
                Reviews
            </motion.h2>
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={containerVariants}
                viewport={{ once: true }}
                className="flex flex-col"
            >
                <motion.p
                    variants={{ itemVariants }}
                    className="mb-10 text-3xl mx-3 font-light leading-tighter tracking-tight md:leading-snug lg:mx-40 lg:mt-20 lg:text-[3.5rem] "
                >
                    {REVIEW.content}
                </motion.p>
                <motion.div
                    variants={{ itemVariants }}
                    className="flex items-center justify-center gap-6"
                >
                    <img
                        src={xaviour}
                        width={80}
                        height={80}
                        alt={REVIEW.name}
                        className="rounded-full border"
                    />
                    <div className="tracking-tighter">
                        <h6>{REVIEW.name}</h6>
                        <p className="text-sm  text-neutral-500">
                            {REVIEW.profession}
                        </p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={{ itemVariants }}
                // viewport={{once:true}}
                className="mt-40 flex flex-col items-center justify-center gap-4 lg:flex-row"
            >
                {[customer1, customer2, customer3, customer4].map(
                    (customer, index) => {
                        return (
                            <motion.img
                                variants={itemVariants}
                                key={index}
                                src={customer}
                                alt="customerImg"
                                className="rounded-br-3xl rounded-tl-3xl object-cover h-[300px]  w-[200px]   "
                            />
                        );
                    }
                )}
            </motion.div>
        </section>
    );
};

export default Review;
