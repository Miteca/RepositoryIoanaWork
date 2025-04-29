class formsPage{
    elements = {
        practiceFormLink : () => cy.get('.text').contains('Practice Form')
    }

    clickOnPracticeFormLink(){
        this.elements.practiceFormLink().click()
    }
}


module.exports = new formsPage();