import { useState } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import image1 from '../../assets/img/image1.jpg';
import { metadata } from "../../mockData/metadata";

import setupSVG from "../../assets/svg/setup.svg";
import movementSVG from "../../assets/svg/movement.svg";
import tipsSVG from "../../assets/svg/tips.svg";

// Base configuration for an exercise
interface BaseConfig {
  numSets: number;
  numReps: number;
  side: string;
  restDurationMs: number;
  setDurationMs: number;
  holdDurationMs?: number; // Optional since it's not present in all objects
}

// Instructions for an exercise
interface Instructions {
  setup: string[];
  movement: string[];
  tips: string[];
}

// Details of an exercise
interface ExerciseDetails {
  instructions: Instructions;
  deviceSetupPosition: string;
  exerciseEquipment: string[];
}

// Blueprint for an exercise
interface ExerciseBlueprint {
  baseConfig: BaseConfig;
  exerciseId: string;
}

// Combined metadata for an exercise
interface ExerciseMetadata {
  exerciseBlueprint: ExerciseBlueprint;
  exerciseDetails: ExerciseDetails;
  friendlyExerciseName: string;
}

// Props for the Exercise component
interface ExerciseProps {
  exercise: ExerciseMetadata;
  isActive: boolean;
}

const Exercise = ({ exercise, isActive }: ExerciseProps) => (
  <div className={`min-w-full ${isActive ? "active" : ""}`}>
    <div className="flex h-full flex-col justify-between bg-white rounded-xl p-4">
      <div>
        <AnimatePresence>
          <div className="pr-6 w-full mb-8">
            {/* Exercise Name Here is Dynamic */}
            <motion.div
              key={exercise.friendlyExerciseName}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <h2 className="text-2xl font-bold mb-2">
                {exercise.friendlyExerciseName}
              </h2>
            </motion.div>

            {/* Exercise Configuration Here is Dynamic */}
            <motion.div
              key={`${exercise.friendlyExerciseName}-config`}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <p className="text-sm mb-4 font-sans">
                {exercise.exerciseBlueprint.baseConfig.numReps} Reps x{" "}
                {exercise.exerciseBlueprint.baseConfig.numSets} Sets
                {exercise.exerciseBlueprint.baseConfig.holdDurationMs
                  ? ` x ${
                      exercise.exerciseBlueprint.baseConfig.holdDurationMs /
                      1000
                    }s Hold`
                  : ""}
              </p>
            </motion.div>

            {/* Animation for Setup Instructions */}
            <div className="flex flex-row">
              <img src={setupSVG} className="w-10 h-10" alt="setupIcon" />
              <motion.div
                key={`${exercise.friendlyExerciseName}-setup`}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="mb-4 ml-5 h-[60px] font-sans">
                  <h3 className="font-semibold">Setup</h3>
                  {exercise.exerciseDetails.instructions.setup.map(
                    (step, index) => (
                      <p className="text-sm text-neutral-600" key={index}>
                        {step}
                      </p>
                    )
                  )}
                </div>
              </motion.div>
            </div>

            {/* Animation for Movement Instructions */}
            <div className="flex flex-row">
              <img src={movementSVG} className="w-10 h-10" alt="movementIcon" />
              <motion.div
                key={`${exercise.friendlyExerciseName}-movement`}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="mb-4 ml-5 h-[60px] font-sans">
                  <h3 className="font-semibold">Movement</h3>
                  {exercise.exerciseDetails.instructions.movement.map(
                    (step, index) => (
                      <p className="text-sm text-neutral-600" key={index}>
                        {step}
                      </p>
                    )
                  )}
                </div>
              </motion.div>
            </div>

            {/* Animation for Tips Instructions */}
            <div className="flex flex-row">
              <img src={tipsSVG} className="w-10 h-10" alt="tipsIcon" />
              <motion.div
                key={`${exercise.friendlyExerciseName}-tips`}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="mb-4 ml-5 h-[80px] font-sans overflow-y-scroll">
                  <h3 className="font-semibold">Tips</h3>
                  {exercise.exerciseDetails.instructions.tips.map(
                    (tip, index) => (
                      <p className="text-sm text-neutral-600" key={index}>
                        {tip}
                      </p>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  </div>
);


// The type for the array of exercises, which could be imported from the other file
type ExerciseMetadataArray = ExerciseMetadata[];

// Props for the ExerciseCarousel component
interface ExerciseCarouselProps {
  exercises: ExerciseMetadataArray;
}

const ExerciseCarousel = ({ exercises }: ExerciseCarouselProps) => {
  const [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-full bg-white">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center rounded-xl">
          <div className="relative rounded-xl">
            <AnimatePresence initial={false}>
              {exercises.map((exercise, i) =>
                i === index ? (
                  <Exercise
                    key={exercise.exerciseBlueprint.exerciseId}
                    exercise={exercise}
                    isActive={i === index}
                  />
                ) : null
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{
                    opacity: 1,
                    backgroundColor: "#076787",
                  }}
                  className="absolute right-28 bottom-0 flex h-9 w-9 items-center justify-center rounded-full outline outline-1 hover:outline-none bg-white hover:text-white"
                  onClick={() => setIndex(index - 1)}
                >
                  <ChevronLeftIcon className="h-5 w-5 text-black hover:text-white" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < exercises.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{
                    opacity: 1,
                    backgroundColor: "#076787",
                  }}
                  className="absolute right-14 bottom-0 flex h-9 w-9 items-center justify-center rounded-full outline outline-1 hover:outline-none bg-white hover:text-white"
                  onClick={() => setIndex(index + 1)}
                >
                  <ChevronRightIcon className="h-5 w-5 text-black hover:text-white" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

const ExerciseViewer = () => {
  return (
    <section className="bg-white mt-4 md:mt-3 shadow-xl rounded-xl">
      <div className="mx-auto max-w-[1200px] max-h-[500px] px-4 py-6 sm:px-6 sm:py-6 lg:me-0 lg:pe-0 lg:ps-8">
        <div className="items-center grid gap-y-8 grid-cols-3 lg:items-center lg:gap-x-10">
          <div className="col-span-1 text-black text-center ltr:sm:text-left rtl:sm:text-right">
            <img src={image1} alt="exercise" className="rounded-lg" />
          </div>

          <div className="col-span-2 lg:mx-0 mt-4 sm:mt-0">
            <ExerciseCarousel exercises={metadata} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExerciseViewer;
