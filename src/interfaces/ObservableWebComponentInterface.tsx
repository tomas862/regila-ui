import {ObservableItemInterface} from "../utils/intersectionObserver";

export interface ObservableWebComponentInterface {
  getObservables(): ObservableItemInterface[];
  setObservable(item: ObservableItemInterface): void;
}
