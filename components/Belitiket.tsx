import Image from "next/image";
import React from "react";

function BeliTiket() {
  return (
    <div>
      <section>
        <div className="relative w-full aspect-video">
          <Image src="/latar1.png" alt="latar1" fill={true} objectFit="cover" />

          <div className="w-full absolute p-12">
            <div className="text-white text-[90px] font-semibold leading-[100px] tracking-tight mt-[25px]">
              Wisata Alam
              <br />
              Curug Badak
            </div>

            <div className="text-white text-l font-normal leading-[25px] tracking-tight mt-[25px]">
              <p>
                Biaya tiket masuk ke Curug Badak yakni wisatawan cukup membayar{" "}
                <br />
                Rp 10.000 per orang. Sedangkan di hari weekend atau libur
                terdapat <br />
                selisih yang tidak begitu banyak yakni menjadi Rp 15.000 per
                orang. <br />
                Waktu berkunjung ke curug mulai 07.00 sampai 17.00 WIB.
              </p>
            </div>

            <form>
              <a
                href="/isiformtiket"
                type="submit"
                className="w-[460px] h-10 px-[142px] py-2.5 bg-green-700 rounded-[5px] justify-center items-center gap-2.5 inline-flex mt-[25px]"
              >
                <div className="text-white text-l font-semibold leading-tight tracking-tight">
                  BELI TIKET SEKARANG
                </div>
              </a>
            </form>
          </div>
          <div className="ml-[50%] mt-[5%] w-full absolute p-12">
            <img src="/gambartiket.png" alt="gambartiket"></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BeliTiket;
