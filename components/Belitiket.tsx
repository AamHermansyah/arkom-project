import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

function BeliTiket() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 1 } },
  };

  const ticketVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } },
  };

  return (
    <motion.div
      className="relative w-full min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Image src="/Tiketback.png" alt="latar1" fill={true} objectFit="cover" />

      <div className="w-full absolute inset-0">
        <motion.div
          className="flex justify-between items-start gap-4 px-20 py-32"
          variants={textVariants}
        >
          <div>
            <div className="text-white text-[90px] font-semibold leading-[100px] tracking-tight mt-[25px]">
              Wisata Alam
              <br />
              Curug Badak
            </div>

            <div className="text-white text-l font-normal leading-[25px] tracking-tight mt-[25px]">
              <p className="max-w-2xl text-xl">
                Biaya tiket masuk ke Curug Badak yakni wisatawan cukup membayar Rp 10.000 per orang. Sedangkan di hari weekend atau libur terdapat selisih yang tidak begitu banyak yakni menjadi Rp 15.000 per orang.  Waktu berkunjung ke curug mulai 07.00 sampai 17.00 WIB.
              </p>
            </div>

            <Link
              href="/buy-ticket"
              type="submit"
              className="px-20 py-6 bg-green-700 rounded-xl justify-center items-center gap-2.5 inline-flex mt-[25px]"
            >
              <motion.span
                className="block text-white text-l font-semibold leading-tight tracking-tight"
                variants={buttonVariants}
              >
                BELI TIKET SEKARANG
              </motion.span>
            </Link>
          </div>
          <motion.div
            className="mt-10"
            variants={ticketVariants}
          >
            <motion.div
              className="relative"
              variants={imageVariants}
            >
              <img
                src="/gambartiket.png"
                alt="gambartiket"
              />
              <h4 className="text-4xl font-semibold absolute text-green-700 top-[50%] -translate-y-[50%] text-center -rotate-90">
                Tiket<br />Masuk
              </h4>
              <p className="text-[55px] absolute top-[50%] -translate-y-[50%] right-5 text-green-800 font-bold">
                10.000,00
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BeliTiket;
