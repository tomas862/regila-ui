import {ImageInterface} from "./ImageInterface";
import {LoadableObjectInterface} from "./LoadableObjectInterface";

export interface CategoryCardData extends LoadableObjectInterface {
  name: string;
  img: ImageInterface;
  link: string;
  /** Smaller block is rendered */
  isCompact?: boolean;
}
