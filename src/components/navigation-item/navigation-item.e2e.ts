import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<rg-navigation-item></rg-navigation-item>');
    const element = await page.find('rg-navigation-item');
    expect(element).toHaveClass('hydrated');
  });
});
