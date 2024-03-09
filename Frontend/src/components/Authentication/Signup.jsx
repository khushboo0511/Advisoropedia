import React, { useState } from 'react';
import Input from '../Common/Input';
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import Button from '../Common/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Title from '../Home/Title';

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = () => {
    axios.post('http://localhost:6000/auth/signup', formData)
      .then((res) => {
        localStorage.setItem("token", res?.data?.data?.token || null);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex justify-center items-center h-screen bg-[#131D3B] overflow-y-hidden font-ubuntu'>
      <form className='bg-red-400 max-w-96 w-11/12 md:w-2/5 lg:w-4/6 rounded px-5 py-2 flex flex-col items-stretch shadow-2xl'>
        {/* Signup text */}
        <div className='text-center text-3xl font-bold bg-blueWhite py-1 mb-7 select-none'>New here?</div>
        <div className='align-middle justify-items-center'>
        <Title />
        </div>
        <p className='text-gray-800 font-semibold text-xl py-3'>Kickstart your journey with us</p>
        {/* Username*/}
        <div className='w-full flex flex-col mb-3'>
          <Input
            type='text'
            name='username'
            id='username'
            placeholder='Enter username'
            value={formData.username}
            onChange={changeHandler}
          />
        </div>
        {/* Email*/}
        <div className='w-full flex flex-col mb-3'>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='Enter email'
            value={formData.email}
            onChange={changeHandler}
          />
        </div>

        {/* password */}
        <div className='relative w-full flex flex-col mb-3'>
          <Input
            type={showPass ? "text" : "password"}
            name='password'
            id='password'
            placeholder='Enter password'
            value={formData.password}
            customClasses='pr-16'
            onChange={changeHandler}
          />
          <span
            onClick={() => setShowPass((prev) => (!prev))}
            className='absolute right-5 top-[2.75rem] cursor-pointer'
          >{!showPass ? (<RxEyeClosed size={15} />) : (<RxEyeOpen size={15} />)}</span>
        </div>
        {/* conf password */}
        <div className='relative w-full flex flex-col '>
          <Input
            type={showConfPass ? "text" : "password"}
            name='confirmPassword'
            id='confirmPassword'
            placeholder='COnfirm password'
            value={formData.confirmPassword}
            customClasses='pr-16'
            onChange={changeHandler}
          />
          <span
            onClick={() => setShowConfPass((prev) => (!prev))}
            className='absolute right-5 top-[2.75rem] cursor-pointer'
          >{!showConfPass ? (<RxEyeClosed size={15} />) : (<RxEyeOpen size={15} />)}</span>
        </div>

        {/* submit button */}
        <div className='mt-5 mb-3'>
          <Button primary fullWidth onClick={submitHandler}>Sign Up</Button>
        </div>

        {/* or line */}
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300' />
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className=' bg-white px-2 text-gray-500'>
              Or
            </span>
          </div>
        </div>

        {/* Signup link */}
        <div
          className='flex gap-2 justify-center text-md px-2 my-2 text-gray-500'
        >
          <p>Already have an account?</p>
          <Link
            to={'/login'}
            className='underline cursor-pointer'
          >
            Login
          </Link>

        </div>
      </form>
    </div>
  );
}

export default Signup;
