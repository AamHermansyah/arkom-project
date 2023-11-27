import Image from 'next/image'
import React from 'react'

function Sewa() {
  return (
    <section>
        <div className='bg-light mt-[100px]'>
            <h2 className="bold-40 lg:bold-64 xl:max-w-[50%] mt-[5%] ml-[5%]" style={{color: '#0B7947'}}>Daftar Penyewaan Wisata Curug Badak</h2>
            <p className='text-xl max-w-2xl mt-[15px] ml-[5%]' style={{color: '#0B7947'}}>Curug Badak. Kami menghadirkan panduan lengkap untuk berbagai lokasi menarik di Curug Badak yang akan memenuhi hasrat petualangan dan pengalaman alam Anda.</p>
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
    </section>
  )
}

export default Sewa