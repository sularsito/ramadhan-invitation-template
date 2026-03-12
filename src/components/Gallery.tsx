// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

const pictures = [
    "family1.jpg",
    "family2.jpg",
    "family3.jpg",
    "family4.jpg",
    "family5.jpg",
    "family6.jpg"
];

const revealVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(5px)' },
    visible: {
        opacity: 1, scale: 1, filter: 'blur(0px)',
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

export default function Gallery() {
    return (
        <section className="story-section gallery" id="section-gallery">
            <motion.div
                className="content-box section-wide"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
                variants={revealVariants}
            >
                <motion.h2 className="gallery-title" variants={itemVariants}>Mari Menjalin Silaturahmi</motion.h2>
                <motion.div className="photo-grid" variants={revealVariants}>
                    {pictures.map((pic, i) => (
                        <motion.div key={i} className="photo-item" variants={itemVariants}>
                            <img src={`/pictures/${pic}`} alt={`Gallery ${i + 1}`} loading="lazy" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
