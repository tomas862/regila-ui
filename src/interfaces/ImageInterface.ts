import { ImageSourceInterface } from "./ImageSourceInterface";

export interface ImageInterface {
  alt: string;
  /** the source of the original image */
  src: string;
  sources?: Array<ImageSourceInterface>
}
