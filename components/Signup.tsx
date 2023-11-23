import React from "react";

function Signup() {
  return (
    <section>
      <div className="flex item-center justify-center text-white">
        <div className="w-[1180px] h-[580px] bg-green-700 rounded-[20px]">
          <div className="text-white text-[40px] font-semibold leading-[100px] tracking-tigh text-center">
            <h1>Sign Up</h1>
          </div>

          <form className="p-10 mt-[-30px]">
            <div className="grid grid-cols-3 gap-10">
              <div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Lengkap
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
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username Anda"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="alamat"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Alamat Pengguna
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Alamat Anda"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                    required
                  />
                </div>
              </div>

              {/*bagian tengah*/}
              <div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                    placeholder="email Anda"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Ulangi Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                    placeholder="********"
                    required
                  />
                </div>
              </div>

              {/* Bagian 3*/}
              <div>
                <div className="mb-6">
                  <label
                    htmlFor="nohp"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    No. Handphone anda
                  </label>
                  <input
                    type="number"
                    id="nohp"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="verifhp"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Verifikasi SMS
                  </label>
                  <input
                    type="number"
                    id="verifno"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full max-w-2xl mx-auto px-10 py-2.5 bg-blue-400 rounded-[5px] justify-center items-center mt-[55px]"
            >
              <div className="text-white text-xl font-semibold leading-tight tracking-tight">
                Sign Up
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
