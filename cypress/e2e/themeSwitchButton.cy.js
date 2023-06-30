describe("Theme Switch Button", () => {
  it("switches the theme when clicked", () => {
    cy.visit("/");
    cy.hideCookiePopup();
    cy.root()
      .invoke("attr", "data-theme")
      .as("theme")
      .then(($initialTheme) => {
        cy.get('button[x-data="themebtn"]:visible').click(); // Switch theme
        if ($initialTheme === "dark") {
          cy.get("@theme").should("eq", "light");
          cy.window().then((win) => {
            expect(win.localStorage.getItem("theme")).to.eq("light");
          });
        } else {
          cy.window().then((win) => {
            expect(win.localStorage.getItem("theme")).to.eq("dark");
          });
          cy.get("@theme").should("eq", "dark");
        }
      });
  });
});
