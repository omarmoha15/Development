import React, {useContext} from 'react'
import { MultstepContext } from '../MultstepContext'

export default function Account (){
    const {userData, setUserData} = useContext(MultstepContext)
    const handleChange =(e)=>{
        const {name, value} = e.target 
        setUserData({...userData,[name]:value })

    }

  return (
    <div className='flex flex-col' >
        <div className=' w-full mx-2 flex-1'>
            <div className='font-blod h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                {''}
                اسم المستخدم

            </div>
            <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input
                onChange={handleChange}
                value={userData["username"] || ''}
                name = "username"
                placeholder='اسم المستحدم'
                className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                
                />

            </div>


        </div>

        <div className=' w-full mx-2 flex-1'>
            <div className='font-blod h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                {''}
                رقم الهوية

            </div>
            <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input
                onChange={handleChange}
                value={userData["password"] || ''}
                name = "password"
                placeholder='رقم الهوية'
                className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                
                />

            </div>


        </div>

        <div className=' w-full mx-2 flex-1'>
            <div className='font-blod h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                {''}
                مسمى الوظيفية

            </div>
            <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input
                onChange={handleChange}
                value={userData["password"] || ''}
                name = "password"
                placeholder='مسى الوظيفية'
                className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                
                />

            </div>


        </div>

        <div className=' w-full mx-2 flex-1'>
            <div className='font-blod h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                {''}
                المرتبة

            </div>
            <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input
                onChange={handleChange}
                value={userData["password"] || ''}
                name = "password"
                placeholder='المرتبة '
                className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                
                />

            </div>


        </div>


        <div className=' w-full mx-2 flex-1'>
            <div className='font-blod h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                {''}
                الدرجة

            </div>
            <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input
                onChange={handleChange}
                value={userData["password"] || ''}
                name = "password"
                placeholder='الدرجة '
                className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                
                />

            </div>


        </div>
        




    </div>
  )
}
