import { useEffect, useState } from "react";
import styled from "styled-components";
import { pizzaSauces, pizzaSizes, pizzaToppings } from "../pizzaOptions";
import CheckList from "./CheckList";
import ComboBox from "./ComboBox";
import pizzaSchema from "../pizzaFormSchema";
import * as yup from 'yup';
import schema from "../pizzaFormSchema";

const emptyFormValues = {
	orderName: '',
	size: '',
	sauce: '',
	special: '',
}

const emptyFormErrors = {
	orderName: '',
	sauce: '',
	size: '',
}

pizzaToppings.forEach(pt => {
	const propName = `top${pt.replace(/\s/g, '')}`
	emptyFormValues[propName] = false;
});

const Container = styled.div`
`;


const PizzaForm = props => {
	const { submit } = props;

	const [formValues, setFormValues] = useState(emptyFormValues);
	const [formErrors, setFormErrors] = useState(emptyFormErrors);
	const [disableSubmit, setDisableSubmit] = useState(true);

	useEffect(() => {
		schema.isValid(formValues).then(valid => setDisableSubmit(!valid));
	}, [formValues]);

	const validate = (name, value) => {
		yup.reach(pizzaSchema, name)
			.validate(value)
			.then(() => setFormErrors({ ...formErrors, [name]: '' }))
			.catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
	};

	const onChange = e => {
		console.log(e);
		const { name, value, checked, type } = e.target;
		const valueToUse = type === 'checkbox' ? checked : value;

		validate(name, valueToUse);

		setFormValues({ ...formValues, [name]: valueToUse });
	};

	const onSubmit = e => {
		e.preventDefault();
		submit(formValues);
	};

	return (
		<Container>
			<form id='pizza-form' onSubmit={onSubmit}>

				<h3>Build Your Own Pizza</h3>
				<img src='./x.png' alt='placeholder' />
				<h2>Build Your Own Pizza</h2>

				<label>
					<h4>Choice of Size</h4>
					<p>Required</p>
					<ComboBox name='size'
						value={formValues.size}
						onChange={onChange}
						items={pizzaSizes}
						id='size-dropdown' />
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
						onChange={onChange}
						id='name-input' />
				</label>

				<label>
					<h4>Special Instructions</h4>
					<input
						type='text'
						name='special'
						value={formValues.special}
						onChange={onChange}
						id='special-text' />
				</label>

				<button id='order-button' disabled={disableSubmit}>Submit</button>

				<div>
					<div>{formErrors.orderName}</div>
					<div>{formErrors.size}</div>
					<div>{formErrors.sauce}</div>
				</div>

			</form>
		</Container>
	);
};

export default PizzaForm;