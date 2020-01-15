import { ImageInterface } from "../interfaces/ImageInterface";

export function isImageLoaded(image: ImageInterface) {
  return image.isLoaded === undefined || image.isLoaded
}
