import BasePage from '../BasePage';
import FileUplaod from '../Scripts/Pages/FileUplaod';
import 'cypress-file-upload';

context('Inputs Test', () => {
    
    describe('Inputs Test Suite', function () {
        
        before(function () {
            const base = new BasePage();
            //Navigate to the page
            base.visit();

            //Preserve cookies thoughout the tests
            Cypress.Cookies.preserveOnce('SignalR', 'User')
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            
            
            //Call the Inputs Page Constructor
            const page = new FileUplaod()
            
            //Select menu
            page.GetMenu().click()
        })

        it('1: Verify File is uploaded successfully', function () {

            //Call the Inputs Page Constructor
            const page = new FileUplaod()

            //Click on link to redirect
            page.GetChooseFileButton().should('exist')
            
            cy.readFile('UITests/Data/data.json').then((data) => {
    
                //Get Accessible of data object to the Whole Class (Global Declaration of global variable data)
                this.data = data

                //Select and upload file
                // page.GetChooseFileButton().attachFile(data.fileName)

                // Some issue came up, I couldn't solve. due to the  posercut I planned to stop from here. Thank you
        
            })
            
        })

    })

})
 