import {getLoadableEntries} from "./loadableObject";
import {LoadableObjectInterface} from "../interfaces/LoadableObjectInterface";

describe('Loadable object', () => {
  it('should mark all entries to true', function () {
    const entries: LoadableObjectInterface[] = [
      {
        isLoaded: false,
      },
      {
        isLoaded: true,
      },
      {
        isLoaded: false,
      },
      {
        isLoaded: false,
      }
    ];

    expect(getLoadableEntries(entries, _ => { return true; })).toStrictEqual([
      {
        isLoaded: true,
      },
      {
        isLoaded: true,
      },
      {
        isLoaded: true,
      },
      {
        isLoaded: true,
      }
    ])
  });
});
