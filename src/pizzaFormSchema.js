import * as yup from 'yup';
import { pizzaSauces, pizzaSizes, pizzaToppings } from './pizzaOptions';

const toppingSchema = {};
pizzaToppings.forEach(pt => {
	const propName = `top${pt.replace(/\s/g, '')}`
	toppingSchema[propName] = yup.boolean();
});

const schema = yup.object().shape({
	orderName: yup.string().trim()
		.required("A name for order is required")
		.min(3, "Provided name must be at least 3 characters long"),
	size: yup.string()
		.oneOf(pizzaSizes, "Please select a pizza size")
		.required("Please select a pizza size"),
	sauce: yup.string()
		.oneOf(pizzaSauces, "Please select a pizza sauce")
		.required("Please select a pizza sauce"),
	special: yup.string().trim(),
	...toppingSchema,
});

export default schema;