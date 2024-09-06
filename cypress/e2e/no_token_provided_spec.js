describe('GitHub API - No Token Provided', () => {
    const baseUrl = 'https://api.github.com';
    const validToken = Cypress.env('VALID_TOKEN');
    const invalidToken = Cypress.env('INVALID_TOKEN');
    const forbiddenToken = Cypress.env('FORBIDDEN_TOKEN');

    it('No Token Provided', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/user`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
  });
  