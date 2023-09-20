import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// Import Axios
import axios from 'axios';

// Media Import
import logo from '../public/v16_193.png';

export default function Login() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the form data
    const identity = e.target.identity.value;
    const password = e.target.password.value;

    try {
      // Make a POST request to your API
      const response = await axios.post('http://10.0.0.215:7000/api/login', {
        identity,
        password,
      });

      // Handle the response, e.g., redirect on success
      if (response.status === 200) {
        // Redirect or perform any other action you need
        router.push('/about');
      } else {
        // Handle other response statuses or errors
        console.error('Login failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-t from-white via-white to-teal-200 flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 rtl-grid">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <Image src={logo} width={130} height={130} alt="Logo" className="absolute top-0 left-7 m-4 w-28 h-30" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            تسجيل الدخول
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto shadow-2xl rounded-3xl dark:border sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="identity" className="block text-sm font-medium leading-6 text-gray-900 text-right">
                  رقم الهوية
                </label>
                <div className="mt-2 text-right">
                  <input
                    id="identity"
                    name="identity"
                    type="text"
                    autoComplete="identity"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 text-right">
                  كلمة المرور
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                    Remember me
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="text-sm font-light text-slate-950 dark:text-slate-400 my-5">
               ليس لديك حساب ؟ <Link href="/register" className="text-sm font-light text-indigo-500 hover:underline dark:text-primary-500">انشاء حساب</Link>
             </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
