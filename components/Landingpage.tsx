import Image from 'next/image'
import React from 'react'

function Landingpage() {
  return (
    <section>
        <div className='relative w-full aspect-video'>
            <Image 
                src='/latar1.png'
                alt='latar1'
                fill={true}
            />

            <div className='w-full absolute p-12'>
                <h2 className="bold-40 lg:bold-64 xl:max-w-[100%] text-center" style={{color: 'white', padding: '100px', textShadow: '5px 5px black'}}>Dunia ini nggak hanya seluas meja kerja. Kamu harus ambil cuti untuk liburan segera</h2>

                <div className='flex justify-center'>
                    <a href=''>
                        <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" style={{width: '350px', height: '50px'}}>
                            Curug Badak
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Landingpage