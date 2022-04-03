import BasePage from '../BasePage';
import RedirectLinkPage from '../Scripts/Pages/RedirectLinkPage';

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
            const page = new RedirectLinkPage()
            
            //Select menu
            page.GetMenu().click()
        })

        it('1: Verify redirect to a new page', function () {

            //Call the Inputs Page Constructor
            const page = new RedirectLinkPage()

            //Click on link to redirect
            page.ElementToClick().should('exist').click()

            //Verify new url
            cy.url().should('be.equal', 'https://the-internet.herokuapp.com/status_codes')
        })

    })

})
 