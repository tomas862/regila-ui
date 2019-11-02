import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<rg-icon></rg-icon>');
    const element = await page.find('rg-icon');
    expect(element).toHaveClass('hydrated');
  });
});
