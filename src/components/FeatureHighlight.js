import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from "./Header";

const Container = styled.div`
	height: 400px;
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(./Pizza.jpg);
	background-size: cover;

	a {
		background-color: #444444bb;
		color: white;
	}

	h2 {
		color: white;
		text-shadow: 0px 0px 10px black;
	}
`;

const FeatureHighlight = props => {
	return (
		<Container>
			<h2>Your favorite food, delivered while coding</h2>
			<StyledLink to='/pizza' id='order-pizza'>Pizza?</StyledLink>
		</Container>
	);
};

export default FeatureHighlight;