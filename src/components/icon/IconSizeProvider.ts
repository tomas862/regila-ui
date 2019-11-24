import {IconSize} from "./IconSize";

export function getSize(type: IconSize) {
  switch (type) {
    case IconSize.VERY_SMALL:
      return 18;
    case IconSize.SMALL:
      return 24;
    case IconSize.MEDIUM:
      return 40;
    default:
      return 24;
  }
}
