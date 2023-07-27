const { should } = require("chai");

describe("Test website samehadaku", () => {
  it("Category anime", () => {
    cy.visit("https://samehada.care/");
    cy.get("#muvipro-posts-5 > :nth-child(1) > .col-md-2 > .module-linktitle > h4 > a").click();
    cy.url().should("include", "/category/one-piece/");
  });
  it("Watch anime ", () => {
    cy.visit("https://samehada.care/");
    cy.get("#post-2964 > .gmr-box-content > .item-article > .entry-header > .gmr-watch-movie > .button").click();
    cy.url().should("include", "/one-piece-episode-1070.php");
  });
  it("Search anime ", () => {
    cy.visit("https://samehada.care/one-piece-episode-1070.php");
    cy.get(".search-field").type("Black Clover");
    cy.get(".search-submit").click({ force: true });
    cy.url().should("include", "/?s=Black+Clover");
  });
});
