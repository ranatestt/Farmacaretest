describe('Adding and Removing Books from Cart', () => {
  it('should be able to add and remove books from the cart', () => {
    cy.visit('https://opentrolley.co.id/Home.aspx');
    cy.contains('Romantic Comedy').click();
    cy.contains('Find out more').click();
    cy.wait(2000); 
    cy.contains('Login').click();
    cy.get('[data-testid=email]').type('ranasavira88@gmail.com');
    cy.get('[data-testid=password]').type('Rana1234');
    cy.contains('Login').click();
    cy.wait(2000);
    cy.contains('Add to Cart').click();
    cy.wait(2000);
    cy.contains('My Cart').click();
    cy.wait(2000);
    cy.get('[data-testid=product-checkbox]').check();
    cy.contains('Delete Marked Items').click();
    cy.wait(2000);
    cy.contains('Your cart is empty').should('be.visible');
  });
});
