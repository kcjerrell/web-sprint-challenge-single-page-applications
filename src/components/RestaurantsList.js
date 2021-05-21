import { useState } from "react";
import styled from "styled-components";
import dummyData from "../dummyRestaurantData";
import Restaurant from './Restaurant';

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`;

const RestaurantList = props => {
	const [ restaurantData, setRestaurantData ] = useState(dummyData);

	return (
		<Container>
			{restaurantData.map(r => {
				return <Restaurant data={r} key={r.id} />
			})}
		</Container>
	);
};

export default RestaurantList;