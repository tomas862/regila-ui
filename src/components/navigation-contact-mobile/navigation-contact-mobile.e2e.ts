import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<rg-navigation-contact-mobile></rg-navigation-contact-mobile>');
    const element = await page.find('rg-navigation-contact-mobile');
    expect(element).toHaveClass('hydrated');
  });
});
