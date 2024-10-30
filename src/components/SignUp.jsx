import React, { useState } from 'react'

const SignUp = () => {

 // Step 1: State to manage form input, error messages, and validation status
 const[inputData, setInputData] = useState(
    {
        email : "",
        password : "",
        repeatPassword : ""
    }
 );

 const[error, setError] = useState({});
 const[isValidate, setIsValidate] = useState(false);
 
 // Step 2: Handle input change
 const handleChange = (e) => {
    const {name, value} = e.target; // Get field name and value
    setInputData((prev) => ({
        ...prev, //Spread previous state
        [name] : value // Update the current field
    }));
 };

 // Step 3: Validation logic
 const validation = (values) => {
    let newErr = {};

    // Email validation: check if it's empty
    if(!values.email){
        newErr.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)){
        // Check if the email has a valid format
        newErr.email = "Email is invalid";
    }

    // Password validation: check if it's empty
    if(!values.password){
        newErr.password = "Password is required";
    }
    else if(values.password.length < 6){
        // Check if the password is at least 6 characters long
        newErr.password = "Password must be at least 6 characters";
    }
 
    // Repeat password validation: check if it's empty and matches the password
    if(!values.repeatPassword){
        newErr.repeatPassword = "Repeat password is required";
    }
    else if (values.repeatPassword !== values.password){
        newErr.repeatPassword = "Passwords do not match";
    }

    return newErr;
 };

 // Step 4: Handle form submission
 const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(inputData)); //Run validation
    setIsValidate(true); // Set the validation state to true (form submitted)

    // If there are no errors, show success alert
    if (Object.keys(error).length === 0) {
        window.alert("Account has been successfully created!");
      }
    
 };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 bg-gray-100 p-10'>
        <div className='flex flex-col gap-3'>
        <h1 className='text-5xl font-bold'>Sign up</h1>
        <h2 className='text-gray-600 text-lg'>Please fill in this form to create an account</h2>
        </div>
        <div className='bg-gray-300 h-0.5 w-full'></div>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-bold'>Email</h3>
            <input type="email" name="email"
             value={inputData.email} // Bind to state
             onChange={handleChange} // Handle change
              id="" placeholder='Enter Email'  className='w-[450px] bg-gray-200 px-2 py-3'/>
              {/* Display error message */}
            <p className='text-sm text-red-500'>{error?.email}</p>
            </div>
            <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-bold gap-2'>Password</h3>
            <input type="password" name="password" value={inputData.password} onChange={handleChange} id="" placeholder='Enter Password' className='w-[450px] bg-gray-200 px-2 py-3'/>
            {/* Display error message */}
            <p className='text-sm text-red-500'>{error?.password}</p>
            </div>
            <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-bold gap-2' >Repeat password</h3>
            <input type="password" name="repeatPassword" value={inputData.repeatPassword} onChange={handleChange} id="" placeholder='Repeat password' className='w-[450px] bg-gray-2
            00 px-2 py-3'/>
            {/* Display error message */}
            <p className='text-sm text-red-500'>{error?.repeatPassword}</p>
            </div>
        </div>
        <div className='flex flex-row gap-2 items-center'>
            <input type="checkbox" name="" id="" />
            <h3 className='font-semibold text-lg'>Remember me</h3>
        </div>
        <h2 className='text-lg'>By creating an account you agree to our <span className='text-blue-400 underline'>Terms & Privacy</span></h2>
        <div className='flex flex-row'> 
            <button type='button' className='bg-red-500 text-white w-[50%] py-2'>Cancel</button>
            <button type='submit' className='bg-green-500 text-white w-[50%] py-2'>Sign Up</button>
        </div>
    </form>
  )
}

export default SignUp