function Contact({ isPage }: { isPage?: boolean; }) {
    return (
        <section className='text-center my-20' id='contactus'>
            <h1
                className="bold-40 lg:bold-64 mt-[5%]"
                style={{ color: isPage ? 'white' : '#0B7947' }}
            >
                Contact Us On
            </h1>

            <div className='mt-10'>
                <button
                    type="button"
                    className="relative w-full max-w-3xl pl-20 pr-10 py-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-full mb-2"
                >
                    <img
                        src='/logowa.png'
                        alt="logo wa"
                        style={{
                            width: '70px',
                            height: 'auto',
                            position: 'absolute',
                            left: '17%',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    />
                    <span className="text-7xl font-bold block">WhatsApp</span>
                </button>

                <h1
                    className="bold-40 lg:bold-64 mt-4"
                    style={{ color: isPage ? 'white' : '#0B7947' }}
                >
                    08xx xxxx xxxx
                </h1>
            </div>
        </section>
    )
}

export default Contact