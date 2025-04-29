/// <reference types="cypress" />

//import homePage from "../../pages/homePage"

describe('First test suite',()=>{  
  it('Complete Automation Practice Form page',() => {


    Cypress.on('uncaught:exception', (err, runnable) => {
      // ignore error from application
      return false;
    });

    const random = '1' + Math.random().toString().substr(2, 8)
    var firstNameValue = 'Johnny'+ random
    var lastNameValue = 'Doe'
    var emailValue = firstNameValue +"."+ lastNameValue +"@demoqa.com"
    let phoneNumberValue = random
    var yearValue = '1990'
    var monthValue = 'June'
    var subjectsValue = 'Maths'
    var pictureValue = 'test-image.png'
    var currentAddressValue = 'Street NumberOne number '+ random +', Delhi'
    var stateValue = 'NCR'
    var cityValue = 'Delhi'

      //navigate on the home page
      cy.visit('/')
 
      //select Forms from menu
      //homePage.clickOnFormLink();
      cy.get('.card-body').contains('Forms').click()
     
      //click on the Practice Form    
      cy.get('.text').contains('Practice Form').click()
 
      //Verify if the Practice Form is display
       cy.get('.text-center').invoke('prop','textContent').should('contain','Practice Form').then(property => {expect(property).to.equal('Practice Form')})

      //complete Student Registration Form
      // type firstNameValue and verify that the value for the First Name has been updated
      cy.get('#firstName').as('firstNameAlias')
      cy.get('@firstNameAlias').should('be.visible').clear().type(firstNameValue,{delay:0}).should('value',firstNameValue);

      // type lastNameValue and verify that the value for last Name has been updated
      cy.get('#lastName').as('lastNameAlias')
      cy.get('@lastNameAlias').should('be.visible').clear().type(lastNameValue,{delay:0}).should('value',lastNameValue);

      // type emailValue and verify that the value for email has been updated
      cy.get('#userEmail').as('emailAlias')
      cy.get('@emailAlias').should('be.visible').clear().type(emailValue,{delay:0}).should('value',emailValue);

      // select Male and verify Male is selected
      cy.get('label[for="gender-radio-1"]').as('maleRadioButtonAlias')
      cy.get('@maleRadioButtonAlias').click(); // Male
      cy.get('#gender-radio-1').invoke('prop','checked') .then(state => {console.log(`Checkbox is ${state ? 'checked' : 'not checked'}`)});
    

      //type Mobile Number and verify that the value for phone has been updated
      cy.get('#userNumber').as('phoneAlias')
      cy.get('@phoneAlias').should('be.visible').clear().type(phoneNumberValue).should('value',phoneNumberValue);

      // choose Subject and verify that the value for the subject has been updated
      cy.get('#subjectsInput').as('subjectAlias')
      cy.get('@subjectAlias').type(subjectsValue+'{enter}');
      
 
      // select date of birth
      cy.get('#dateOfBirthInput').click();  
      cy.get('.react-datepicker__year-select').select(yearValue);
      cy.get('.react-datepicker__month-select').select(monthValue);
      cy.get('.react-datepicker__day--015').click();
 
      // select Hobby- sports and verify if Sports is checked
      cy.get('label[for="hobbies-checkbox-1"]').as('hobbiesSportsRadioButtonAlias')
      cy.get('@hobbiesSportsRadioButtonAlias').click(); 
      cy.get('#hobbies-checkbox-1').invoke('prop','checked').then(state => {console.log(`Checkbox is ${state ? 'checked' : 'not checked'}`)});
 
      // Upload file and verify if the image is upload
      cy.get('#uploadPicture').attachFile(pictureValue).should('value','C:\\fakepath\\test-image.png'); 
 
      // Type Adress and verify that the value for the address has been updated
      cy.get('#currentAddress').as('currentAddressAlias')
      cy.get('@currentAddressAlias').should('be.visible').clear().type(currentAddressValue).should('value',currentAddressValue);

      // select State 
      cy.get('#state').as('stateAlias')
      cy.get('@stateAlias').type(stateValue+'{enter}');

      //select city
      cy.get('#city').as('cityAlias')
      cy.get('@cityAlias').type(cityValue+'{enter}');
 
      //send the Automation Practice Form
      cy.get('#submit').click();
 
      //verify the submitting form
      cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
      //check if the student's name is  displayed correctly
      cy.get('td').contains(firstNameValue +' '+lastNameValue).should('exist');
      //check if the student email is displayed correctly
      cy.get('td').contains(emailValue).should('exist');
      //check if the phone number is displayed correctly
      cy.get('td').contains(phoneNumberValue).should('exist');
      //check if the picture is displayed correctly
      cy.get('td').contains(pictureValue).should('exist');
      //check if the state and city are displayed correctly
      cy.get('td').contains(stateValue+' '+cityValue).should('exist');
 
      })
    })