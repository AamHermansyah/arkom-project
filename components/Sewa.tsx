import Image from 'next/image'
import React from 'react'

function Sewa() {
    return (
        <section className='relative pt-14 pb-20'>
            <Image
                src="/Tiketback.png"
                alt="latar1"
                fill={true}
                objectFit="cover"
            />
            <div className="relative">
                <div className='bg-light'>
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[50%] mt-[5%] ml-[5%] text-white">Daftar Penyewaan Wisata Curug Badak</h2>
                    <p className='text-xl max-w-2xl mt-[15px] ml-[5%] text-white'>Curug Badak. Kami menghadirkan panduan lengkap untuk berbagai lokasi menarik di Curug Badak yang akan memenuhi hasrat petualangan dan pengalaman alam Anda.</p>
                </div>

                <div className='grid grid-cols-3 gap-10 mx-auto mt-[5%] px-20'>
                    <div className='relative w-full aspect-video'>
                        <Image
                            src='/tenda.png'
                            alt='tenda'
                            fill={true}
                        />
                    </div>
                    <div className='relative w-full aspect-video'>
                        <Image
                            src='/saung.png'
                            alt='saung'
                            fill={true}
                        />
                    </div>
                    <div className='relative w-full aspect-video'>
                        <Image
                            src='/liwet.png'
                            alt='liwet'
                            fill={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sewa