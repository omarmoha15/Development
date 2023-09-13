'use client'



import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css';

// Media Import 
import logo from './v16_193.png'



export default function Register() {
    const router = useRouter()
  return (
    <>
    <section className="bg-gradient-to-t from-white via-white to-teal-200 h-full w-full text-center rtl-grid">
    <Image  src={logo} width={130} height={130} alt="Logo" className="absolute top-0 left-7 m-4 w-28 h-30" />

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-50 dark:border-indigo-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-950 md:text-2xl dark:text-white">
                        انشاء حساب جديد
                    </h1>
                    <form  className=" space-y-4 md:space-y-6" action="/">
                    <div className='text-right'>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-950 dark:text-white">اسم المستخدم</label>
                            <input  type="text" name="name" id="name" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""  />
                        </div>
                        <div className='text-right'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-950 dark:text-white">رقم الهوية </label>
                            <input  type="email" name="email" id="email" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="****1234"  />
                        </div>
                        <div className='text-right'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-950 dark:text-white">البريد الالكتروني </label>
                            <input  type="email" name="email" id="email" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com"  />
                        </div>
                        <div className='text-right'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-950 dark:text-white">كلمة المرور</label>
                            <input  type="password" name="password" id="password" placeholder="••••••••" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                        </div>

                        <button  onClick={() => router.push('/login')} type="submit" className="w-full  text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-light rounded-lg text-sm px-5 py-2.5 text-center  mb-2">تأكيد</button>
                        <p className="text-sm font-light text-indigo-500 dark:text-indigo-400">
                            لديك حساب بالفعل  <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> سجل دخولك</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <ToastContainer />
</>
  )
}
