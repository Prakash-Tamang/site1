import React from 'react'
import { Xmark } from '../assets/icons'

const Login = () => {
  return (
    <div className='flex flex-col gap-3 bg-gray-300 h-[350px] w-[450px] justify-center rounded-md relative'>
        <h1 className='text-5xl font-bold text-center'>Login</h1>
        <div className='flex flex-col items-center gap-2'>
        <div className='flex flex-col gap-2 '>
        <h1 className='text-xl font-semibold'>Email</h1>
        <input type="email" name="" id="" className='h-88 w-[320px] px-3 py-2 rounded-lg'/>
        </div>
        <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold'>Password</h2>
        <input type="password" name="" id="" className='h-88 w-[320px] px-3 py-2 rounded-lg'/>
        </div>
        <button type="submit" className='bg-blue-700 h-88 w-[320px] rounded-lg px-3 py-2 text-xl text-white font-semibold mt-2'>Login</button>
        </div>
        <div className='flex flex-row gap-2 ml-[70px] mb-5'>
            <h2>Forgot password?</h2>
            <h2>Sign up?</h2>
        </div>
        <div className='absolute right-5 top-3'>
        <Xmark className="h-10"/>
        </div>
    </div>
  )
}

export default Login