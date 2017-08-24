import { RestServicePage } from './app.po';

describe('rest-service App', () => {
  let page: RestServicePage;

  beforeEach(() => {
    page = new RestServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
