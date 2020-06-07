describe("Testing that links exist in the navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("navbar appears on all pages with all links", () => {
    cy.get('[href="/"]').click();
    cy.get('[href="/posts"]').click();
    cy.get('[href="/about"]').click();
  });
});
