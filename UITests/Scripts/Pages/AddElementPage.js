class AddElementPage{
    
    //Elements
    GetMenu(){ return cy.get('ul > :nth-child(2) > a')}
    GetButton(){ return cy.get('button')}
    GetNewButton(){ return cy.get('.added-manually')}
}
export default AddElementPage;
