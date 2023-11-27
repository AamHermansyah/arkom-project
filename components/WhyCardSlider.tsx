import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    expert: "Ahli Gizi & Nutrisi",
    imageUrl: 'https://source.unsplash.com/300x600?doctor'
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Praesent tincidunt consectetur turpis, eu aliquet nisi vestibulum sit amet. Nulla ac tellus tincidunt, lobortis lacus vitae, maximus mi.",
    expert: "Ahli Gigi",
    imageUrl: 'https://source.unsplash.com/300x600?man'
  },
  {
    id: 3,
    name: "Mike Johnson",
    comment: "Nulla ac tellus tincidunt, lobortis lacus vitae, maximus mi. Etiam ullamcorper arcu vel dolor posuere, a ornare nibh luctus.",
    expert: "Ahli Bedah",
    imageUrl: 'https://source.unsplash.com/300x600?people'
  },
  {
    id: 4,
    name: "Sarah Davis",
    comment: "Nulla ac tellus tincidunt, lobortis lacus vitae, maximus mi. Etiam ullamcorper arcu vel dolor posuere, a ornare nibh luctus.",
    expert: "Ahli Kulit",
    imageUrl: 'https://source.unsplash.com/300x600?expert'
  },
  {
    id: 5,
    name: "David Lee",
    comment: "Nunc nec erat eu nunc interdum faucibus sed et ipsum. Etiam ullamcorper arcu vel dolor posuere, a ornare nibh luctus.",
    expert: "Ahli Mata",
    imageUrl: 'https://source.unsplash.com/300x600?woman'
  },
  {
    id: 6,
    name: "Emily Brown",
    comment: "Nunc nec erat eu nunc interdum faucibus sed et ipsum. Etiam ullamcorper arcu vel dolor posuere, a ornare nibh luctus.",
    expert: "Ahli Jantung",
    imageUrl: 'https://source.unsplash.com/300x600?law'
  },
  {
    id: 7,
    name: "Daniel Wilson",
    comment: "Nulla ac tellus tincidunt, lobortis lacus vitae, maximus mi.",
    expert: "Ahli Psikologi",
    imageUrl: 'https://source.unsplash.com/300x600?student'
  },
  {
    id: 8,
    name: "Olivia Taylor",
    comment: "Curabitur lacinia nulla non efficitur malesuada.",
    expert: "Ahli Fisioterapi",
    imageUrl: 'https://source.unsplash.com/300x600?agent'
  },
  {
    id: 9,
    name: "Michael Anderson",
    comment: "Sed nec sem gravida, aliquam enim ac, lobortis urna.",
    expert: "Ahli Ginekologi",
    imageUrl: 'https://source.unsplash.com/300x600?hero'
  },
  {
    id: 10,
    name: "Sophia Thomas",
    comment: "Vivamus lacinia elit in eleifend tincidunt.",
    expert: "Ahli Anestesiologi",
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
        {testimonials.map((item) => (
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