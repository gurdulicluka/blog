it("should fill out the form, submit, and redirect to a page with reCAPTCHA", () => {
  const email = Cypress.env("email"); // Retrieve the email environment variable
  const formAction = `https://formsubmit.co/${email}`; // Form action URL

  cy.visit("/contact");
  cy.get("#name").type("John Doe", { scrollBehavior: "center" });
  cy.get("#email").type("john.doe@example.com", { scrollBehavior: "center" });
  cy.get("#message").type("Hello World", { scrollBehavior: "center" });

  cy.get("form").invoke("attr", "action", formAction);

  cy.get("form").within(() => {
    cy.get('button[type="submit"]').click();
  });

  cy.origin(
    "https://formsubmit.co",
    { args: { formAction } },
    ({ formAction }) => {
      cy.url().should("eq", formAction);
      cy.contains("Almost There").should("be.visible");
      cy.contains(
        "Please help us fight spam by clicking the box below:"
      ).should("be.visible");
    }
  );
});
