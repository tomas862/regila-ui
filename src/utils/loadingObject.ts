import {LoadingObjectInterface} from "../interfaces/LoadingObjectInterface";

export function isObjectLoaded(object: LoadingObjectInterface) {
  return object.isLoaded === undefined || object.isLoaded
}
