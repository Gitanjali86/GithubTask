describe('GitHub API - Forbidden Access', () => {
    const baseUrl = 'https://api.github.com';
    const forbiddenToken = Cypress.env('FORBIDDEN_TOKEN');
    it('Forbidden Access', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/user`,
        headers: {
          Authorization: `Bearer ${forbiddenToken}`
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
  });
  