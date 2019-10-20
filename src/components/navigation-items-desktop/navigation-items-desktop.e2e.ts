import { newE2EPage } from '@stencil/core/testing';

describe('rg-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(`<rg-navigation-items-desktop></rg-navigation-items-desktop>`);

    await page.$eval('rg-navigation-items-desktop', (elm: any) => {
      const dataSet = [
        {
          name: "smth",
          link: "localhost",
          children: [
            {
              name: "child",
              link: "localhost"
            }
          ],
        }
      ];
      elm.navigationFields = dataSet;
    });

    await page.waitForChanges();

    const element = await page.find('rg-navigation-items-desktop');
    expect(element).toHaveClass('hydrated');
  });

  it('displays dropdown menu on hover', async () => {
    const page = await newE2EPage();

    await page.setContent(`<rg-navigation-items-desktop></rg-navigation-items-desktop>`);

    await page.$eval('rg-navigation-items-desktop', (elm: any) => {
      const dataSet = [
        {
          name: "smth",
          link: "localhost",
          children: [
            {
              name: "child",
              link: "localhost"
            }
          ],
        }
      ];
      elm.navigationFields = dataSet;
    });

    await page.waitForChanges();

    const mainMenuElementsContainer = await page.find('rg-navigation-items-desktop >>> .main-fields');
    const elementToHover = await mainMenuElementsContainer.find('rg-navigation-item');

    await elementToHover.hover();

    const dropdownContainer = await page.find('rg-navigation-items-desktop >>> rg-navigation-dropdown-desktop');
    const innerDropDownElement = await page.find('rg-navigation-items-desktop >>> rg-navigation-dropdown-desktop >>> rg-navigation-item');

    expect(dropdownContainer).toHaveClass('dropdown-visible');
    expect(innerDropDownElement).toHaveClass('hydrated');
  })
});
