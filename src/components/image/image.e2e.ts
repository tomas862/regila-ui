import {newE2EPage} from "@stencil/core/testing";
import {ImageInterface} from "../../interfaces/ImageInterface";

describe('image', () => {
  it('should render both image and webp source', async function () {
    const page = await newE2EPage();

    await page.setContent(`<rg-image></rg-image>`);

    await page.$eval('rg-image', (elm: any) => {

      const image: ImageInterface|any = {
        alt: 'This is image description',
        src: 'localhost',
        sources: [
          {
            type: 'image/webp',
            src: 'localhost/webp'
          }
        ]
      };

      elm.image = image;
    });

    await page.waitForChanges();

    const element = await page.find('rg-image');
    expect(element).toHaveClass('hydrated');

    const imgElement = await page.find('rg-image >>> picture > img');
    const sourceElement = await page.find('rg-image >>> picture > source');

    expect(sourceElement).toEqualAttribute('type', 'image/webp');
    expect(sourceElement).toEqualAttribute('srcset', 'localhost/webp');
    expect(imgElement).toEqualAttribute('src', 'localhost');
    expect(imgElement).toEqualAttribute('alt', 'This is image description');
  });


});
