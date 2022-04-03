import BasePage from '../BasePage';
import AddElementPage from '../Scripts/Pages/AddElementPage';

context('Add Element Test', () => {
    
    describe('Add Element Test Suite', function () {
        
        before(function () {
            const base = new BasePage();
            //Navigate to the page
            base.visit();
            // base.selectPageFromMenu("Add/Remove Elements");

            //Preserve cookies thoughout the tests
            Cypress.Cookies.preserveOnce('SignalR', 'User')
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            
            
            //Call the Add/delete element Page Constructor
            const page = new AddElementPage()
            
            //Select menu
            page.GetMenu().click()
        })

        it('1: Verify the button click generates new element', function () {

            //Call the Add/delete element Page Constructor
            const page = new AddElementPage()

            //Click New Button
            page.GetButton().click({force: true})

            //Verify the new button is available
            page.GetNewButton().should("exist");
        })

        it('2: Verify the click on New Button deletes itself', function () {

            //Call the Add/delete element Page Constructor
            const page = new AddElementPage()

            //Click New Button
            page.GetNewButton().click({force: true})

            //Verify the new button is available
            page.GetNewButton().should("not.exist");
        })

    })

})
 