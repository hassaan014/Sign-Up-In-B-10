import React from 'react'

const slide = () => {
    let btnDiff = document.getElementById('diff')
    if (btnDiff.innerHTML == "Sign Up") {
        let sliderDiv = document.getElementById('slider')
        let texts = document.getElementById('text')
        let btnDiff = document.getElementById('diff')
        texts.innerText = "Already have an account?"
        btnDiff.innerText = "Sign In"
        console.log(texts, btnDiff);
        sliderDiv.style.right = "50%";
        sliderDiv.style.left = "0"; 
        sliderDiv.style.transition = "all 1s ease"
    }
    else if(btnDiff.innerHTML == "Sign In"){
        let sliderDiv = document.getElementById('slider')
        let texts = document.getElementById('text')
        let btnDiff = document.getElementById('diff')
        texts.innerText = "Dont have an account?"
        btnDiff.innerText = "Sign Up"
        console.log(texts, btnDiff);
        sliderDiv.style.right = "0";
        sliderDiv.style.left = "50%"; 
        sliderDiv.style.transition = "all 1s ease"
    }
}

export default slide