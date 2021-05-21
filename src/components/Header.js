import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const sharedLinkStyle = `
padding: 5px 30px;
border: 2px black solid;
text-decoration: none;
color: black;
background-color: white;
`;

export const StyledLink = styled(Link)`${sharedLinkStyle}`;
const StyledNavLink = styled(NavLink)`${sharedLinkStyle}`;

const StyledHeader = styled.header`
	display: flex;
	flex-direction: flex-row;
	justify-content: space-between;
	align-items: center;
	padding: 0 5%;

	h1 {
		color: red;
		text-transform: uppercase;
		margin: 20px 20px;
	}
`;

const StyledNav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;

	a {

	}

	.current {
		background-color: #444444;
		color: #eeeeee;
	}
`;

const Header = props => {
	return (
		<StyledHeader>
			<h1>Lambda Eats</h1>
				<StyledNav>
					<StyledNavLink to='/' exact activeClassName='current'>Home</StyledNavLink>
					<StyledNavLink to='#'>Help</StyledNavLink>
				</StyledNav>
		</StyledHeader>
	);
};

export default Header;