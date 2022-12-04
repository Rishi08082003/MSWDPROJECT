import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/Home" activeStyle>
			Home
		</NavLink>
		<NavLink to="/Login" activeStyle>
			FEEDBACk
		</NavLink>
		<NavLink to="/Signup" activeStyle>
			AUCTION
		</NavLink>
		<NavLink to="/About" activeStyle>
			About
		</NavLink>
		<NavLink to="/Contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/Buy" activeStyle>
			JOINUS
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
