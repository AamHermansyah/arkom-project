'use client'

import { User } from '@/index.types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineCloudUpload, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

function ProfilePage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [imageFile, setImageFile] = useState<FileList[0] | null>(null);
  const [editErrorMessage, setEditErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  const navigate = useRouter();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  const handleEditProfile = () => {
    if (!isEditMode) {
      setIsEditMode(true);
      nameRef.current!.focus();
      return;
    };

    if (!imageFile) {
      setEditErrorMessage('Poto profile wajib diisi');
      return;
    }

    setEditErrorMessage(null);
    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.onload = () => {
      const base64Image = reader.result as string;

      const data = {
        name: nameRef.current!.value,
        username: usernameRef.current!.value,
        email: emailRef.current!.value,
        address: addressRef.current!.value,
        password: passwordRef.current!.value,
        phone: phoneRef.current!.value,
        imageUrl: base64Image,
      }

      fetch(`/api/auth/user/${user?.id}`, {
        body: JSON.stringify(data),
        method: 'PUT'
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('user', JSON.stringify(res.data));
            window.location.reload();
            setIsEditMode(false);
            return;
          }

          if (res.status === 400) {
            setEditErrorMessage(res.message);
            return;
          }

          alert(`${res.status}: ${res.message}`);
        })
        .catch((error) => {
          alert(`${error.status}: ${error.message}`);
        })
        .finally(() => setLoading(false));
    }

    reader.onerror = (error) => {
      setEditErrorMessage('Error reading image');
      return
    };
  }

  useEffect(() => {
    const userStringify = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (!userStringify || !token) navigate.push('/');
    else setUser(JSON.parse(userStringify!));
  }, []);

  if (!user) return (
    <div className="p-10 min-h-screen flex items-center justify-center">
      <p className="text-xl animate-pulse">Loading...</p>
    </div>
  )

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
      {!isEditMode && (
        <div className="relative w-[250px] aspect-square rounded-full overflow-hidden bg-gray-200 mx-auto">
          <Image
            src={user?.imageUrl}
            alt={user?.name}
            fill={true}
            className="object-cover"
          />
        </div>
      )}
      {isEditMode && (
        <div className="relative max-w-[250px] aspect-square mx-auto flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full rounded-full">
          {!imageFile ? (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label className="w-full">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col justify-center items-center">
                  <p className="font-bold text-2xl">
                    <AiOutlineCloudUpload />
                  </p>
                  <p className="text-base">Click to upload profile image</p>
                </div>

                <p className="absolute bottom-4 inset-x-0 text-center w-full text-gray-400 text-xs">
                  Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB
                </p>
              </div>
              <input
                accept="image/*"
                type="file"
                className="w-0 h-0"
                name="image"
                onChange={(event) => {
                  if (event.target.files) {
                    setImageFile(event.target.files[0])
                  }
                }}
                required
              />
            </label>
          ) : (
            <>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={URL.createObjectURL(imageFile)}
                  alt="uploaded-pic"
                  fill={true}
                  className="object-cover"
                />
              </div>
              <button
                type="button"
                className="absolute bottom-3 right-3 p-3 rounded-full border bg-black text-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                onClick={() => setImageFile(null)}
              >
                <MdDelete />
              </button>
            </>
          )}
        </div>
      )}
      <div className="my-4">
        <form action="">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <label htmlFor="name" className="block w-max font-semibold">
                Nama Lengkap
              </label>
              <input
                ref={nameRef}
                type="text"
                name="name"
                id="name"
                placeholder="Masukan nama"
                defaultValue={user?.name}
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold read-only:bg-gray-200 read-only:border-gray-500 read-only:text-gray-600"
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label htmlFor="email" className="block w-max font-semibold">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                placeholder="Masukan email"
                defaultValue={user?.email}
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold read-only:bg-gray-200 read-only:border-gray-500 read-only:text-gray-600"
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label htmlFor="username" className="block w-max font-semibold">
                Username
              </label>
              <input
                ref={usernameRef}
                type="text"
                name="username"
                id="username"
                placeholder="Masukan username"
                defaultValue={user?.username}
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold read-only:bg-gray-200 read-only:border-gray-500 read-only:text-gray-600"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="password" className="block w-max font-semibold">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
                placeholder="Masukan password"
                defaultValue="********"
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold read-only:bg-gray-200 read-only:border-gray-500 read-only:text-gray-600"
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label htmlFor="address" className="block w-max font-semibold">
                Alamat
              </label>
              <input
                ref={addressRef}
                type="text"
                name="address"
                id="address"
                placeholder="Masukan alamat"
                defaultValue={user?.address}
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold read-only:bg-gray-200 read-only:border-gray-500 read-only:text-gray-600"
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block w-max font-semibold">
                No. Handphone
              </label>
              <input
                ref={phoneRef}
                type="text"
                name="phone"
                id="phone"
                placeholder="Masukan nomor handphone"
                defaultValue={user?.phone}
                className="w-full border-2 border-black rounded-md px-4 py-2 font-bold read-only:bg-gray-200 read-only:border-gray-500 read-only:text-gray-600"
                readOnly={!isEditMode}
              />
            </div>
          </div>
          <div className="mt-10 w-full flex items-center flex-col space-y-4">
            {editErrorMessage && (
              <p className="text-red-700 text-sm mb-2">
                {editErrorMessage}
              </p>
            )}
            <button
              type="button"
              disabled={loading}
              onClick={handleEditProfile}
              className="w-[460px] px-[142px] py-4 bg-green-700 rounded-[5px] justify-center items-center gap-2.5 flex disabled:cursor-not-allowed"
            >
              {loading ? (
                <AiOutlineLoading3Quarters
                  fontSize={24}
                  className="mx-auto animate-spin text-white"
                />
              ) : (
                <span className="block text-white text-lg font-semibold leading-tight tracking-tight">
                  {isEditMode ? 'Save Profile' : 'Edit Profile'}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={logout}
              className="w-[460px] px-[142px] py-4 bg-red-500 rounded-[5px] justify-center items-center gap-2.5 flex"
            >
              <span className="block text-white text-lg font-semibold leading-tight tracking-tight">
                Logout
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage;