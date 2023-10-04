import React, { useState } from "react";
import AddVacation from "../components/vection/AddVacation"; // Import the AddVacation component here

export default function EmployerCalendar() { // Change the function name to start with an uppercase letter
  const [vectionData, setVectionData] = useState([
    {
      id: "1",
      start: "",
      end: "",
      days: "",
      assigent: "",
      type: "",
      files: "",
    },
  ]);

  // Function to update the VectionData array
  const updateVectionData = (newData) => {
    setVectionData((prevState) => [...prevState, newData]);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-3xl pb-2 bg-white">
      <div className="my-10 p-10">
        <AddVacation updateVectionData={updateVectionData} />
      </div>
    </div>
  );
}
