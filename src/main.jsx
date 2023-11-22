import React from 'react'
import ReactDOM from 'react-dom/client'
//import ContactUstwo from './Components/formcomponent/formulariodos' 
import { App } from './Components/maincomponents/App.jsx'
//import Inicio from './Components/pages/Inicio'
import './../src/Stylesheets/index.css'
import Footer from './Components/maincomponents/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>
)