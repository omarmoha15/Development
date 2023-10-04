import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Rate = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to update the selected date in RateData
  const updateDate = (date) => {
    const updatedData = data.map((item) => {
      if (item.id === '1') {
        return {
          ...item,
          date: date.toISOString().split('T')[0],
        };
      }
      return item;
    });
    return updatedData;
  };

  // Event handler for when the user selects a date
  const handleDateChange = (date) => {
    setSelectedDate(date);

    // Update RateData with the selected date
    const updatedData = updateDate(date);
    console.log(updatedData);
  };

  // Event handler for the "تأكيد" button click
  const handleConfirmClick = () => {
    const updatedData = updateDate(selectedDate);
  
    const outputData = {
      identy: data[0].identy,
      name: data[0].name,
      section: data[0].section,
      job: data[0].job,
      date: selectedDate.toISOString().split('T')[0],
      goles: '', // You can set this value as needed
    };
  
    console.log('Data:', outputData);
  };

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">ارسال طلب تقييم</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">قم بالتأكد وادخال المعلومات اللازمة لاكمال الطلب</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
            رقم الهوية
          </label>
          <div className="mt-2">{data[0].identy}</div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
            اسم الموظف
          </label>
          <div className="mt-2">{data[0].name}</div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            القسم
          </label>
          <div className="mt-2">{data[0].section}</div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            المسمى الوظيفي
          </label>
          <div className="mt-2">{data[0].job}</div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">تاريخ سنة التقييم</label>
          <div className="mt-2">
          <DatePicker
  selected={selectedDate}
  onChange={handleDateChange}
  dateFormat="yyyy-MM-dd"
  readOnly // Add the readOnly prop here
  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>
          </div>
        </div>

        <div className="col-span-full">
          <label  className="block text-sm font-medium leading-6 text-gray-900">
            الاهداف
          </label>
          <div className="mt-2">
            <textarea
              id="goles"
              name="goles"
             
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={''}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">اكتب بشكل موجز عن الاهداف والانجازات للتقيم</p>
        </div>

        <button
          onClick={handleConfirmClick}
          className="bg-green-500 text-white uppercase py-2 px-4 font-semibold rounded-xl cursor-pointer hover:bg-slate-700 hover:text-white transtion duration-200 ease-in-out"
        >
          تأكيد
        </button>
      </div>
    </div>
  );
};

export default Rate;
