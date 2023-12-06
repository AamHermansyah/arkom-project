import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong, FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

function Landingpage() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInTransition = {
    duration: 0.6,
    delay: 0.5, // Set the delay for the initial fade in
  };

  return (
    <motion.div
      className="relative w-full min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={fadeInTransition}
    >
      <Image src="/latar1.png" alt="latar1" fill={true} />

      <div className="w-full absolute p-12">
        <motion.h2
          className="bold-40 lg:bold-64 xl:max-w-[100%] text-center"
          style={{
            color: "white",
            padding: "100px",
            textShadow: "5px 5px black",
          }}
          variants={fadeInVariants}
          transition={fadeInTransition}
        >
          "Curug Badak, surga tersembunyi di Tasikmalaya yang wajib kamu
          kunjungi"
        </motion.h2>

        <motion.div
          className="w-full flex justify-between mt-[5%] px-20"
          variants={fadeInVariants}
          transition={fadeInTransition}
        >
          <a href="/sewa">
            <motion.div
              className="relative w-[262px] h-[60px] px-[25px] py-[15px] bg-green-700 rounded-[15px] shadow-inner justify-center items-center gap-2.5 inline-flex"
              variants={fadeInVariants}
              transition={fadeInTransition}
            >
              <FaArrowLeftLong
                fontSize={24}
                className="absolute left-4 top-[50%] -translate-y-[50%]"
              />
              <span className="text-white text-xl font-semibold leading-tight tracking-tight">
                Sewa Tempat
              </span>
            </motion.div>
          </a>

          <a href="#why" className="inline-block -mt-10">
            <motion.div
              className="relative w-[262px] h-[60px] px-[25px] py-[15px] bg-green-700 rounded-[15px] justify-center items-center gap-2.5 inline-flex"
              variants={fadeInVariants}
              transition={fadeInTransition}
            >
              <FaArrowUp
                fontSize={24}
                className="absolute left-4 top-[50%] -translate-y-[50%]"
              />
              <span className="text-white text-xl font-semibold leading-tight tracking-tight">
                Kenapa?
              </span>
              <FaArrowUp
                fontSize={24}
                className="absolute right-4 top-[50%] -translate-y-[50%] rotate-180"
              />
            </motion.div>
          </a>

          <a href="/belitiket">
            <motion.div
              className="relative w-[262px] h-[60px] px-[25px] py-[15px] bg-green-700 rounded-[15px] shadow-inner justify-center items-center gap-2.5 inline-flex"
              variants={fadeInVariants}
              transition={fadeInTransition}
            >
              <FaArrowRightLong
                fontSize={24}
                className="absolute right-4 top-[50%] -translate-y-[50%]"
              />
              <span className="text-white text-xl font-semibold leading-tight tracking-tight">
                Beli Tiket
              </span>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Landingpage;
