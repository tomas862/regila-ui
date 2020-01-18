/**
 * Gets all entries with changed loaded state.
 * @param entries
 * @param callback
 */
import {LoadableObjectInterface} from "../interfaces/LoadableObjectInterface";

export function getLoadableEntries(
  entries: LoadableObjectInterface[],
  callback: (entry: LoadableObjectInterface, index: number) => boolean
) {
  return entries.map((entry, index) => ({
    ...entry,
    isLoaded : callback(entry, index),
  }))
}
