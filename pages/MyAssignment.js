import React from 'react';
import MyAssignments from '../components/aassignments/MyAssignments'; // Import the MyRate component

const MyAssignment = () => {
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-3xl pb-2 bg-white">
      <div className="my-10 p-10">
        <MyAssignments /> {/* Render the MyRate component */}
      </div>
    </div>
  );
};

export default MyAssignment;
