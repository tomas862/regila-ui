import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  const dataSet = `[{"name": "smth", "link": "localhost", "children": [{"name": "child", "link": "localhost"}]}]`;

  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(`<rg-navigation-items-desktop navigation-fields="${dataSet}"></rg-navigation-items-desktop>`);
    const element = await page.find('rg-navigation-items-desktop');
    expect(element).toHaveClass('hydrated');
  });
});
