import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<rg-navigation-dropdown-desktop></rg-navigation-dropdown-desktop>');
    const element = await page.find('rg-navigation-dropdown-desktop');
    expect(element).toHaveClass('hydrated');
  });
});
