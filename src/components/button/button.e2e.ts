import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<rg-button></rg-button>');
    const element = await page.find('<rg-button>');
    expect(element).toHaveClass('hydrated');
  });
});
