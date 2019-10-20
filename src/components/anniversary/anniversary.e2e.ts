import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<rg-anniversary></rg-anniversary>');
    const element = await page.find('rg-anniversary');
    expect(element).toHaveClass('hydrated');
  });
});
