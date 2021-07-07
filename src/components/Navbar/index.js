import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

import { BrowserRouter as Router } from 'react-router-dom'; 



const Navbar = () => {
return (
	<Router>
	<>
	<Nav>
		<Bars />

		<NavMenu>
			<NavLink to='/' activeStyle style={{color:'white' ,fontSize:'40px'}}>pupten.</NavLink>
		<NavLink to='/about' activeStyle>
			About Us
		</NavLink>
		<NavLink to='/events' activeStyle>
			Products
			
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Pricing
		</NavLink>
		<NavLink to='/team' activeStyle>
			Blog
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Book a Demo
		</NavLink>
		<NavLink to='/login' activeStyle>
		Login
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signup'>Sign Up</NavBtnLink>
		</NavBtn>
		
	</Nav>
	<h1 style={{color: "white",padding:'4vh',margin:'-0vh' , backgroundColor:"rgb(73, 132, 124 )",justifyContent:'center' ,textAlign:'center'}}>Find and Book a</h1>
	</>
	</Router>
);
};

export default Navbar;
    