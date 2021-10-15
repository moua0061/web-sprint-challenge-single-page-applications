//tests begin here

describe('Lambda Eats App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    //declaring variables for my stuff with their input names/id
    const name = () => cy.get('input[id=name-input');
    const instructions = () => cy.get('input[name=instructions]');
    const submitButton = () => cy.get("button[id='order-button']");
    const toppings = () => cy.get('[type="checkbox"]');
    const sizeS = () => cy.get(['input[name=pepperoni]']);

    //sanity check
    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    it('the proper elements are showing', () => {
        //these inputs should exist
        name().should('exist');
        instructions().should('exist');
        submitButton().should('exist');
        toppings().should('exist');
        sizeS().should('exist');
    })

    describe('filling out the inputs and submitting', () => {
        
        //should navigate to the url
        it('can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })

        //submit button should be disabled
        it('submit button starts out disabled', () => {
            submitButton().should('be.disabled');
        })

        //ability to type in the inputs
        it('stuff can be typed in the inputs', () => {
            fnameInput()
                .should('have.value', '')
                .type('Redd')
                .should('have.value', 'Redd');
            lnameInput()
                .should('have.value', '')
                .type('Mama')
                .should('have.value', 'Mama');
            passwordInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password');
            emailInput()
                .should('have.value', '')
                .type('moua0061@yahoo.com')
                .should('have.value', 'moua0061@yahoo.com')
            termBox()
                .check({force:true})
                .should('be.checked');
        })

        //submit button should not be disabled after filling out fields & terms of service box is checked
        it('submit button should work after all fields are entered and checked', () => {
            fnameInput().type('Redd');
            lnameInput().type('Mama');
            emailInput().type('moua0061@yahoo.com');
            passwordInput().type('password');
            termBox().should('be.checked');
            submitButton().should('not.be.disabled');
        })
    })

})

