import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import HOME from './Home';
import About from './about';
import READMORE from './abouts';
import AUCTION from './Signup';
import Contact from './Contact';
import ADDSTOCK from './Login';
import Buy from './Buy';
import JOINUS from './Buy';
import GOTOADDSTOCK from './CreateNote';
function App() {
return (
	
	<Router>
	<Navbar />
	
	<Routes>
		<Route exact path='/Home'  element={<HOME />} />
		<Route path='/about' element={<About/>} />
		<Route path='/Contact' element={<Contact/>} />
		<Route path='/Login' element={<ADDSTOCK/>} />
		<Route path='/Signup' element={<AUCTION/>} />
		<Route path='/abouts' element={<READMORE/>} />
		<Route path='/Buy' element={<Buy/>} />
		<Route path='/Buy' element={<JOINUS/>} />
		<Route path='/CreateNote' element={<GOTOADDSTOCK/>} />
		
	</Routes>
	</Router>
	
);
}

export default App;
