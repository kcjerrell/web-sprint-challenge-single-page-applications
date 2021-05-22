import styled from "styled-components";

const Container = styled.div``;

const OrderSuccess = props => {
	const { order } = props;

	const dispOrder = JSON.stringify(order)
		.replace(/"/g, " ")
		.split(',');

	return (
		<Container>
			<div>Success!</div>
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