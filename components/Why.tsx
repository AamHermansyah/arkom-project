import Image from 'next/image';
import React from 'react';
import WhyCardSlider from './WhyCardSlider';
import { motion } from 'framer-motion';

function Why() {
  return (
    <div>
      <section id='why'>
        <div className='relative w-full aspect-video'>
          <Image src='/latarland2.png' alt='latar landing 2' fill={true} />

          <div className='w-full absolute p-12 text-center'>
            <motion.h1
              className='bold-40 lg:bold-64 xl:max-w-[100%] mt-[5%]'
              style={{ color: 'white' }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeIn' }}
            >
              Kenapa Harus Curug Badak
            </motion.h1>

            <motion.p
              className='xl:max-w-[100%] text-xl mx-auto text-white mt-8'
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeIn' }}
            >
              Curug memang identik dengan lokasi tengah hutan dengan ketinggian yang begitu lumayan seperti air terjun curug badak ini. Deretan pohon pinus yang rindang dan sejuknya suasana air terjun membuat pengunjung serasa tersesat di hutan terpencil. Curug badak memiliki udara yang bersih dan dapat menghirup udara segar yang tidak tercemar asap rokok, baik polusi kendaraan maupun asap industri dan rokok. Apalagi jika wisatawan datang pada pagi hari, saat udara masih sangat segar, embun yang menggantung di pepohonan, dan pancaran air Curug Badak yang sangat dingin. Ini akan menambah kesan yang sangat alami.
            </motion.p>

            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeIn' }}
            >
              <WhyCardSlider />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Why;
