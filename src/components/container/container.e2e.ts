import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<rg-container></rg-container>');
    const element = await page.find('rg-container');
    expect(element).toHaveClass('hydrated');
  });
});
