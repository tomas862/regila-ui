import {newE2EPage} from "@stencil/core/testing";
import { LinkDropdownInterface } from "../../interfaces/LinkDropdownInterface";

describe('link dropdown', () => {
  it('should render component', async function () {
    const page = await newE2EPage();

    await page.setContent(`<rg-link-dropdown></rg-link-dropdown>`);

    await page.$eval('rg-link-dropdown', (elm: any) => {

    const dp: LinkDropdownInterface = {
      buttonText: 'Random text',
      options: [
        {
          link: 'localhost',
          value: 'txt1',
        },
        {
          link: 'localhost2',
          value: 'txt2'
        }
      ]
    };

      elm.dropdown = dp;
    });

    await page.waitForChanges();

    const element = await page.find('rg-link-dropdown');
    expect(element).toHaveClass('hydrated');

    const listItems = await page.findAll('rg-link-dropdown >>> .mdc-menu a');
    expect(listItems).toHaveLength(2);
  });
});
