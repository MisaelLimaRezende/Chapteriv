/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {

        cy.visit('https://form-agilizei.netlify.app/')

        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email()) 
        
        cy.get("input[value=n]").check()

        cy.get("input[type=checkbox]").check('Netflix')
        cy.get("input[type=checkbox]").check('Dormir')

        cy.get("select#countries").select('Dinamarca',{force: true})
        cy.get("select#years").select('2021', {force: true})
        cy.get("select#months").select('Janeiro',{force: true})
        cy.get("select#days").select('29', {force: true})

        cy.get("input[id=firstpassword]").type('Misael@123456')
        cy.get("input[id=secondpassword]").type('Misael@123456')

        cy.get('#submitbtn').click()

        cy.url().should('contain','listagem')


    });
});

