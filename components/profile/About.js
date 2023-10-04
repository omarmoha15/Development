import React from 'react'

function About() {
  return (
    <div class="p-20">
<div class="p-20 bg-gray-200 rounded-3xl shadow-2xl mt-6">
  <div class="grid grid-cols-1 md:grid-cols-3">

    <div class="relative">
      <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
        <img src='data:image/jpeg;base64,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' 
        className='rounded-full'
        />

      </div>
    </div>

    {/* <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
<button
  class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Print,PDF
</button>

    </div> */}
  </div>

  <div class="mt-20 text-center  border-b pb-12">
    <h1 class="text-4xl font-medium text-gray-700">عمر محمد, <span class="font-light text-gray-500">27</span></h1>
    <p class="font-light text-gray-600 mt-3">السعوديه, ابها</p>

    <p class="mt-8 text-gray-500">مبرمج - Front-end </p>
    <p class="mt-2 text-gray-500">University of Computer Science</p>

    <div className="">
          <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2">
              {/* Left Side */}
              <div className="w-full md:w-3/12 md:mx-2">
                {/* Profile Card */}
                <div className="bg-white p-3 border-t-4 rounded-2xl border-gray-400">
                  <div className="image overflow-hidden">
                    <img
                      className="h-auto w-full mx-auto"
                      src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      alt=""
                    />
                  </div>
                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    عمر محمد
                  </h1>
                  <h3 className="text-gray-600 font-lg text-semibold leading-6">
                    مبرمج واجهات اماميه.
                  </h3>
                  <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                    non deserunt
                  </p>
                  <ul
                    className="bg-gray-100 text-gray-600 rounded-2xl hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y  shadow-sm"
                  >
                    <li className="flex items-center py-3">
                      <span className=' ml-1'>الحاله</span>
                      <span className="ml-auto">
                        <span
                          className="bg-green-500 py-1 px-2 rounded text-white text-sm"
                        >
                          موظف
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center py-3">
                      <span>تاريخ التعيين </span>
                      <span className="ml-auto">Sep 01, 2023</span>
                    </li>
                  </ul>
                </div>
                {/* End of profile card */}
                <div className="my-4"></div>
              </div>
              {/* Right Side */}
              <div className="w-full md:w-9/12 mx-2 h-64">
                {/* Profile tab */}
                {/* About Section */}
                <div className="bg-white p-3 shadow-sm  rounded-2xl my-2">
                  <div
                    className="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
                  >
                    <span className="text-gray-900">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">بياناتي</span>
                  </div>
                  <div className="text-gray-700 ">
                    <div className="grid md:grid-cols-2 text-sm">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">الاسم الاول</div>
                        <div className="px-4 py-2">عمر</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold"> الاسم الاخير</div>
                        <div className="px-4 py-2">سعيد</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">الجنس</div>
                        <div className="px-4 py-2">ذكر</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold"> رقم الهاتف.</div>
                        <div className="px-4 py-2">+11 998001001</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold"> العنوان</div>
                        <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold"> العنوان</div>
                        <div className="px-4 py-2">ابها, امارة منطقة عسير</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">البريد الالكتروني</div>
                        <div className="px-4 py-2">
                          <a className="text-blue-800" href="mailto:jane@example.com">example@example.com</a>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">تاريخ</div>
                        <div className="px-4 py-2">Nov 05, 1998</div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                  >
                    Show Full Information
                  </button>
                </div>
                {/* End of about section */}

                {/* <div className="my-4"></div> */}

                {/* Experience and education */}
                <div className="bg-white p-1 shadow-sm  rounded-2xl">
                  <div className="grid grid-cols-2">
                    <div>
                      <div
                        className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                      >
                        <span className="text-gray-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Experience</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-blue-600">Owner at Her Company Inc.</div>
                          <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                        <li>
                          <div className="text-blue-600">Owner at Her Company Inc.</div>
                          <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                       
                      </ul>
                    </div>
                    <div>
                      <div
                        className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                      >
                        <span className="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                         
                          </svg>
                        </span>
                        <span className="tracking-wide">Education</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-blue-600">Masters Degree in Oxford</div>
                          <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                        <li>
                          <div className="text-blue-600">Bachelors Degree in LPU</div>
                          <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End of Experience and education grid */}
                </div>
                {/* End of profile tab */}
              </div>
            </div>
          </div>
        </div>
  </div>

</div>
</div>
  )
}

export default About