import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(`<rg-category-cards></rg-category-cards>`);

    const categoryCards = await page.find('rg-category-cards');

    expect(categoryCards).toHaveClass('hydrated');
  })
});
