import {ImageInterface} from "../interfaces/ImageInterface";
import {isImageLoaded} from "./image";

describe('image', () => {
  it('should determine if image is loaded when property does not exist', function () {
    const image: ImageInterface = {
      alt: 'test',
      src: 'test',
    };

    expect(isImageLoaded(image)).toBeTruthy()
  });

  it('should determine image is loaded when property is true', function () {
    const image: ImageInterface = {
      alt: 'test',
      src: 'test',
      isLoaded: true,
    };

    expect(isImageLoaded(image)).toBeTruthy()
  });

  it('should determine if image is not loaded', function () {
    const image: ImageInterface = {
      alt: 'test',
      src: 'test',
      isLoaded: false,
    };

    expect(isImageLoaded(image)).toBeFalsy()
  });
})
