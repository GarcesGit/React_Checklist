import React from 'react';
import './styles/App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Notes from './pages/Notes';
import About from "./pages/About";
import Navbar from './components/UI/Navbar/Navbar';


function App() {
	return (
       <BrowserRouter>
			<Navbar/>
			   <Routes>
			   		<Route path="*" element= {<Navigate to="/notes" />} />
 					 <Route path="/notes" element={<Notes />} />
					 <Route path="/about" element={<About />} />
 		   		</Routes>

       </BrowserRouter>
   )
   }

export default App;
