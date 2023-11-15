import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div>
        <section className='text-center mt-[10%]'>
            <div>
                <h1 className="bold-40 lg:bold-64 mt-[5%]" style={{color: '#0B7947'}}>Contact Us On</h1>
            </div>

            <div className='mt-3'>
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 bold-40 rounded-full text-sm text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" style={{width: '35%', height: '55px', position: 'relative'}}>
                    <div>
                    <img
                        src='/logowa.png'
                        alt="logo wa"
                        style={{
                            width: '30px',
                            height: 'auto', 
                            position: 'absolute',
                            left: '20%', 
                            top: '50%', 
                            transform: 'translateY(-50%)'
                        }}
                    />
                    </div>
                    <span>WhatsApp</span>     
                </button>

                <div>
                <h1 className="bold-40 lg:bold-64" style={{color: '#0B7947'}}>08xx xxxx xxxx</h1>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About