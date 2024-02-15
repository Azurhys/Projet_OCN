import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Hub from './Composants/Hub'
import Poomsae from './Composants/Poomsae'
import Theorie from './Composants/Theorie'
import Kibon from './Composants/Kibon'
import Evaluation from './Composants/Evaluation'

import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter , Routes , Route } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Hub />} />
          <Route path='/poomsae' element={<Poomsae />} />
          <Route path='/kibon' element={<Kibon />} />
          <Route path='/theorie' element={<Theorie />} />
          <Route path='/evaluation' element={<Evaluation />} />
        </Route>
      </Routes>
  </BrowserRouter>
)
