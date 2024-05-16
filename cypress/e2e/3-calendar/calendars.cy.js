describe("Visit Calendars", () => {
    before(() => {
        cy.visit('https://calendar-6ecfb.web.app');
    });

    it("Should login and go to calendars", () => {
        cy.get('button').contains('Login').click();

        cy.get('[type="email"][placeholder="Enter your email"]').type('michel@test.com');
        cy.get('[type="password"]').type('999999');
        cy.get('button').contains('Log in').click();

        cy.get('button').contains('Calendars').click();

        cy.url().should('include', 'collection');




    });
});
