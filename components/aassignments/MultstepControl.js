import React from 'react';

const MultstepControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
      <button
        onClick={() => handleClick()}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transtion duration-200 ease-in-out
         ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        رجوع
      </button>
      <button
        onClick={() => handleClick('next')}
        className='bg-green-500 text-white uppercase py-2 px-4 font-semibold rounded-xl cursor-pointer  hover:bg-slate-700 hover:text-white transtion duration-200 ease-in-out'
      >
        {currentStep === steps.length - 1 ? 'تأكيد' : 'التالي'}
      </button>
    </div>
  );
};

export default MultstepControl;
