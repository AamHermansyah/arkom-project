import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

type propTypes = {
  onChangeActiveId: (id: number) => void;
  data: {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
  }[]
}

const SpotCardSlider = ({ onChangeActiveId, data }: propTypes) => {
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
        {data.map((item) => (
          <SwiperSlide key={item.id} className="relative lg:px-10 pb-20">
            <div className="relative">
              <div className="relative bg-gray-200 aspect-video rounded-xl overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt="expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => onChangeActiveId(item.id)}
                className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] px-10 py-1.5 font-bold rounded-full bg-green-700 text-white"
              >
                Detail
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SpotCardSlider