'use client'

import Image from 'next/image'
import React from 'react'
import SewaSlider from './SewaSlider'

function Sewa() {
    return (
        <section className='relative'>
            <Image
                src="/Tiketback.png"
                alt="latar1"
                fill={true}
                objectFit="cover"
            />
            <div className="relative px-20 py-20 min-h-screen pt-40">
                <div className='bg-light'>
                    <h2 className="bold-40 lg:bold-64 text-white">
                        Daftar Penyewaan <br /> Wisata Curug Badak
                    </h2>
                    <p className='text-xl max-w-2xl mt-[15px] text-white'>
                        Curug Badak. Kami menghadirkan panduan lengkap untuk berbagai lokasi menarik di Curug Badak yang akan memenuhi hasrat petualangan dan pengalaman alam Anda.
                    </p>
                </div>

                <SewaSlider />
            </div>
        </section>
    )
}

export default Sewa