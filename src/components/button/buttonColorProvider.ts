import {ButtonColor} from "./buttonColor";

export function getColor(type: ButtonColor) {
  switch (type) {
    case ButtonColor.PRIMARY:
      return '#BF9E44';
    case ButtonColor.DARK_GRAY:
      return '#515251';
    default:
      return undefined;
  }
}
