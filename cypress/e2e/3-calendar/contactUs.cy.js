describe("Login", () => {
    it("Should visit the page and have a button login", () => {
        cy.visit('https://calendar-6ecfb.web.app');
        cy.get('button').contains('Contact us').click();
        cy.get('#name').type('Test');
        cy.get('#email').type('test@test.com')
        cy.get('#message').type('I like your app')
        cy.get('.button').contains('Send Message').click();
    });
});
