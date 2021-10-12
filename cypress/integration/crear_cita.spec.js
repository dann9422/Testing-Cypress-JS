///<reference types="cypress"/>

describe('Llena los campos de una nueva cita ',()=>{
    it('creando la cita',()=>{
        cy.visit("/index.html");

        cy.get('[data-cy="mascota-input"]')
        .type('marly')

        cy.get('[data-cy="propietario-input"]')
        .type('Daniel')

        cy.get('[data-cy="telefono-input"]')
        .type('8888888')

        cy.get('[data-cy="fecha-input"]')
        .type('2021-10-08')

        cy.get('[data-cy="hora-input"]')
        .type('20:30')

        cy.get('[data-cy="sintomas-input"]')
        .type('ingresa con dolor en la espalda y problemas en la oreja')

        cy.get('[data-cy="submit-cita"]')
        .click()

        cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal','Administra tus Citas ');
      
      cy.get('[data-cy="alerta"]')
      .invoke('text')
      .should('equal','Se agregó correctamente')
  
  
      cy.get('[data-cy="alerta"]')
      .should('have.class','alert-success')


    })




})