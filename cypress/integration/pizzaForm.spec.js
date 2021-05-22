/// <reference types="Cypress" />

const goodPizzaOrder = {
	"orderName": "Joe Calderon",
	"size": "Large (14in)",
	"sauce": "Pizza Sauce",
	"special": "Square cut please!",
}

const orderPizzaLink = () => cy.get('a#order-pizza');
const pizzaForm = () => cy.get('form#pizza-form');
const pizzaSizeInput = () => cy.get('select[name=size]');
const pizzaSauceInput = () => cy.get('select[name=sauce]');
const pizzaOrderName = () => cy.get('input[name=orderName]');
const pizzaSpecial = () => cy.get('input[name=special]');
const pizzaTopPepperoni = () => cy.get('input[name=topPepperoni]');
const pizzaTopSausage = () => cy.get('input[name=topSausage]');
const pizzaTopExtraCheese = () => cy.get('input[name=topExtraCheese]');
const pizzaTopGreenPeppers = () => cy.get('input[name=topGreenPeppers]');
const pizzaTopMushrooms = () => cy.get('input[name=topMushrooms]');
const pizzaTopOlives = () => cy.get('input[name=topOlives]');
const pizzaTopOnions = () => cy.get('input[name=topOnions]');
const pizzaTopJalepeno = () => cy.get('input[name=topJalepeno]');
const pizzaSubmitButton = () => cy.get('button#order-button');

const fillOutForm = (order) => {
	pizzaSizeInput().select(order.size);
	pizzaSauceInput().select(order.sauce);
	pizzaOrderName().type(order.orderName);
	pizzaSpecial().type(order.special);
	pizzaTopPepperoni().check();
	pizzaTopGreenPeppers().check();
	pizzaTopOnions().check();
};

describe('Lambda Eats', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('has a working test runner', () => {
		expect(1 + 2).to.equal(3);
		expect(2 + 2).not.to.equal(5);
		expect({}).not.to.equal({});
		expect({}).to.eql({});
	});

	it('has a working order pizza link', () => {
		orderPizzaLink()
			.should('exist')
			.click();
		cy.url().should('include', '/pizza');
		pizzaForm().should('exist');
	});

	describe('Pizza Form', () => {
		beforeEach(() => {
			orderPizzaLink()
				.click();
		});

		it('has working form input elements', () => {
			pizzaSizeInput()
				.should('exist')
				.should('have.value', '')
				.select(goodPizzaOrder.size)
				.should('have.value', goodPizzaOrder.size);
			pizzaSauceInput()
				.should('exist')
				.should('have.value', '')
				.select(goodPizzaOrder.sauce)
				.should('have.value', goodPizzaOrder.sauce);

			pizzaOrderName()
				.should('exist')
				.should('have.value', '')
				.type(goodPizzaOrder.orderName)
				.should('have.value', goodPizzaOrder.orderName);
			pizzaSpecial()
				.should('exist')
				.should('have.value', '')
				.type(goodPizzaOrder.special)
				.should('have.value', goodPizzaOrder.special);

			pizzaTopPepperoni()
				.should('exist')
				.should('not.be.checked')
				.check()
				.should('be.checked');
			pizzaTopSausage()
				.should('exist')
				.should('not.be.checked')
				.check()
				.should('be.checked');
			pizzaTopExtraCheese()
				.should('exist')
				.should('not.be.checked')
				.check()
				.should('be.checked');
			pizzaTopGreenPeppers()
				.should('exist')
				.should('not.be.checked')
				.check()
				.should('be.checked');
			pizzaTopMushrooms()
				.should('exist')
				.should('not.be.checked')
				.check()
				.should('be.checked');
			pizzaTopOlives()
				.should('exist')
				.should('not.be.checked')
				.check()
				.should('be.checked');
			pizzaTopOnions()
				.should('exist')
				.should('not.be.checked')
				.check()
				.should('be.checked');
			pizzaTopJalepeno()
				.should('exist')
				.should('not.be.checked')
				.check()
				.should('be.checked');

			pizzaSubmitButton().should('exist');
		});

		it('can order a pizza with multiple toppings', () => {
			pizzaSubmitButton()
				.should('exist')
				.and('be.disabled');

			fillOutForm(goodPizzaOrder);

			pizzaSubmitButton()
				.should('not.be.disabled');
		});

		it('won\'t let you submit an invalid form', () => {
			pizzaSubmitButton()
				.should('be.disabled');

			fillOutForm({ ...goodPizzaOrder, orderName: 'ti' });

			pizzaSubmitButton()
				.should('be.disabled');
		});

		it('shows success page including the order that was submitted', () => {
			fillOutForm(goodPizzaOrder);
			pizzaSubmitButton()
				.click();
			cy.url().should('include', '/ordersuccess');
			cy.document().should('contain.text', 'orderName : Joe Calderon');
		});
	});
});