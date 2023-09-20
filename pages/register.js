import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios'; // Import Axios
import Link from 'next/link';

import logo from '../public/v16_193.png';

export default function Register() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the form data
    const identity = e.target.identity.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Make a POST request to your registration API
      const response = await axios.post('http://10.0.0.215:7000/api/register', {
        identity,
        name,
        email,
        password,
      });

      // Handle the response, e.g., redirect on success
      if (response.status === 201) {
        // Registration was successful; you can redirect the user to the login page or dashboard
        router.push('/login'); // Redirect to the login page
      } else {
        // Handle other response statuses or errors
        console.error('Registration failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-t from-white via-white to-teal-200 flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image src={logo} width={130} height={130} alt="Logo" className="absolute top-0 left-7 m-4 w-28 h-30" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            انشاء حساب جديد
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="identity" className="block text-sm font-medium leading-6 text-gray-900 text-right">
                  رقم الهوية
                </label>
                <div className="mt-2">
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
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 text-right">
                  الاسم
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-right">
                  البريد الإلكتروني
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
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
                    autoComplete="new-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 تسجيل الدخول
                </button>
              </div>
            </form>
            <p className="text-sm font-light text-slate-950 dark:text-slate-400 my-5">
                          لديك حساب بالفعل !!  <Link href="/login" className="text-sm font-light text-indigo-500 hover:underline dark:text-primary-500"> سجل دخولك</Link>
                        </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
