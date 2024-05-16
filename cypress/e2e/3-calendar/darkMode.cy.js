describe("Register", () => {
    it("Should visit the page and have a button login", () => {
        cy.visit('https://calendar-6ecfb.web.app');
        cy.get('[aria-label="Change dark mode"]').click()
    });
});
