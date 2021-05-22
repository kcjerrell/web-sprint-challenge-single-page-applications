import styled from "styled-components";

const Container = styled.div``;

const OrderSuccess = props => {
	const { order } = props;

	return (
		<Container>
			<div>Success!</div>
			<div>{JSON.stringify(order)}</div>
		</Container>
	);
};

export default OrderSuccess;