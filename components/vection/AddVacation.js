import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { PhotoIcon } from "@heroicons/react/24/solid";

const AddVacation = ({ updateVectionData }) => {
  const [value, setValue] = useState({
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date(new Date().setMonth(11)).toISOString().split("T")[0],
  });

  const [assigent, setAssigent] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState("");

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const startDateString = new Date(value.startDate).toDateString();
  const endDateString = new Date(value.endDate).toDateString();

  const handleConfirmClick = () => {
    const newData = {
      id: new Date().getTime().toString(),
      start: value.startDate,
      end: value.endDate,
      days: dayCount,
      assigent: assigent,
      type: type,
      files: file,
    };

    console.log("New Data:", newData); // Log the new data

    updateVectionData(newData);

    // Optionally, you can reset the form values here
    setValue({
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date(new Date().setMonth(11)).toISOString().split("T")[0],
    });
    setAssigent("");
    setType("");
    setFile("");
  };

  // Calculate the number of days between start and end dates
  const startDate = new Date(value.startDate);
  const endDate = new Date(value.endDate);
  const dayCount = Math.round(
    (endDate - startDate) / (1000 * 60 * 60 * 24)
  ); // Convert milliseconds to days

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900 text-right">
        طلب اجازة
      </h2>

      <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-6 text-right">
        <div className="sm:col-span-3 sm:col-start-1">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            تاريخ بداية \ نهاية الاجازة
          </label>
          <div className="mt-2">
            <Datepicker value={value} onChange={handleValueChange} />
          </div>
        </div>
        <div className="sm:col-span-2"></div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            عدد الايام :
          </label>
          <div className="mt-2">
            <p> {dayCount}</p>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            تاريخ البداية:
          </label>
          <div className="mt-2">
            <p> {startDateString}</p>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            تاريخ النهاية:
          </label>
          <div className="mt-2">
            <p> {endDateString}</p>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            القائم بالعمل اثناء الاجازة:
          </label>
          <input
            type="text"
            name="assigent"
            value={assigent}
            onChange={(e) => setAssigent(e.target.value)}
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            نوع الاجازة:
          </label>
          <select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            autoComplete="type-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="">النوع</option>
            <option value="normal">عادية</option>
            <option value="sick">مرضية</option>
          </select>
        </div>

        <div className="col-span-full">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            المرفقات
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-0.1">
            <div className="text-center">
              <PhotoIcon
                className="mx-auto h-10 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file"
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleConfirmClick}
          className="bg-green-500 text-white uppercase py-2 px-4 font-semibold rounded-xl cursor-pointer  hover:bg-slate-700 hover:text-white transtion duration-200 ease-in-out"
        >
          تأكيد
        </button>
      </div>
    </div>
  );
};

export default AddVacation;
