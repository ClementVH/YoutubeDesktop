import { YoutubeDesktopPage } from './app.po';

describe('youtube-desktop App', () => {
  let page: YoutubeDesktopPage;

  beforeEach(() => {
    page = new YoutubeDesktopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
