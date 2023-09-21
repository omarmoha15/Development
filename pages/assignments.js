// 'use client'
import { MultstepContext } from '@/components/aassignments/MultstepContext';
import Account from '@/components/aassignments/steps/Account';
import Details from '@/components/aassignments/steps/Details';
import Payment from '@/components/aassignments/steps/Payment';
import Final from '@/components/aassignments/steps/Final';


import Multstep from '../components/aassignments/Multstep'
import MultstepControl from '../components/aassignments/MultstepControl'
import { useState } from 'react';





export default function assignments() {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [FinalData, setFinalData] = useState([])

const steps =[
    'Account Information',
    'Personal Details',
    'Complete'
];

const displayStep =(step)=>{
switch (step) {
case 1 : 
return <Account/>
case 2 : 
return <Details/>
case 3 : 
return <Final/>
default:
}
}

const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next"? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  
  
  };

    
    return (
<div className='md:w-1/2 mx-auto shadow-xl rounded-3xl pb-2 bg-white  '>
   <div className='conrainer horizontal mt-5'>

<Multstep steps={steps} currentStep={currentStep}/>
<div className='my-10 p-10'>
<MultstepContext.Provider value={{
    userData,
    setUserData,
    FinalData,
    setFinalData


}}>
    {displayStep(currentStep)}
</MultstepContext.Provider>

</div>
</div>
<MultstepControl
 handleClick={handleClick}
currentStep={currentStep}
steps={steps}

/>


</div>

    );
  }
  