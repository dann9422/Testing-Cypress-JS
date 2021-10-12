///<reference types="cypress"/>
describe("cargar pagina principal", () => {
  it("cargar la pagina princIPAL", () => {
    cy.visit("/index.html");
    // verificar el elemento y su texto
    cy.contains(
      '[data-cy="Titulo-proyecto"]',
      "Administrador de Pacientes de Veterinaria"
    );
    // verificar que exista
    cy.get('[data-cy="Titulo-proyecto"]').should("exist");
    // verificar que exista y tenga un texto
    cy.get('[data-cy="Titulo-proyecto"]')
      .invoke("text")
      .should("equal", "Administrador de Pacientes de Veterinaria");
      // verificar citas 
      cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal','No hay Citas, comienza creando una');

  });
});
