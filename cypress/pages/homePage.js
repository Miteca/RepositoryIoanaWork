class homePage{
    elements = {
        formLink : () => cy.get('.card-body').contains('Forms')
    }

    clickOnFormLink(){
        this.elements.formLink().click()
    }
}


module.exports = new homePage();