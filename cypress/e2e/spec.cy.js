import SpecPage from './pages/specPage';

describe('template spec', () => {
  it('passes', () => {
    SpecPage.goPage('https://example.cypress.io/commands/querying');
    SpecPage.elements.queryBtn().should('contain', 'Button');
    SpecPage.clickBtn();
  })
})