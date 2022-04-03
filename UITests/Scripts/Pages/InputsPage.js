class InputsPage{
    
    //Elements
    GetMenu(){ return cy.get(':nth-child(27) > a')}
    GetInputBox(){ return cy.get('input')}
    GetNewButton(){ return cy.get('.added-manually')}

    InputText(text){
        this.GetInputBox().clear().type(text)
    }
}
export default InputsPage;
