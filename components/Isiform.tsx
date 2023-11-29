import Link from "next/link";
import React from "react";

function IsiForm() {
  return (
    <div className="px-20 mb-10 text-white">
      <div className="w-full flex flex-col items-center justify-center bg-green-700 rounded-2xl p-10 pb-20 mt-28">
        <h1 className="text-[40px] font-semibold leading-[100px] tracking-tigh text-center">
          Beli Tiket
        </h1>

        <form className="w-full max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative z-0 w-full group">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Lengkap
              </label>
              <input
                type=""
                name="nama_lengkap"
                id="nama_lengkap"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4"
                placeholder=" "
                required
              />
            </div>
            <div className="relative z-0 w-full group">
              <label
                htmlFor="floating_company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Jadwal Pengunjungan
              </label>

              <input
                type="date"
                name="floating_company"
                id="floating_company"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4"
                placeholder=" "
                required
              />
            </div>
            <div className="relative z-0 w-full group">
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
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4"
                placeholder=" "
                required
              />
            </div>
            <div className="relative z-0 w-full group">
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
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4"
                placeholder=" "
                required
              />
            </div>
            <div className="mx-auto relative z-0 w-full group col-span-2">
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
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4"
                placeholder=" "
                required
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="w-[460px] h-10 px-[142px] py-2.5 bg-blue-400 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-xl font-semibold leading-tight tracking-tight">
                Next
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IsiForm;
