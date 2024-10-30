import React from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <Login/> */}
      <SignUp/>
    </div>
  )
}

export default App