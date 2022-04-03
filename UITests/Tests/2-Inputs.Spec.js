import BasePage from '../BasePage';
import InputsPage from '../Scripts/Pages/InputsPage';

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
            const page = new InputsPage()
            
            //Select menu
            page.GetMenu().click()
        })

        it('1: Verify text can be input', function () {

            //Call the Inputs Page Constructor
            const page = new InputsPage()

            //Set text in input area
            var number = 444
            page.InputText(number)
        })

        it('2: Verify only numbers can be input', function () {

            //Call the Inputs Page Constructor
            const page = new InputsPage()

            //Set text in input area
            var text = "this text"
            page.InputText(text)

            //Assert that the strings are not accepted
            page.GetInputBox().should('not.have.text', text)
        })

    })

})
 