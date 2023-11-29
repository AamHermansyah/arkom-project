'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Login() {
  const [loading, setLoading] = useState(false);
  const [isInvalidCredential, setIsInvalidCredential] = useState(false);
  const emailOrUsernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useRouter();

  useEffect(() => {
    const userStringify = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (userStringify && token) navigate.push('/profile');
  }, []);

  const onSubmit = () => {
    setLoading(true);
    setIsInvalidCredential(false);

    const data = {
      emailOrUsername: emailOrUsernameRef.current!.value,
      password: passwordRef.current!.value
    }

    fetch('/api/auth/login', {
      body: JSON.stringify(data),
      method: 'POST'
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem('user', JSON.stringify(res.user));
          localStorage.setItem('token', JSON.stringify(res.token));
          window.location.href = '/profile'
          return;
        }

        if (res.status === 401) {
          setIsInvalidCredential(true);
          return;
        }

        alert(`${res.status}: ${res.message}`);
      })
      .catch((error) => {
        alert(`${error.status}: ${error.message}`);
      })
      .finally(() => setLoading(false));
  }


  return (
    <div className="px-20 mb-10 text-white">
      <div className="w-full flex flex-col items-center justify-center bg-green-700 rounded-2xl p-10 pb-20 mt-28">
        <h1 className="text-white text-[40px] font-semibold leading-[100px] tracking-tigh text-center">
          Login
        </h1>

        <div className="flex items-center justify-center">
          <form
            className="mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <div className="mb-6">
              <label
                htmlFor="username_or_email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username/Email
              </label>
              <input
                ref={emailOrUsernameRef}
                type="text"
                id="username_or_email"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                placeholder="Masukan email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                ref={passwordRef}
                placeholder="Masukan password"
                type="password"
                id="password"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                required
              />
            </div>
            {isInvalidCredential && (
              <p className="text-red-700 text-sm mb-2">
                Password atau email yang anda masukan salah!
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
                  Submit
                </span>
              )}
            </button>
          </form>
        </div>

        <div className="mx-auto mt-[25px] text-center">
          <span>Don't have an account?</span>{" "}
          <Link href="/signup" className="text-blue-400">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;