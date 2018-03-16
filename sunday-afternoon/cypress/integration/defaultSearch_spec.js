// @noflow

describe("Search flights", () => {
  it("Can find flights between cities", () => {
    const results = ".flight-item-header";

    cy.visit("/").searchFlights("Madrid", "Amsterdam");
    cy.get(results).should("have.length", 5);
    cy.get(results).each(element => cy.wrap(element).contains("Madrid"));
  });
});
