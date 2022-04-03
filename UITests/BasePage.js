// / <reference types="Cypress" />

class BasePage{
    visit(){
        cy.visit("https://the-internet.herokuapp.com/");
    }

    // selectPageFromMenu(menu){
    //     return cy.xpath("//a[contains(text(),'"+menu+"')]");
    // }
}
export default BasePage;
