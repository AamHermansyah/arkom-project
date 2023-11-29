'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from 'react';
import { AiOutlineCloudUpload, AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function Signup() {
  const [signupErrorMessage, setSignupErrorMessage] = useState<null | string>(null);
  const [imageFile, setImageFile] = useState<FileList[0] | null>(null);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  const navigate = useRouter();

  useEffect(() => {
    const userStringify = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (userStringify && token) navigate.push('/profile');
  }, []);

  const onSubmit = () => {
    if (!imageFile) {
      setSignupErrorMessage('Poto profile wajib diisi');
      return;
    }

    setSignupErrorMessage(null);
    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.onload = () => {
      const base64Image = reader.result as string;
      const confirmPassowrd = confirmPasswordRef.current!.value;

      const data = {
        name: nameRef.current!.value,
        username: usernameRef.current!.value,
        email: emailRef.current!.value,
        address: addressRef.current!.value,
        password: passwordRef.current!.value,
        phone: phoneRef.current!.value,
        imageUrl: base64Image,
      }

      if (data.password !== confirmPassowrd) {
        setSignupErrorMessage('Konfirmasi password tidak sama dengan input password.');
        return;
      }

      fetch('/api/auth/signup', {
        body: JSON.stringify(data),
        method: 'POST'
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            navigate.push('/login');
            return;
          }

          if (res.status === 400) {
            setSignupErrorMessage(res.message);
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
      setSignupErrorMessage('Error reading image');
      return
    };
  }

  return (
    <div className="px-20 mb-10 text-white">
      <div className="w-full flex flex-col items-center justify-center bg-green-700 rounded-2xl p-10 pb-20 mt-28">
        <div className="w-full max-w-2xl">
          <h1 className="text-white text-[40px] font-semibold leading-[100px] tracking-tigh text-center">
            Sign Up
          </h1>

          <form
            className="px-10"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
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
                        className="absolute bottom-3 right-3 p-3 rounded-full border bg-black text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                        onClick={() => setImageFile(null)}
                      >
                        <MdDelete />
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama Lengkap
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  id="name"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4"
                  placeholder="Masukan nama lengkap"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  ref={usernameRef}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Masukan username"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Alamat Pengguna
                </label>
                <input
                  ref={addressRef}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Masukan alamat"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4"
                  placeholder="Masukan email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  id="password"
                  name="password"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4"
                  placeholder="Masukan password"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ulangi Password
                </label>
                <input
                  ref={confirmPasswordRef}
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4"
                  placeholder="Masukan confirm password"
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  No. Handphone anda
                </label>
                <input
                  ref={phoneRef}
                  type="number"
                  id="phone"
                  name="phone"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4"
                  placeholder="No. Handphone anda"
                  required
                />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {signupErrorMessage && (
                <p className="text-red-700 text-sm">
                  {signupErrorMessage}
                </p>
              )}
              <button
                disabled={loading}
                type="submit"
                className="w-full px-10 py-2.5 bg-blue-400 rounded-[5px] justify-center items-center gap-2.5 inline-flex"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters
                    fontSize={24}
                    className="mx-auto animate-spin"
                  />
                ) : (
                  <span className="block text-white text-xl font-semibold leading-tight tracking-tight">
                    Sign Up
                  </span>
                )}
              </button>
            </div>
          </form>
          <div className="mx-auto text-center mt-4">
            <span>Have an account?</span>{" "}
            <Link href="/login" className="text-blue-400">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
