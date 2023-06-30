before(() => {
  // Disable request logging in test runner
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }).then(() => {
    cy.log("Disabled request logging from /cypress/support/e2e.js");
  });
});
