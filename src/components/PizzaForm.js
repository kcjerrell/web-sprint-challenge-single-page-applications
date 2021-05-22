import { useState } from "react";
import styled from "styled-components";
import CheckList from "./CheckList";
import ComboBox from "./ComboBox";

const pizzaSizes = [
	'Extra Large (18in)',
	'Large (14in)',
	'Medium (11in)',
	'Small (8in)'
];
const pizzaToppings = [
	'Pepperoni',
	'Sausage',
	'Extra Cheese',
	'Green Peppers',
	'Mushrooms',
	'Olives',
	'Onions',
	'Jalepeno'
];
const pizzaSauces = [
	'Pizza Sauce',
	'No Sauce',
	'White Sauce',
	'BarbecueSauce'
]

const emptyFormValues = {
	orderName: '',
	size: '',
	sauce: '',
	special: '',
}

pizzaToppings.forEach(pt => {
	const propName = `top${pt.replace(/\s/g, '')}`
	emptyFormValues[propName] = false;
});

const Container = styled.div`
`;


const PizzaForm = props => {
	const { submitForm } = props.submit;

	const [formValues, setFormValues] = useState(emptyFormValues);

	const onChange = e => {
		console.log(e);
		const { name, value, checked, type } = e.target;
		const valueToUse = type === 'checkbox' ? checked : value;

		setFormValues({ ...formValues, [name]: valueToUse });
	};

	console.log(formValues);

	return (
		<Container>
			<form>

				<h3>Build Your Own Pizza</h3>
				<img src='./x.png' alt='placeholder' />
				<h2>Build Your Own Pizza</h2>

				<label>
					<h4>Choice of Size</h4>
					<p>Required</p>
					<ComboBox name='size'
						value={formValues.size}
						onChange={onChange}
						items={pizzaSizes} />
				</label>

				<label>
					<h4>Choice of Sauce</h4>
					<p>Required</p>
					<ComboBox name='sauce'
						value={formValues.sauce}
						onChange={onChange}
						items={pizzaSauces} />
				</label>

				<div>
					<h4>Toppings</h4>
					<CheckList
						name='top'
						items={pizzaToppings}
						value={formValues}
						onChange={onChange} />
				</div>

				<label>
					<h4>Your Name</h4>
					<p>Required</p>
					<input
						type='text'
						name='orderName'
						value={formValues.orderName}
						onChange={onChange} />
				</label>

				<label>
					<h4>Special Instructions</h4>
					<input
						type='text'
						name='special'
						value={formValues.special}
						onChange={onChange} />
				</label>

				<button>Submit</button>
			</form>
		</Container>
	);
};

export default PizzaForm;