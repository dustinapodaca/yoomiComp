import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import image1 from '../../assets/img/image1.jpg';
import image2 from '../../assets/img/image2.jpg';
import image3 from '../../assets/img/image3.jpg';
import defaultImage from '../../assets/img/defaultImage.jpg';

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
  holdDurationMs?: number;
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
          <div className="pr-6 w-full mb-8 min-h-[324px]">
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
                
                {/* HERE THE HOLD DURATION IS OPTIONAL BUT ALSO NEEDS TO BE CONVERTED TO SECONDS  */}
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
                <div className="mb-4 ml-5 h-[60px] font-sans">
                  <h3 className="font-semibold">Setup</h3>
                  <motion.div
                    key={`${exercise.friendlyExerciseName}-setup`}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  >
                      {exercise.exerciseDetails.instructions.setup.map(
                        (step, index) => (
                          <p className="text-sm text-neutral-600" key={index}>
                            {step}
                          </p>
                        )
                      )}
                  </motion.div>
                </div>
            </div>

            {/* Animation for Movement Instructions */}
            <div className="flex flex-row">
              <img src={movementSVG} className="w-10 h-10" alt="movementIcon" />
                <div className="mb-4 ml-5 h-[60px] font-sans">
                  <h3 className="font-semibold">Movement</h3>
                  <motion.div
                    key={`${exercise.friendlyExerciseName}-movement`}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  >
                      {exercise.exerciseDetails.instructions.movement.map(
                        (step, index) => (
                          <p className="text-sm text-neutral-600" key={index}>
                            {step}
                          </p>
                        )
                      )}
                  </motion.div>
              </div>
            </div>

            {/* Animation for Tips Instructions */}
            <div className="flex flex-row">
              <img src={tipsSVG} className="w-10 h-10" alt="tipsIcon" />
                <div className="mb-4 ml-5 h-[80px] font-sans overflow-y-scroll">
                  <h3 className="font-semibold">Tips</h3>
                  <motion.div
                    key={`${exercise.friendlyExerciseName}-tips`}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  >
                      {exercise.exerciseDetails.instructions.tips.map(
                        (tip, index) => (
                          <p className="text-sm text-neutral-600" key={index}>
                            {tip}
                          </p>
                        )
                      )}
                  </motion.div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  </div>
);


// TYPE FOR ARRAY OF EXERCISE METADATA
type ExerciseMetadataArray = ExerciseMetadata[];

//PROPS FOR CAROUSEL
interface ExerciseCarouselProps {
  exercises: ExerciseMetadataArray;
}

  //DYNAMICALLY CHANGE IMAGE ALONG WITH THE EXERCISE SETUP:
const exerciseImages: Record<string, string> = {
  SIDELYING_HIP_ABDUCTION: image1,
  SHOULDER_HORIZONTAL_ABDUCTION_WITH_RESISTANCE_ON_SWISS_BALL: image2,
  STANDING_ITB_STRETCH: image3,
};
//FALLBACK IN CASE OF ISSUES WITH THE IMAGE
const fallbackImage = defaultImage;


const ExerciseCarousel = ({ exercises }: ExerciseCarouselProps) => {
  const [index, setIndex] = useState(0);

  // HERE WE ARE USING useMemo TO CACHE THE ACTIVE EXERCISE
  const activeExercise = useMemo(() => exercises[index], [exercises, index]);

  //GET THE CURRENT IMAGE FOR THE EXERCISE OR THE FALLBACK IMAGE HERE
  const currentImage =
    exerciseImages[activeExercise.exerciseBlueprint.exerciseId] ||
    fallbackImage;

  // CHANGED TO A FUNCTION TO GO TO THE NEXT EXERCISE INSTEAD OF INLINE FUNCTION THAT PREV WAS ONLY CHANGING THE INDEX BY 1
  // AND ALSO MEMOIZED THE FUNCTION AND ADDED useCallback TO PREVENT UNNECESSARY RE-RENDERS
  const goNext = useCallback(() => {
    setIndex((currentIndex) => (currentIndex + 1) % exercises.length);
  }, [exercises.length]);

  //DID THE SAME HERE FOR THE GO PREVIOUS FUNCTION AS WELL
  const goPrevious = useCallback(() => {
    setIndex(
      (currentIndex) => (currentIndex - 1 + exercises.length) % exercises.length
    );
  }, [exercises.length]);

  //USE EFFECT TO SET THE INTERVAL FOR THE EXERCISES TO CHANGE ON A 10 SECOND TIMER
  useEffect(() => {
    const timer = setInterval(goNext, 10000); // 10 SEC IN MILLISECONDS

    //THIS CLEARS THE INTERVAL WHEN THE COMPONENT UNMOUNTS
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <MotionConfig transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-full bg-white">
        <div className="mx-auto max-w-7xl flex-col justify-center rounded-xl">
          <div className="grid grid-cols-3 gap-4 relative">
            {/* IMAGE ANIMATION WAS PRESENTING ISSUES AND RAN OUT OF TIME SO SOME OF THIS IS A BIT JANKY*/}
            <div className="col-span-1 flex items-center justify-center min-w-[375px]">
              <img
                  key={currentImage}
                  src={currentImage}
                  alt="Current exercise"
                  className="rounded-lg object-contain max-h-full max-w-full transition-all ease-in-out duration-500"
                />
     
            </div>

            {/* EXERCISE INFO ANIMATION */}
            <div className="col-span-2">
              <AnimatePresence initial={false}>
                {activeExercise && (
                  <Exercise
                    key={activeExercise.exerciseBlueprint.exerciseId}
                    exercise={activeExercise}
                    isActive={true}
                  />
                )}
              </AnimatePresence>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{
                  opacity: 1,
                  backgroundColor: "#076787",
                }}
                className="absolute right-28 bottom-0 flex h-9 w-9 items-center justify-center rounded-full outline outline-1 hover:outline-none bg-white hover:text-white"
                onClick={goPrevious}
              >
                <ChevronLeftIcon className="h-5 w-5 text-black hover:text-white" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{
                  opacity: 1,
                  backgroundColor: "#076787",
                }}
                className="absolute right-14 bottom-0 flex h-9 w-9 items-center justify-center rounded-full outline outline-1 hover:outline-none bg-white hover:text-white"
                onClick={goNext}
              >
                <ChevronRightIcon className="h-5 w-5 text-black hover:text-white" />
              </motion.button>
            </div>
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
        <ExerciseCarousel exercises={metadata} />
      </div>
    </section>
  );
};

export default ExerciseViewer;
