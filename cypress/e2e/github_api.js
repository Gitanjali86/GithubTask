// cypress/integration/github_api_spec.js
describe('GitHub API Tests', () => {
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
  
    it('Get User With Valid Token', () => {
      cy.log('Valid Token:', validToken);
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
