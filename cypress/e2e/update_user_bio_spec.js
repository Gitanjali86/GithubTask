describe('GitHub API - Update User Bio', () => {
    const baseUrl = 'https://api.github.com';
    const validToken = Cypress.env('VALID_TOKEN');
    const invalidToken = Cypress.env('INVALID_TOKEN');
    const forbiddenToken = Cypress.env('FORBIDDEN_TOKEN');
    it('Update User Bio With Valid Token', () => {
      const newBio = 'Your new bio content here.';
      cy.request({
        method: 'PATCH',
        url: `${baseUrl}/user`,
        headers: {
          Authorization: `Bearer ${validToken}`
        },
        body: {
          bio: newBio
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.bio).to.eq(newBio);
      });
    });
  });
  