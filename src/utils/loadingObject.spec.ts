import {GalleryImage} from "../interfaces/GalleryImage";
import {isObjectLoaded} from "./loadingObject";

describe('image', () => {
  it('should determine if image is loaded when property does not exist', function () {
    const image: GalleryImage = {
      title: 'smth',
      image: {
        alt: 'name',
        src: 'smth'
      }
    };

    expect(isObjectLoaded(image)).toBeTruthy()
  });

  it('should determine image is loaded when property is true', function () {
    const image: GalleryImage = {
      title: 'smth',
      image: {
        alt: 'name',
        src: 'smth'
      },
      isLoaded: true
    };

    expect(isObjectLoaded(image)).toBeTruthy()
  });

  it('should determine if image is not loaded', function () {
    const image: GalleryImage = {
      title: 'smth',
      image: {
        alt: 'name',
        src: 'smth'
      },
      isLoaded: false
    };

    expect(isObjectLoaded(image)).toBeFalsy()
  });
})
