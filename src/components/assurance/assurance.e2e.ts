import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(`<rg-assurance anniversary-date="2004-01-27"></rg-assurance>`);

    const assuranceElement = await page.find('rg-assurance');

    expect(assuranceElement).toHaveClass('hydrated');
  })
});
