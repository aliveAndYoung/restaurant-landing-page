import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="container mx-auto py-16 " id="contact">
            <motion.h2
                initial={{ opacity: 0, x: -400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="mb-8 text-center text-3xl will-change-transform lg:text-4xl"
            >
                Contact Us
            </motion.h2>
            <div className="text-neutral-400">
                {CONTACT.map((detail, index) => {
                    return (
                        <p
                            key={detail.key}
                            className="my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tighter lg:text-3xl"
                        >
                            {detail.value}
                        </p>
                    );
                })}
            </div>
        </section>
    );
};

export default Contact;
