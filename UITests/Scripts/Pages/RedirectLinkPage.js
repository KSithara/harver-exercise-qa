class RedirectLinkPage{
    
    //Elements
    GetMenu(){ return cy.get(':nth-child(36) > a')}
    ElementToClick(){ return cy.get('#redirect')}

    InputText(text){
        this.GetInputBox().clear().type(text)
    }
}
export default RedirectLinkPage;
