import styled from "styled-components";

const Container = styled.div``;

const OrderSuccess = props => {
	const { order } = props;

	const dispOrder = JSON.stringify(order)
		.replace(/"/g, " ")
		.split(',');

	return (
		<Container>
			<div>Your order has been placed! And we didn't even need an address or payment! Enjoy!</div>
			<div>
				{dispOrder.map((d, i) => {
					return (
						<p key={i}>{d}</p>
					);
				})}
			</div>
		</Container>
	);
};

export default OrderSuccess;