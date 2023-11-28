import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const spots = [
  {
    id: 1,
    imageUrl: './Tempat/Gazebo.png',
    title: 'Tenda Camp'
  },
  {
    id: 2,
    imageUrl: './Tempat/cafe.png',
    title: 'Saung'
  },
  {
    id: 3,
    imageUrl: './Tempat/sewatenda.png',
    title: 'Liwetan'
  },
  {
    id: 4,
    imageUrl: './Tempat/hanoman.png',
    title: 'Penginapan'
  },
  {
    id: 5,
    imageUrl: './Tempat/pinus.png',
    title: 'Flying Fox'
  },
  {
    id: 6,
    imageUrl: './Tempat/curug.png',
    title: 'Photo Camera'
  },
];

const SewaSlider = () => {
  const swiperRef = useRef(null);

  const slidePrev = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative mt-10">
      <button
        onClick={slidePrev}
        className="absolute top-[25%] -left-4 p-2.5 text-white z-10 active:scale-95"
      >
        <FaChevronLeft fontSize={40} />
      </button>
      <button
        onClick={slideNext}
        className="absolute top-[25%] -right-4 p-2.5 text-white z-10 active:scale-95"
      >
        <FaChevronRight fontSize={40} />
      </button>
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          900: {
            slidesPerView: 3,
          },
          678: {
            slidesPerView: 2,
          },
        }}
        pagination={{ clickable: true }}
        ref={swiperRef}
      >
        {spots.map((item) => (
          <SwiperSlide key={item.id} className="relative lg:px-10 pb-20">
            <div className="relative">
              <h1 className="absolute top-2 left-3 text-white text-2xl font-bold z-[1] tracking-wide">{item.title}</h1>
              <div className="relative bg-gray-200 aspect-video rounded-xl overflow-hidden border-2">
                <img
                  src={item.imageUrl}
                  alt="expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href="https://wa.me/6282320997062?text=Hallo bang ardhan, aku mau pesen pizza nih!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%]"
              >
                <button
                  className="flex items-center gap-2 px-10 py-4 font-bold rounded-xl bg-green-700 text-white whitespace-nowrap"
                >
                  <AiOutlineMessage fontSize={24} />
                  Mulai Pemesanan
                </button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SewaSlider