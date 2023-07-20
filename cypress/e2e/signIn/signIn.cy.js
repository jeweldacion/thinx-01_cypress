/// <reference types = "cypress" />

describe("Sign In", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Sign In new account", () => {
      cy.contains("Sign In").click({force:true})
      cy.get('button p').contains("Sign up").click()
      cy.get('[name="firstName"]').type("firstName")
      cy.get('[name="lastName"]').type("lastName")
      cy.get('[name="email"]').eq(2).type("email")
      cy.get('[placeholder="mm/dd/yyyy"]').click()

    //   let date = new Date()
    //   date.setDate(date.getDate()) 
    //   cy.log(date.getDate())//get current day

    //   let date2 = new Date()
    //   date2.setDate(date.getDate() + 5);
    //   cy.log(date2.getDate())//get current day + 5 days

    let date = new Date();
    date.setDate(date.getDate() + 1);

    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleString("default", {month: "long"});
    let futureDay = date.getDate()

        cy.log("Future year to select: " + futureYear)
        cy.log("Future month to select: " + futureMonth)
        cy.log("Future day to select: " + futureDay)


        function selectMonthAndYear() {
            cy.get('[placeholder="mm/dd/yyyy"]').then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {

                }
            })
        }







      //cy.get('[name="password"]').eq(1).type(" password")


    //   let date = new Date()
    //   date.setDate(date.getDate() + 2) 
    //   let futureDay = date.getDate()
    //   //let futureMonth = date.getMonth()
    //   let futureMonth = date.toLocaleString('default' , {month: 'short'})

    //   cy.get('[placeholder="mm/dd/yyyy"]').click().invoke('[value="1991-01-18"]').then( dateAttibute => {
    //     if(dateAttibute.includes(futureMonth)) {
            
    //     } else {
    //         cy.get('value').contains(futureDay).click()
    //     }
    //   });
    });
});