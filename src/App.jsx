import React from 'react'
import Signin from './Components/Signin/Signin'
import "./App.css"
import Signup from './Components/Signup/Signup'
import slide from './slide'
const App = () => {
  // let slide = () => {
    // }
    // function slide() {
  //   let slideDiv = document.getElementById('slider');
  //   slideDiv
  //   slideDiv.style.transform = ('scaleX(-50%)')
  // }
  
  return (
    <div id="main">
      <Signin />
      <Signup />
      {/* <Signin /> */}
      <div id="slider">
        <div id="text">Don't have an account?</div>
        <div id="diffdiv"><button type="button" id="diff" onClick={slide}>Sign Up</button></div>
      </div>
    </div>
  )
}

export default App