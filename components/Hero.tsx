import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong, FaArrowUp } from "react-icons/fa6";

function Landingpage() {
  return (
    <div className="relative w-full min-h-screen">
      <Image src="/latar1.png" alt="latar1" fill={true} />

      <div className="w-full absolute p-12">
        <h2
          className="bold-40 lg:bold-64 xl:max-w-[100%] text-center"
          style={{
            color: "white",
            padding: "100px",
            textShadow: "5px 5px black",
          }}
        >
          "Curug Badak, surga tersembunyi di Tasikmalaya yang wajib kamu
          kunjungi"
        </h2>

        <div className="w-full flex justify-between mt-[5%] px-20">
          <a href="/sewa">
            <div className="relative w-[262px] h-[60px] px-[25px] py-[15px] bg-green-700 rounded-[15px] shadow-inner justify-center items-center gap-2.5 inline-flex">
              <FaArrowLeftLong fontSize={24} className="absolute left-4 top-[50%] -translate-y-[50%]" />
              <span className="text-white text-xl font-semibold leading-tight tracking-tight">
                Sewa Tempat
              </span>
            </div>
          </a>

          <a href="#why" className="inline-block -mt-10">
            <div className="relative w-[262px] h-[60px] px-[25px] py-[15px] bg-green-700 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
              <FaArrowUp fontSize={24} className="absolute left-4 top-[50%] -translate-y-[50%]" />
              <span className="text-white text-xl font-semibold leading-tight tracking-tight">
                Kenapa?
              </span>
              <FaArrowUp fontSize={24} className="absolute right-4 top-[50%] -translate-y-[50%] rotate-180" />
            </div>
          </a>

          <a href="/belitiket">
            <div className="relative w-[262px] h-[60px] px-[25px] py-[15px] bg-green-700 rounded-[15px] shadow-inner justify-center items-center gap-2.5 inline-flex">
              <FaArrowRightLong fontSize={24} className="absolute right-4 top-[50%] -translate-y-[50%]" />
              <span className="text-white text-xl font-semibold leading-tight tracking-tight">
                Beli Tiket
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
