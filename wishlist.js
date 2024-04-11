describe('Marking Books as Wishlist and Creating New Wishlist', () => {
  it('should be able to mark books as wishlist and create new wishlist', () => {
    cy.visit('https://opentrolley.co.id/Home.aspx');

    cy.contains('Romantic Comedy').click();
    cy.contains('Find out more').click();
    cy.wait(2000); 
    cy.contains('Add to my List').click();
    cy.contains('wishlist').click();
    cy.contains('Create new').click();
    cy.get('[data-testid=new-list-title]').type('Random');
    cy.contains('Add').click();
    cy.contains('OK').click();
  });
});

