import page from "../page"

class LogoutPage extends page{
    get profileHeader() {return cy.get('.Header__CustomerName-sc-ojawvy-1')}

}

export default new LogoutPage()