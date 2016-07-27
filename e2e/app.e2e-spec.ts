import { CleanSweepSitePage } from './app.po';

describe('clean-sweep-site App', function() {
  let page: CleanSweepSitePage;

  beforeEach(() => {
    page = new CleanSweepSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
