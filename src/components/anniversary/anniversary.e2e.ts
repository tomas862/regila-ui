import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<rg-anniversary></rg-anniversary>');

    await page.$eval('rg-anniversary', (elm: any) => {

      elm.date = '2004-02-20';
      elm.name = 'happy anniversary';
    });

    await page.waitForChanges();

    const element = await page.find('rg-anniversary');
    expect(element).toHaveClass('hydrated');

    const textElement = await page.find('rg-anniversary >>> .anniversary-title');
    expect(textElement).toEqualHtml('<span class="anniversary-title"><div>happy</div><div>anniversary</div></span>');

  });
});
