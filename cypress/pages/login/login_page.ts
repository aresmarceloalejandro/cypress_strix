class login_page {
  elements = {
    usernameInput: () => cy.get("[id='username']"),
    passwordInput: () => cy.get("[type='password']"),
    submitBtn: () => cy.get("button[type='submit']"),
    errorLogin: () => cy.get("p[class='login-form-error']"),
  };

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.submitBtn().click();
    }
  
  validateLoginError(){
    this.elements.errorLogin().should('be.visible');
  }
}

export const loginPage = new login_page();
