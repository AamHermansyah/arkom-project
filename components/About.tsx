import { motion } from 'framer-motion';

function About() {
  return (
    <div className='p-20 flex justify-between items-center gap-20 bg-green-700'>
      <motion.div
        className="basis-[35%]"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeIn' }}
      >
        <img
          className="w-full aspect-[3/4]"
          src="/about/land3-1.png"
        />
      </motion.div>

      <div className="basis-[65%] rounded-[15px] text-white">
        <motion.h1
          className='text-white text-[90px] font-semibold leading-[100px] tracking-tight'
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeIn', delay: .3 }}
        >
          Curug Badak
        </motion.h1>
        <motion.div
          className="text-white text-xl font-normal leading-[30px] tracking-tight space-y-8 mt-10"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeIn', delay: .6 }}
        >
          <p>Curug Badak adalah salah satu objek wisata alam yang populer di Tasikmalaya, Jawa Barat. Curug ini terletak di Desa Sukasetia, Kecamatan Cisayong, sekitar 30 kilometer dari pusat kota Tasikmalaya. Curug Badak memiliki ketinggian sekitar 35 meter dengan dua aliran air terjun yang jatuh dari atas tebing.</p>
          <p>Air terjunnya mengalir dengan deras dan jernih, sehingga sangat menyegarkan. Di bawah curug terdapat kolam alami yang bisa digunakan untuk berenang atau berendam.</p>
          <p>Selain keindahan air terjunnya, Curug Badak juga dikelilingi oleh hutan pinus yang asri. Udara di sekitar curug sangat sejuk dan segar, sehingga sangat cocok untuk melepas penat dari hiruk pikuk kota.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About