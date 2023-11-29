'use client'

import Image from 'next/image'
import { useState } from 'react'
import SpotSlider from './SpotSlider'

// File video simpan di folder public seperti image
const spots = [
  {
    id: 0,
    imageUrl: '/Tempat/Gazebo.png',
    videoUrl: '/ubah-url-video-disini.mp4',
    title: 'Curug Badak',
    description: 'Jangan lewatkan air terjun utama Curug Badak yang mengagumkan. Dengan ketinggian mencengangkan dan air jatuh yang memukau, ini adalah pusat perhatian di tempat ini. Jadilah saksi keajaiban alam ini dan biarkan diri Anda terpesona oleh pesona Curug Utama.'
  },
  {
    id: 1,
    imageUrl: '/Tempat/cafe.png',
    videoUrl: '/ubah-url-video-disini.mp4',
    title: 'Hutan Pinus',
    description: 'Hutan pinus di Curug Badak menjadi tempat yang ideal untuk bersantai dan menikmati keindahan alam. Wisatawan bisa berjalan-jalan di bawah rindangnya pepohonan pinus, atau bersantai di gazebo yang telah disediakan. Hutan ini juga menjadi tempat yang cocok untuk berkemah, karena udaranya yang sejuk dan suasananya yang tenang.'
  },
  {
    id: 2,
    imageUrl: '/Tempat/sewatenda.png',
    videoUrl: '/ubah-url-video-disini.mp4',
    title: 'Flying Fox',
    description: 'Flying Fox - Deskripsi'
  },
  {
    id: 3,
    imageUrl: '/Tempat/hanoman.png',
    videoUrl: '/ubah-url-video-disini.mp4',
    title: 'Camp',
    description: 'Camp - Deskripsi'
  },
  {
    id: 4,
    imageUrl: '/Tempat/pinus.png',
    videoUrl: '/ubah-url-video-disini.mp4',
    title: 'Cafe',
    description: 'Cafe - Deskripsi'
  },
  {
    id: 5,
    imageUrl: '/Tempat/curug.png',
    videoUrl: '/ubah-url-video-disini.mp4',
    title: 'Batu Hanoman',
    description: 'Batu Hanoman - Deskripsi'
  },
];

function Spot() {
  const [activeId, setActiveId] = useState(-1);

  return (
    <section>
      <div className='relative w-full min-h-[600px]'>
        {activeId === -1 ? (
          <Image
            src='/Tiketback.png'
            alt='latar1'
            fill={true}
            className="object-cover brightness-50"
          />
        ) : (
          <Image
            src={spots[activeId].imageUrl}
            alt={spots[activeId].title}
            fill={true}
            className="object-cover brightness-50"
          />
        )}

        <div className='w-full relative p-12 pt-32'>
          <div className="w-full flex justify-between gap-4 items-center">
            <div>
              {activeId === -1 ? (
                <>
                  <h2 className="bold-40 lg:bold-64 text-white  max-w-3xl">
                    Daftar Spot Wisata Curug Badak
                  </h2>
                  <p className='text-xl  max-w-3xl mt-5' style={{ color: 'white' }}>
                    Curug Badak. Kami menghadirkan panduan lengkap untuk berbagai lokasi menarik di Curug Badak yang akan memenuhi hasrat petualangan dan pengalaman alam Anda.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="bold-40 lg:bold-64 text-white max-w-3xl">
                    {spots[activeId].title}
                  </h2>
                  <p className='text-xl max-w-3xl mt-5' style={{ color: 'white' }}>
                    {spots[activeId].description}
                  </p>
                </>
              )}
            </div>
            {activeId > -1 && (
              <div className="w-full relative max-w-[350px] aspect-video bg-gray-100/50 rounded overflow-hidden mr-10">
                <video
                  className="absolute top-0 left-0 w-full h-full"
                  controls
                >
                  <source src={spots[activeId].videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          <SpotSlider
            data={spots}
            onChangeActiveId={setActiveId}
          />
        </div>
      </div>
    </section>
  )
}

export default Spot