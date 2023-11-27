import React from "react";

function Pembayaran() {
  return (
    <div>
      <section>
        <div className="flex item-center justify-center text-white">
          <div className="w-[1180px] h-[580px] flex flex-col items-center justify-center bg-green-700 rounded-[20px] mt-[100px]">
            <h1 className="text-[40px] font-semibold leading-[100px] tracking-tigh text-cente">
              Pembayaran
            </h1>

            {/*form*/}
            <div>
              <form className="grid md:grid-cols-2 md:gap-6">
                <button
                  className="w-[70.33px] h-16 px-3 py-2.5 bg-white rounded-md shadow border-2
                  border-stone-300 flex-col justify-center items-start inline-flex"
                >
                  <img src="/Danalogo.png" alt="Logo dana"></img>
                </button>

                <button
                  className="w-[70.33px] h-16 px-3 py-2.5 bg-white rounded-md shadow border-2
                  border-stone-300 flex-col justify-center items-start inline-flex"
                >
                  <img src="/Ovologo.png" alt="Logo Ovo"></img>
                </button>
              </form>
            </div>

            {/*ieu teh anu form*/}
            <div>
              <form>
                <label
                  htmlFor=""
                  className="block mt-4 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <img
                    src="/Logobank.png"
                    alt="Logo Bank"
                    className="float-right mb-3"
                  />
                  Card Number
                </label>
                <input
                  type="text"
                  name="nama_lengkap"
                  id="nama_lengkap"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                  placeholder=" "
                  required
                />{" "}
              </form>
            </div>

            {/*form bagian 2*/}
            <div className="mt-2">
              <form className="grid grid-cols-2 gap-4">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Expired
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    CVC
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Country
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nomor Pos
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>
              </form>
              
              <a href="/finalbayar" className="flex justify-center">
                <button className="w-[460px] h-10 px-[142px] py-2.5 bg-blue-400 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                      <div className="text-white text-xl font-semibold leading-tight tracking-tight">
                        Next
                      </div>
                  </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pembayaran;
