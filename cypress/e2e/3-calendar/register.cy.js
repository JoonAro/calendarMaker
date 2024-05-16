describe("Register", () => {
    it("Should visit the page and register a new user", () => {
        cy.visit('https://calendar-6ecfb.web.app');

        cy.get('button').contains('Register').click();
        cy.get(':nth-child(3) >.w-full')
            .select('Avatar 3');
        cy.get('.flex > :nth-child(4)')
            .type('Hello World');
        cy.get('.flex > :nth-child(5)')
            .type('hello@test.com');
        cy.get('#password').type('999999');
        cy.get('button').contains('Sign up').click();


    });
});
