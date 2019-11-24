import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(`<rg-category-cards-item></rg-category-cards-item>`);

    const categoryCardsItem = await page.find('rg-category-cards-item');

    expect(categoryCardsItem).toHaveClass('hydrated');
  })
});
