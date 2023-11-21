import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div>
        <section>
            <div className='flex item-center justify-center text-white'>
                <div className="w-[1180px] h-[580px] flex flex-col items-center justify-center bg-green-700 rounded-[20px]">
                    <h1 className="text-white text-[40px] font-semibold leading-[100px] tracking-tigh text-center">Login</h1>
                    
                    <div className="flex items-center justify-center">
                    <form className='mx-auto'>
                        <div className="mb-6">
                            <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Username/Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                                placeholder="email@gmail.com"
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
                            type="password"
                            id="password"
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[460px] h-10 px-[142px] py-2.5"
                            required
                            />
                        </div>
                        <button
                            type="submit"
                            className='w-[460px] h-10 px-[142px] py-2.5 bg-blue-400 rounded-[5px] justify-center items-center gap-2.5 inline-flex'
                        >
                            <div className="text-white text-xl font-semibold leading-tight tracking-tight">Submit</div>
                        </button>
                    </form>
                    </div>
                    

                    <div className='mx-auto mt-[25px] text-center'>
                        <span >Don't have an account?</span>{" "}
                        <Link href="/signup" className='text-blue-400'>
                            Sign Up
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Login