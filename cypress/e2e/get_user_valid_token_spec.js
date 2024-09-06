describe('GitHub API - Get User With Valid Token', () => {
    const baseUrl = 'https://api.github.com';
    const validToken = Cypress.env('VALID_TOKEN');
    it('Get User With Valid Token', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/user`,
        headers: {
          Authorization: `Bearer ${validToken}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  