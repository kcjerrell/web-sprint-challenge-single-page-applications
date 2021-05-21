import styled from "styled-components";

const Container = styled.div`
flex: 1 1 28%;
margin: 50px 15px;
justify-content: center;

	h4 {
		margin: 5px 10px;
	}

	p {
		margin: 5px 10px;
	}

	img {
		width: 85%;
		aspect-ratio: 1.66;
		object-fit: cover;
		border: 2px solid #444444;
	}
`;

const Price = styled.span`
	font-weight: 700;
	color: darkgreen;
`;

const Tags = styled.span`
	color: #444444;
	font-weight: 400;
`;

const Wait = styled.div`
	display: inline-block;

	background-color: ${props => {
		const wait = props.children[0];
		if (wait >= 30)
			return '#FF552244';
		else if (wait >= 15)
			return '#FFFF2244';
		else
			return '#55FF2244';
	}};

	padding: .2em .5em;
	border: 1px solid black;
	margin: 0px 5px 0px 0px;
	font-size: small;
`;

const Fee = styled.div`
  display: inline-block;

	background-color: ${props => {
		const price = props.children[1];
		if (price >= 6)
			return '#FF660044';
		else if (price >= 3)
			return '#FFFF0044';
		else
			return '#66FF0044';
	}};

	padding: .2em .5em;
	border: 1px solid black;
	margin: 0px 0px 0px 5px;
	font-size: small;
`;

const Restaurant = props => {
	const { name, price, tags, waitMin, waitMax, fee, image } = props.data;

	return (
		<Container>
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<p>
				<Price>{price}</Price>
				&nbsp;
				<Tags>{tags.join(' - ')}</Tags>
			</p>
			<p>
				<Wait>{waitMin} to {waitMax} min</Wait>
				&nbsp;
				<Fee>${fee} delivery fee</Fee>
			</p>
		</Container>
	);
};

export default Restaurant;