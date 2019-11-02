import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation-contact-desktop', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<rg-navigation-contact-desktop></rg-navigation-contact-desktop>');
    const element = await page.find('rg-navigation-contact-desktop');
    expect(element).toHaveClass('hydrated');
  });
});
