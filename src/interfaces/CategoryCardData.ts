import {ImageInterface} from "./ImageInterface";

export interface CategoryCardData {
  name: string;
  img: ImageInterface;
  link: string;
  /** Smaller block is rendered */
  isCompact?: boolean;
}
