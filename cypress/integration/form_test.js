//tests begin here

describe('Lambda Eats App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    //declaring variables for my stuff with their input names/id
    const nameInput = () => cy.get('input[id=name-input');
    const instructionsInput = () => cy.get('input[name=instructions]');
    const submitButton = () => cy.get("button[id='order-button']");
    const toppingsInput = () => cy.get('[type="checkbox"]');
    const sInput = () => cy.get('select').select('Small 8"').should('have.value', 'small')
    const mInput = () => cy.get('select').select('Medium 12"').should('have.value', 'medium')
    const lInput = () => cy.get('select').select('Large 16"').should('have.value', 'large')
    const xlInput = () => cy.get('select').select('Xtra Large 20"').should('have.value', 'xl')

    //sanity check
    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    it('the proper elements are showing', () => {
        //these inputs should exist
        nameInput().should('exist');
        instructionsInput().should('exist');
        submitButton().should('exist');
        toppingsInput().should('exist');
        sInput().should('exist');
        mInput().should('exist');
        lInput().should('exist');
        xlInput().should('exist');
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
            nameInput()
                .should('have.value', '')
                .type('Redd')
                .should('have.value', 'Redd');
            instructionsInput()
                .should('have.value', '')
                .type('cute in squares')
                .should('have.value', 'cut in squares');
            toppingsInput()
                .check({force:true})
                .should('be.checked');
        })

        //submit button should not be disabled after filling out fields & terms of service box is checked
        it('submit button should work after all fields are entered and checked', () => {
            nameInput().type('Redd');
            instructionsInput().type('add hot sauce please');
            toppingsInput().should('be.checked');
            submitButton().should('not.be.disabled');
        })
    })

})

