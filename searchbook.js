describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opentrolley.co.id/');
  });

  describe('Mengurutkan buku berdasarkan harga', () => { 
    it('Test Case 1: Menampilkan daftar buku yang diurutkan berdasarkan harga', () => {
      cy.visit('https://opentrolley.co.id/');
      cy.contains('Romantic Comedy').click(); 
      cy.contains('Find out more').click(); 
      cy.wait(2000);
      cy.get('[data-testid=sort-dropdown]').click();
      cy.get('[data-testid=sort-option-price-low-to-high]').click();
    });

    it('Test Case 2: Memilih buku dengan harga terendah', () => {
      cy.visit('https://opentrolley.co.id/');
      cy.contains('Romantic Comedy').click(); 
      cy.contains('Find out more').click(); 
      
      cy.wait(2000);
      cy.get('[data-testid=sort-dropdown]').click(); 
      cy.get('[data-testid=sort-option-price-low-to-high]').click(); 
      cy.get('[data-testid=book-price]').first().click(); 
    });
  });
});
