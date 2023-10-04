import React from 'react';
import MyRate from '../components/rate/MyRate'; // Import the MyRate component

const ERate = () => {
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-3xl pb-2 bg-white">
      <div className="my-10 p-10">
        <MyRate /> {/* Render the MyRate component */}
      </div>
    </div>
  );
};

export default ERate;
