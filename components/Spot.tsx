import Image from 'next/image'
import React from 'react'
import SpotCardSlider from './SpotCardSlider'

function Spot() {
  return (
    <section>
        <div className='relative w-full aspect-video'>
            <Image 
                src='/latar1.png'
                alt='latar1'
                fill={true}
            />

            <div className='w-full absolute p-12 mt-[100px]'>
                <h2 className="bold-40 lg:bold-64 xl:max-w-[60%] ml-[5%]" style={{color: '#0B7947'}}>Daftar Spot Wisata Curug Badak</h2>
                <p className='text-lg max-w-2xl mt-5 ml-[5%]' style={{color: 'white'}}>Curug Badak. Kami menghadirkan panduan lengkap untuk berbagai lokasi menarik di Curug Badak yang akan memenuhi hasrat petualangan dan pengalaman alam Anda.</p>
            </div>
        </div>
    </section>
  )
}

export default Spot