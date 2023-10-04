import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PhotoIcon } from '@heroicons/react/24/solid'

export default function Details  () {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');
  const [showTextArea, setShowTextArea] = useState(false);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Show the textarea if the selected option is "employee"
    setShowTextArea(selectedValue === 'employee');
  };












  return (
    <div className="border-b border-gray-900/10 pb-12">
    <h2 className="text-base font-semibold leading-7 text-gray-900 text-right">بيانات وجهة الانتداب </h2>
   

    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-right">
      <div className="sm:col-span-3 sm:col-start-1">
        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
          رقم خطاب التغطية
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
         رقم امر التكليف
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          تاريخ امر التكليف 
        </label>
        <div className="mt-2">
        <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
         تم انهاء المهمه في 
        </label>
        <div className="mt-2">
        <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}

    />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
          تاريخ البداية
        </label>
        <div className="mt-2">
        <DatePicker
      
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
        </div>
      </div>

      <div className="sm:col-span-3">
      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
       تكلفة السفر:
      </label>
      <select
        id="country"
        name="country"
        autoComplete="country-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        onChange={handleOptionChange}
        value={selectedOption}
      >
        <option value="">Select an option</option>
        <option value="employee">الموظف</option>
        <option value="organization">الجهة</option>
      </select>

      {showTextArea && (
        <div className="mt-2">
          <label htmlFor="text-area" className="block text-sm font-medium leading-6 text-gray-900">
            Text Area:
          </label>
          <textarea
            id="text-area"
            name="text-area"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      )}
    </div>

            <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
        تكلفة السكن:
      </label>
      <select
        id="country"
        name="country"
        autoComplete="country-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        onChange={handleOptionChange}
        value={selectedOption}
      >
        <option value="">Select an option</option>
        <option value="employee">الموظف</option>
        <option value="organization">الجهة</option>
      </select>

      {showTextArea && (
        <div className="mt-2">
          <label htmlFor="text-area" className="block text-sm font-medium leading-6 text-gray-900">
            Text Area:
          </label>
          <textarea
            id="text-area"
            name="text-area"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      )}
    </div>

            <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
       تكلفة المواصلات:
      </label>
      <select
        id="country"
        name="country"
        autoComplete="country-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        onChange={handleOptionChange}
        value={selectedOption}
      >
        <option value="">Select an option</option>
        <option value="employee">الموظف</option>
        <option value="organization">الجهة</option>
      </select>

      {showTextArea && (
        <div className="mt-2">
          <label htmlFor="text-area" className="block text-sm font-medium leading-6 text-gray-900">
            Text Area:
          </label>
          <textarea
            id="text-area"
            name="text-area"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      )}
    </div>
            <div className="sm:col-span-3">
               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
       تكلفة الطعام:
      </label>
      <select
        id="country"
        name="country"
        autoComplete="country-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        onChange={handleOptionChange}
        value={selectedOption}
      >
        <option value="">Select an option</option>
        <option value="employee">الموظف</option>
        <option value="organization">الجهة</option>
      </select>

      {showTextArea && (
        <div className="mt-2 ">
          <label htmlFor="text-area" className="block text-sm font-medium leading-6 text-gray-900">
            Text Area:
          </label>
          <textarea
            id="text-area"
            name="text-area"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      )}
    </div>


    <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 text-right">
                نسخة pdf خطاب التغطية
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-0.1">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-10 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              </div>


              <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
               نسخة pdf  من مشهد من جهة الوصول
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-0.1">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-10 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              </div>


              <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                نسخة pdf  امر التكليف 
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-0.1">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-10 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              </div>

              <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                نسخة pdf  موافقة سمو أمير المنطقة ان وجود
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-0.1">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-10 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              </div>



           


    


    </div>
  </div>
  )
}