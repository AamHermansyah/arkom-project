import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const spots = [
  {
    id: 1,
    imageUrl: 'https://source.unsplash.com/300x600?doctor'
  },
  {
    id: 2,
    imageUrl: 'https://source.unsplash.com/300x600?man'
  },
  {
    id: 3,
    imageUrl: 'https://source.unsplash.com/300x600?people'
  },
  {
    id: 4,
    imageUrl: 'https://source.unsplash.com/300x600?expert'
  },
  {
    id: 5,
    imageUrl: 'https://source.unsplash.com/300x600?woman'
  },
  {
    id: 6,
    imageUrl: 'https://source.unsplash.com/300x600?law'
  },
  {
    id: 7,
    imageUrl: 'https://source.unsplash.com/300x600?student'
  },
  {
    id: 8,
    imageUrl: 'https://source.unsplash.com/300x600?agent'
  },
  {
    id: 9,
    imageUrl: 'https://source.unsplash.com/300x600?hero'
  },
  {
    id: 10,
    imageUrl: 'https://source.unsplash.com/300x600?girl'
  },
];

const WhyCardSlider = () => {
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
            <div key={item.id} className="overflow-hidden bg-gray-200 rounded-xl border-2">
              <div className="relative bg-gray-200 aspect-video">
                <img
                  src={item.imageUrl}
                  alt="expert"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default WhyCardSlider