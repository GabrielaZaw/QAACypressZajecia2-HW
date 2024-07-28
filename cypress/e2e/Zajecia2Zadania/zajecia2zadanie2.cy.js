// Test na zalogowanie i wylogowanie - Zadanie 2
describe("Logowanie", () => {
    it("logowanie do LMS", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("testowyqa@qa.team");
        cy.get("#user_password").type("QA!automation-1");
        cy.get("[type=submit]").click();
        cy.get("#open-navigation-menu-mobile").click();
        cy.get(":nth-child(9) > .next-bve2vl").click();
    });
});
