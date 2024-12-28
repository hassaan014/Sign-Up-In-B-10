import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

let slide = (element) => {
    console.log(document.getElementById("slider"));
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
