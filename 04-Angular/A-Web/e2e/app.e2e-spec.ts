import { AWebPage } from './app.po';

describe('a-web App', () => {
  let page: AWebPage;

  beforeEach(() => {
    page = new AWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
