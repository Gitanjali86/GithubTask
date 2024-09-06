describe('GitHub API - Invalid Token', () => {
    const baseUrl = 'https://api.github.com';
    const invalidToken = Cypress.env('INVALID_TOKEN');
    it('Invalid Token Provided', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/user`,
        headers: {
          Authorization: `Bearer ${invalidToken}`
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
  });
  