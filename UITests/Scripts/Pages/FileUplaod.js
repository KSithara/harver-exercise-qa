class FileUplaod{
    
    //Elements
    GetMenu(){ return cy.get(':nth-child(18) > a')}
    GetChooseFileButton(){ return cy.get('#file-upload')}
}
export default FileUplaod;
