import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Destinasi Wisata Curug Badak</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Kepuasan alam yang tak akan pernah anda dapatkan sebelumnya. Kami dapat membantu anda untuk menemukan keindahan alam sekitar yang dapat anda rasakan setiap saat.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative md:left-[60%] z-20 flex w-full max-w-[268px] flex-col gap-4 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div>
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Lokasi</p>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </div>
              <p className="bold-20 text-white">Curug Badak</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Dari</p>
              <p className="bold-20 text-white">Universitas Siliwangi</p>
            </div>
          </div>
          <div className="border-dashed border-b-2 border-gray-500" />
          <div className="space-y-2">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Jarak</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Waktu Tempuh</p>
              <p className="bold-20 text-white">2 Jam 30 Menit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero