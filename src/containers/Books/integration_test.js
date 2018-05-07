describe('#Books', () => {
  it('should get the searched books', () => {
    cy.visit('http://localhost:3000')

    cy.get('.input').type('clean code')

    cy.get('form').submit()

    cy.wait(200)
    cy.get('tbody').children().should('have.length', 10)
  })

  it('should disable the current page button when change the current page', () => {
    cy.get('.pagination button[data-tag=page_3]').click()

    cy.get('.pagination button[data-tag=page_3]').should('have.disabled', true)
  })

  it('should change the page when click at the book link', () => {
    cy.get('tbody a:first').click()

    cy.wait(200)

    cy.url().should('include', '/book')
  })
})
