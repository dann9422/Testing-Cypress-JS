///<reference types="cypress"/>


describe('validacion de formucalrio',()=>{
it('submit al formualrio y mostrar el mensaje de error',()=>{
    cy.visit("/index.html");

    cy.get('[data-cy="formulario"]')
    .submit();

    cy.get('[data-cy="alerta"]')
    .invoke('text')
    .should('equal','Todos los campos son Obligatorios')


    cy.get('[data-cy="alerta"]')
    .should('have.class','alert-danger')
})


})