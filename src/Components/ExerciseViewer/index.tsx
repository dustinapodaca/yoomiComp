import { useState } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import image1 from '../../assets/img/image1.jpg';
import { metadata } from "../../mockData/metadata";

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
    <blockquote className="flex h-full flex-col justify-between bg-white rounded-xl p-6">
      <div>
        <AnimatePresence>
          <div className="pl-6 pr-10 w-full mb-8">
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
              <p className="text-sm mb-4">
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
            <motion.div
              key={`${exercise.friendlyExerciseName}-setup`}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
              >
                <rect
                  width="46"
                  height="46"
                  rx="23"
                  fill="#076787"
                  fill-opacity="0.08"
                />
                <path
                  d="M14.6257 12.5196C13.7637 12.7211 12.924 13.2137 12.1964 13.9525C11.1328 15.0272 10.6291 16.2027 10.6291 17.6021C10.6291 20.1321 12.465 22.3488 14.9279 22.7965C15.2974 22.8637 16.6296 22.9197 17.8946 22.9197C19.9993 22.9197 20.2343 22.8973 20.5702 22.6958C20.7717 22.5726 20.9844 22.3376 21.0404 22.1808C21.2307 21.6994 21.1747 17.311 20.9732 16.4266C20.559 14.5795 19.0701 13.0457 17.1893 12.5532C16.5512 12.3852 15.275 12.3628 14.6257 12.5196ZM17.3908 14.5683C18.0961 14.9153 18.723 15.5646 19.0701 16.3035C19.2828 16.7737 19.3052 17.0088 19.3052 18.9455V21.0725H17.1781C15.0847 21.0613 15.0399 21.0613 14.413 20.7591C13.6853 20.4008 13.0584 19.7627 12.7225 19.0127C12.3755 18.2738 12.3867 17.02 12.7337 16.2587C13.551 14.4675 15.6444 13.7174 17.3908 14.5683Z"
                  fill="#076787"
                />
                <path
                  d="M26.7838 12.5644C25.8994 12.8106 25.3172 13.1353 24.5896 13.8406C23.8171 14.5683 23.4477 15.1616 23.1566 16.102C22.9775 16.6841 22.9439 17.1543 22.9439 19.3933C22.9439 21.1173 22.9887 22.1137 23.0671 22.2928C23.3245 22.8413 23.7164 22.9197 26.224 22.9197C27.4779 22.9197 28.7765 22.8637 29.1123 22.8077C31.8327 22.2928 33.7358 19.662 33.3552 16.9416C32.9074 13.807 29.8176 11.7471 26.7838 12.5644ZM29.7057 14.5683C30.4333 14.9265 30.9371 15.4639 31.3177 16.2923C31.5528 16.8184 31.5864 17.0088 31.5416 17.8148C31.4633 19.2254 30.8252 20.1881 29.5601 20.7815C28.9668 21.0501 28.8213 21.0725 26.8398 21.1061L24.7351 21.1509V19.147C24.7351 16.908 24.8359 16.393 25.3844 15.6318C26.392 14.266 28.1831 13.8182 29.7057 14.5683Z"
                  fill="#076787"
                />
                <path
                  d="M26.9974 23.7259C26.9302 23.7931 26.863 24.0618 26.863 24.3081C26.863 24.9126 26.7959 24.991 26.0458 25.3156C25.3517 25.6291 25.195 25.6067 24.6464 25.1365C24.4449 24.9686 24.221 24.823 24.1538 24.823C23.9971 24.823 23.0567 25.7634 23.0567 25.9201C23.0567 25.9873 23.2023 26.2112 23.3814 26.4127C23.818 26.9277 23.8404 27.0396 23.6053 27.6666C23.3142 28.439 23.1127 28.6293 22.553 28.6293C21.9149 28.6293 21.8029 28.7972 21.8477 29.6593L21.8813 30.3645L22.4858 30.4429C23.1799 30.5213 23.2694 30.5996 23.6053 31.3945C23.818 31.9318 23.8292 32.0214 23.6837 32.3013C23.5941 32.4692 23.4262 32.7043 23.2918 32.8162C23.1575 32.9394 23.0567 33.0849 23.0567 33.1521C23.0567 33.3648 23.9971 34.2268 24.221 34.2268C24.333 34.2268 24.6016 34.0701 24.8143 33.8798C25.2621 33.4991 25.4077 33.4991 26.2921 33.9245C26.7847 34.1596 26.807 34.1932 26.863 34.7306C26.9526 35.5254 26.9974 35.5702 27.8146 35.5702C28.6318 35.5702 28.6766 35.5254 28.7662 34.7306C28.8221 34.182 28.8333 34.1708 29.4379 33.8686C30.2215 33.4767 30.3559 33.4767 30.8148 33.8909C31.0275 34.0701 31.3074 34.2268 31.4306 34.2268C31.6097 34.2268 32.5725 33.3424 32.5725 33.1745C32.5725 33.1521 32.3933 32.917 32.1806 32.6595C31.9679 32.402 31.7888 32.1221 31.7888 32.0326C31.7888 31.7863 32.315 30.678 32.4717 30.5772C32.5613 30.5213 32.8859 30.4541 33.1882 30.4205L33.7479 30.3645L33.7815 29.6481C33.8039 29.245 33.7591 28.8756 33.6919 28.8084C33.6248 28.7413 33.3113 28.6629 32.9867 28.6293C32.4045 28.5733 32.4045 28.5733 32.1023 27.9576C31.7104 27.174 31.7104 27.0396 32.1247 26.5806C32.315 26.3679 32.4605 26.0881 32.4605 25.9649C32.4605 25.853 32.2366 25.5395 31.9567 25.282C31.4306 24.7894 31.2514 24.7783 30.8932 25.2149C30.5909 25.5731 30.2551 25.6179 29.6282 25.3716C28.8557 25.0693 28.755 24.9574 28.6766 24.2521L28.5982 23.6476L27.8706 23.614C27.4004 23.5916 27.0869 23.6364 26.9974 23.7259ZM29.1244 27.6777C30.535 28.6853 30.4006 30.8123 28.8669 31.6184C27.4452 32.3796 25.6764 31.4169 25.542 29.816C25.4189 28.2823 26.4152 27.2299 27.9489 27.3195C28.5087 27.3419 28.7438 27.4203 29.1244 27.6777Z"
                  fill="#076787"
                />
                <path
                  d="M14.3015 24.9238C12.5439 25.4948 11.1558 26.9725 10.7527 28.7413C9.77878 32.973 14.1672 36.5106 18.1078 34.6746C19.5296 34.0141 20.7498 32.4356 21.0409 30.8795C21.1976 30.0399 21.1864 25.6627 21.0297 25.3492C20.7162 24.7335 20.6491 24.7111 17.6824 24.7223C15.3427 24.7223 14.8501 24.7559 14.3015 24.9238ZM19.3393 28.5958C19.3057 30.5885 19.2945 30.734 19.0146 31.3161C18.4101 32.5924 17.4585 33.2305 16.048 33.3089C15.2419 33.3536 15.0516 33.32 14.5142 33.0738C12.0737 31.9543 11.7155 28.7413 13.8537 27.1628C14.6486 26.5807 14.9732 26.5135 17.2682 26.5135L19.3841 26.5023L19.3393 28.5958Z"
                  fill="#076787"
                />
              </svg>
              <div className="mb-4">
                <h3 className="font-semibold">Setup</h3>
                {exercise.exerciseDetails.instructions.setup.map(
                  (step, index) => (
                    <p className="text-sm" key={index}>
                      {step}
                    </p>
                  )
                )}
              </div>
            </motion.div>

            {/* Animation for Movement Instructions */}
            <motion.div
              key={`${exercise.friendlyExerciseName}-movement`}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="mb-4">
                <h3 className="font-semibold">Movement</h3>
                {exercise.exerciseDetails.instructions.movement.map(
                  (step, index) => (
                    <p className="text-sm" key={index}>
                      {step}
                    </p>
                  )
                )}
              </div>
            </motion.div>

            {/* Animation for Tips Instructions */}
            <motion.div
              key={`${exercise.friendlyExerciseName}-tips`}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="mb-4">
                <h3 className="font-semibold">Tips</h3>
                {exercise.exerciseDetails.instructions.tips.map(
                  (tip, index) => (
                    <p className="text-sm" key={index}>
                      {tip}
                    </p>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </blockquote>
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
      <div className="mx-auto max-w-[1167px] px-4 py-6 sm:px-6 sm:py-6 lg:me-0 lg:pe-0 lg:ps-8">
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
