describe("Login", () => {
    it("Should visit the page and have a button login and edit a calendar", () => {
        cy.visit('https://calendar-6ecfb.web.app');

        cy.get('button').contains('Login').click();

        cy.get('[type="email"][placeholder="Enter your email"]').type('michel@test.com');
        cy.get('[type="password"]').type('999999');
        cy.get('button').contains('Log in').click();

        cy.get('[href="/editorPageV2"] > .text-whiteReplacement-light').click();

        cy.url().should('include', '/editorPageV2');

        cy.get('button').contains('Submit').click();

        cy.get('.form-control').type('cars');

        cy.get('button').contains('Submit').click();


    });
});
