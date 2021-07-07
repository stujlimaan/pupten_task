import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar/index';
import Map from './pages/mapp';

import Country from './pages/country';
function App() {
return (<>
    <Navbar></Navbar>
	<Country></Country>
	<Map></Map>
	<Footer />
	</>
);
}

export default App;
