import { AngularFastestPage } from './app.po';

describe('angular-fastest App', () => {
  let page: AngularFastestPage;

  beforeEach(() => {
    page = new AngularFastestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
