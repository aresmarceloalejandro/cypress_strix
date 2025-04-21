class home_page {
    elements = {
      logOut: () => cy.get("a[class='logout-link']"),
    };
  
    userLogout(){
        this.elements.logOut().should('be.visible');
        this.elements.logOut().click()
      }

  }
  
  export const homePage = new home_page();
  