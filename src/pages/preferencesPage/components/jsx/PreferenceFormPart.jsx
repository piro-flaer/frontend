import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import PrefFormQuestion from "./PrefFormQuestion"
import "../css/PreferenceFormPart.css"

const PreferenceFormPart = ({ divIndexValue, directionValue, prefStateValue, prefSeasonValue, prefDifficultyValue }) => {

    const variants = {
        enter: (directionValue) => {
            return {
                zIndex: 0,
                x: directionValue > 0 ? 750 : -750,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (directionValue) => {
            return {
                zIndex: 0,
                x: directionValue < 0 ? 750 : -750,
                opacity: 0
            };
        }
    };


    return (
        <div className="preferenceFormHolder">
            <AnimatePresence initial={false} custom={directionValue}>
                <motion.div
                    key={divIndexValue}
                    custom={directionValue}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 }
                    }}
                    style={{
                        position: "absolute", width: "100%", height: "100%"
                    }}
                >
                    <PrefFormQuestion divIndex={divIndexValue} prefState={prefStateValue} prefSeason={prefSeasonValue} prefDifficulty={prefDifficultyValue} />
                </motion.div>
            </AnimatePresence >
        </div>
    )
}

export default PreferenceFormPart