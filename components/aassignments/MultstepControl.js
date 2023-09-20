import React from 'react'

const MultstepControl = () => {
  return (
    <div className=' container flex justify-around mt-4 mb-8'>
        <button className=' bg-white text-salte-400 uppercase py-2 px-4 rounded-xl cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transtion duration-200'>
            Back
        </button>
        <button className=' bg-white text-salte-400 uppercase py-2 px-4 rounded-xl cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transtion duration-200'>
            Next
        </button>


    </div>
  )
}

export default MultstepControl