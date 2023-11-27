import Image from "next/image";
import React from "react";

function Landingpage() {
  return (
    <section>
      <div className="relative w-full aspect-video">
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

          <div className="flex justify-center gap-[150px] mt-[5%]">
            <a href="/sewa">
              <div className="w-[262px] h-[60px] px-[25px] py-[15px] bg-green-700 rounded-[15px] shadow-inner justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-semibold leading-tight tracking-tight">
                  Sewa Tempat
                </div>
              </div>
            </a>

            <a href="#landing2">
              <div className="w-[262px] h-[60px] px-[25px] py-[15px] bg-green-700 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-semibold leading-tight tracking-tight">
                  Kenapa?
                </div>
              </div>
            </a>

            <a href="/belitiket">
              <div className="w-[262px] h-[60px] px-[25px] py-[15px] bg-green-700 rounded-[15px] shadow-inner justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-semibold leading-tight tracking-tight">
                  Beli Tiket
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landingpage;
