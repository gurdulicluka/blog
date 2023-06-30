Cypress.Commands.add("hideCookiePopup", () => {
  cy.contains("button", "Reject").click();
});
