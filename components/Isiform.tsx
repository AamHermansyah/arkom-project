import React from "react";

function Isiform() {
  return (
    <div>
      <section>
        <div className="flex item-center justify-center text-white">
          <div className="w-[1180px] h-[580px] flex flex-col items-center justify-center bg-green-700 rounded-[20px]">
            <h1 className="text-[40px] font-semibold leading-[100px] tracking-tigh text-cente">
              Beli Tiket
            </h1>

            <div className="flex items-center justify-center">
              <form>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <label
                      htmlFor="floating_phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      pattern="nama"
                      name="nama_lengkap"
                      id="nama_lengkap"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <label
                      htmlFor="floating_company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Jadwal Pengunjungan
                    </label>

                    <input
                      type="text"
                      name="floating_company"
                      id="floating_company"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <label
                      htmlFor="floating_company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Alamat
                    </label>

                    <input
                      type="text"
                      name="alamat"
                      id="alamat"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <label
                      htmlFor="floating_company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      No. Handphone
                    </label>

                    <input
                      type="number"
                      name="nohp"
                      id="nohp"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className="mx-auto relative z-0 w-full mb-6 group">
                    <label
                      htmlFor="floating_company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Jumlah Tiket
                    </label>

                    <input
                      type="number"
                      name="jmlhtiket"
                      id="jmlhtiket"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                      placeholder=" "
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-[460px] h-10 px-[142px] py-2.5 bg-blue-400 rounded-[5px] justify-center items-center gap-2.5 inline-flex"
                  >
                    <div className="text-white text-xl font-semibold leading-tight tracking-tight">
                      Submit
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Isiform;
