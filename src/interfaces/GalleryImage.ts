import {ImageInterface} from "./ImageInterface";
import {LoadableObjectInterface} from "./LoadableObjectInterface";

export interface GalleryImage extends LoadableObjectInterface {
  title: string;
  image: ImageInterface;
  /** Images in grid can have action button which leads for instance to e-shop version of the image */
  imageRelationLink?: string;
  /** An integer which defines how much squares to take in width */
  rows?: number;
  /** An integer which defines how much squares to kae in height */
  columns?: number;
}
