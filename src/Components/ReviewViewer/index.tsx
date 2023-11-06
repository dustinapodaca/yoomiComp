import { useState } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import image1 from '../../assets/img/image1.jpg';
import { metadata } from "../../mockData/metadata";

const reviews = [
  {
    id: 0,
    text: "Review #1",
    content:
      "I was honestly scared to get my brows done because my brows are so light, but oh my god I had the most amazing experience, and it was so painless and came out beautifully. She did exactly what I wanted and even better than what I was expecting! 💕",
    author: "Mashayla Spillman",
  },
  {
    id: 1,
    text: "Review #3",
    content:
    "Tatiana did such an amazing job! I am absolutely in awe of eyebrows! Definitely a self confidence booster! She did great and kept me comfortable and well informed from the very beginning! I definitely recommend her! Thank you again girly! ❤️",
    author: "Marissa Martinez-Spiess",
  },
  {
    id: 2,
    text: "Review #6",
    content:
      "Tatiana is amazing! She is thorough and meticulous from start to finish. Her genuine, friendly & kind personality puts you at ease. I highly recommend her to anyone considering microblading. I am very happy with my brows, one of the best decisions I’ve made!",
    author: "Yvette Davis",
  },
  {
    id: 3,
    text: "Review #2",
    content:
      "My experience with her was amazing! She was so sweet the whole time! She gave me so much info on them and I definitely trust her! I was nervous at first but after seeing the results, I could never trust anyone else with my eyebrows! 10/10 would recommend!!",
    author: "Sammie Lujan",
  },
  {
    id: 4,
    text: "Review #4",
    content:
      "Tatiana was excellent from the moment I walked through the door. She explained the process thoroughly to me and we chopped it up the whole lash appointment. Super fast but delicately efficient, time went by so fast. Would seriously would recommend her services!",
    author: "Nicc Barbo",
  },
  {
    id: 5,
    text: "Review #5",
    content:
      "Tatiana did an impressive job on my moms eyebrows!! I was impressed with her level of professionalism and kindness. She made sure my mom was comfortable during her microblading. My mom's eyebrows came out beautifully and healed just as expected! 😍",
    author: "Murissa Montez",
  },
];

const MySVGComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className="h-6 w-6 md:h-7 md:w-7"
    fill="currentColor"
    style={{
      filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.65))",
    }}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

type ReviewProps = {
  review: Review;
  isActive: boolean;
};

const Review = ({ review, isActive }: ReviewProps) => (
  <div className={`min-w-full ${isActive ? "active" : ""}`}>
    <blockquote className="flex h-full flex-col justify-between bg-white rounded-xl p-6">
      <div>
        <div className="flex gap-0.5 text-pink-400 mb-6">
          <motion.span
            key={review.id}
            initial={{ scale: 0.1, opacity: 0, x: -50 }}
            animate={{ scale: 1, opacity: 1, x: 1 }}
            exit={{ scale: 0.1, opacity: 0, x: 100 }}
            transition={{ duration: 0.40, ease: [0.32, 0.72, 0, 1] }}
          >
            <MySVGComponent />
          </motion.span>
          <motion.span
            key={review.id}
            initial={{ scale: 0.1, opacity: 0, x: -50 }}
            animate={{ scale: 1, opacity: 1, x: 1 }}
            exit={{ scale: 0.1, opacity: 0, x: 100 }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          >
            <MySVGComponent />
          </motion.span>
          <motion.span
            key={review.id}
            initial={{ scale: 0.1, opacity: 0, x: -50 }}
            animate={{ scale: 1, opacity: 1, x: 1 }}
            exit={{ scale: 0.1, opacity: 0, x: 100 }}
            transition={{ duration: 0.50, ease: [0.32, 0.72, 0, 1] }}
          >
            <MySVGComponent />
          </motion.span>
          <motion.span
            key={review.id}
            initial={{ scale: 0.1, opacity: 0, x: -50 }}
            animate={{ scale: 1, opacity: 1, x: 1 }}
            exit={{ scale: 0.1, opacity: 0, x: 100 }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          >
            <MySVGComponent />
          </motion.span>
          <motion.span
            key={review.id}
            initial={{ scale: 0.1, opacity: 0, x: -50 }}
            animate={{ scale: 1, opacity: 1, x: 1 }}
            exit={{ scale: 0.1, opacity: 0, x: 100 }}
            transition={{ duration: 0.60, ease: [0.32, 0.72, 0, 1] }}
          >
            <MySVGComponent />
          </motion.span>
        </div>

        <AnimatePresence>
          <motion.div
            key={review.id}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className="mt-4 font-sans text-lg md:text-xl leading-relaxed text-zinc-400">
              {review.content}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        <motion.footer
          key={review.id}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="mt-8 font-sans text-lg md:text-lg text-zinc-500"
        >
          &mdash; {review.author}
        </motion.footer>
      </AnimatePresence>
    </blockquote>
  </div>
);


type Review = {
  id: number;
  text: string;
  content: string;
  author: string;
};

type CarouselProps = {
  reviews: Review[];
};

const ReviewCarousel = ({ reviews }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-full bg-white">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center rounded-xl">
          <div className="relative rounded-xl">
            {/* {reviews.map((review, i) =>
              i === index ? (
                <Review
                  key={review.id}
                  review={review}
                  isActive={review.id === index}
                />
              ) : null
            )} */}
            <div className="p-4 md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Exercise Two</h2>
              <p className="text-sm mb-4">5 Reps x 3 Sets x 10s Hold</p>

              <div className="mb-4">
                <h3 className="font-semibold">Setup</h3>
                <p className="text-sm">
                  Begin lying on your back with your arms resting at your sides, your
                  legs bent at the knees and your feet flat on the ground.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold">Movement</h3>
                <p className="text-sm">
                  Tighten your abdominals and slowly lift your hips off the floor into
                  a bridge position, keeping your back straight.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold">Tip</h3>
                <p className="text-sm">
                  Make sure to keep your trunk stiff throughout the exercise and your
                  arms flat on the floor.
                </p>
              </div>
            </div>
            {/* Icons and timer */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex">
                <button className="p-2 rounded-full bg-gray-200 mr-2">
                  {/* <SettingsIcon className="fill-current text-gray-600 w-6 h-6" /> */}
                </button>
                <button className="p-2 rounded-full bg-gray-200">
                  {/* <LightbulbIcon className="fill-current text-gray-600 w-6 h-6" /> */}
                </button>
              </div>
            </div>
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
                  className="absolute right-28 -bottom-2 flex h-9 w-9 items-center justify-center rounded-full outline outline-1 hover:outline-none bg-white hover:text-white"
                  onClick={() => setIndex(index - 1)}
                >
                  <ChevronLeftIcon className="h-5 w-5 text-black hover:text-white" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < reviews.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{
                    opacity: 1,
                    backgroundColor: "#076787",
                  }}
                  className="absolute right-14 -bottom-2 flex h-9 w-9 items-center justify-center rounded-full outline outline-1 hover:outline-none bg-white hover:text-white"
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

const ReviewViewer = () => {
  return (
    <section className="bg-white mt-4 md:mt-3 shadow-xl rounded-xl">
      <div className="mx-auto max-w-[1167px] px-4 py-6 sm:px-6 sm:py-6 lg:me-0 lg:pe-0 lg:ps-8">
        <div className="items-center grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
          <div className="text-black text-center ltr:sm:text-left rtl:sm:text-right">
            <img src={image1} alt="exercise" className="rounded-lg"/>
          </div>

          <div className="lg:col-span-2 lg:mx-0 mt-4 sm:mt-0">
            <ReviewCarousel reviews={reviews} />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewViewer;
