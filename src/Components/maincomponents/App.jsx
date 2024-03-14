import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Inicio} from "../pages/Inicio.jsx";

import {Contactenos} from "../pages/Contactenos";
import './../../Stylesheets/App.css'
import Footer from './Footer.jsx';
// import { Barranavegacion } from './Barranavegacion.jsx';


export function App() {
  return <div className="App">
     <body>
     <Router>
        {/* <Barranavegacion/> */}
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          
          
          <Route path='/contactenos' element={<Contactenos/>}/>
          
        </Routes>
      </Router>
      
      </body>
    </div>
      ;
}