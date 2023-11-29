import Link from 'next/link';
import React from 'react'

function ProfilePage() {
  return (
    <div className="p-20 mt-10 max-w-5xl mx-auto">
      <div className="w-full flex justify-end mb-4">
        <Link href="/buy-ticket">
          <button
            type="submit"
            className="px-10 py-4 bg-green-700 rounded-[5px] justify-center items-center gap-2.5 flex"
          >
            <span className="block text-white text-lg font-semibold leading-tight tracking-tight">
              Lanjut Beli Tiket?
            </span>
          </button>
        </Link>
      </div>
      <div className="w-[200px] aspect-square rounded-full overflow-hidden bg-red-500 mx-auto"></div>
      <div className="my-4">
        <form action="">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <label htmlFor="name" className="block w-max font-semibold">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Masukan nama"
                value="Salman Miqdad"
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="email" className="block w-max font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukan email"
                value="salmanmiqdad@gmail.com"
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="username" className="block w-max font-semibold">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Masukan username"
                value="SalmanMiqdad"
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="password" className="block w-max font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Masukan password"
                value="Salman Miqdad"
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="address" className="block w-max font-semibold">
                Alamat
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Masukan alamat"
                value="Padayungan, Tasikmalaya"
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="nohp" className="block w-max font-semibold">
                No. Handphone
              </label>
              <input
                type="text"
                name="nohp"
                id="nohp"
                placeholder="Masukan nomor handphone"
                value="08231261434"
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold"
                readOnly
              />
            </div>
          </div>
          <div className="mt-10 w-full flex items-center flex-col space-y-4">
            <button
              type="submit"
              className="w-[460px] px-[142px] py-4 bg-green-700 rounded-[5px] justify-center items-center gap-2.5 flex"
            >
              <div className="text-white text-lg font-semibold leading-tight tracking-tight">
                Edit Profile
              </div>
            </button>
            <button
              type="submit"
              className="w-[460px] px-[142px] py-4 bg-red-500 rounded-[5px] justify-center items-center gap-2.5 flex"
            >
              <div className="text-white text-lg font-semibold leading-tight tracking-tight">
                Logout
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage;