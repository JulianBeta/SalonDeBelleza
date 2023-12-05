import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Inicio} from "../pages/Inicio.jsx";
import Tarifas from "../pages/Tarifas.jsx";
import Servicios from '../pages/Servicios.jsx';
import {Contactenos} from "../pages/Contactenos";
import './../../Stylesheets/App.css'
import Footer from './Footer.jsx';
import NuestroEquipo from './../pages/NuestroEquipo.jsx'
import { AsesoriaEmpleo } from '../pagesservices/pageaseroria/AsesoriaEmpleo.jsx';
import { ConcursosEndesarrollo } from '../pages/ConcursosEndesarrollo.jsx';
import { MaterialEstudio } from '../pages/MaterialEstudio.jsx';
import { Barranavegacion } from './Barranavegacion.jsx';
import { Serjururico } from '../pagesservices/pagejuridica/serjururico.jsx';
import { Cursos } from '../pagesservices/pagescurso/Cursos.jsx';
import { CursoAsistencial } from '../pagesservices/pagescurso/CursoAsistencial.jsx';
import { CursoProfesional } from '../pagesservices/pagescurso/CursoProfesional.jsx';
import { CursoTecnico } from '../pagesservices/pagescurso/CursoTecnico.jsx';
import Slider from './Slider.jsx'

export function App() {
  return <div className="App">
     <body>
     <Router>
        <Barranavegacion/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/concursos' element={<ConcursosEndesarrollo/>}/>
          <Route path='/material' element={<MaterialEstudio/>}/>
          <Route path='/tarifas' element={<Tarifas/>}/> 
          <Route path='/equipo' element={<NuestroEquipo/>}/>
          <Route path='/contactenos' element={<Contactenos/>}/>
          <Route path='/asesoria' element={<AsesoriaEmpleo/>}/>
          <Route path='/serviciosjuridicos' element={<Serjururico/>}/>
          <Route path='/cursoycapacitacion' element={<Cursos/>}/>
          <Route path='/cursoasistencial' element={<CursoAsistencial/>}/>
          <Route path='/cursoatecnico' element={<CursoTecnico/>}/>
          <Route path='/cursoprofesional' element={<CursoProfesional/>}/>
        </Routes>
      </Router>
      <Slider></Slider>
      </body>
    </div>
      ;
}