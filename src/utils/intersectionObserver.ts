/** An item which will be observed by intersection observer */
export interface ObservableItemInterface {
  index: number,
  ref: Element
}

/**
 * Defines if intersection observer can be used.
 */
export function isObserverApiAvailable(): boolean {
  return !!window.IntersectionObserver;
}

/**
 * Creates an observer which observers items when they instantly enter to the root viewport.
 * @param observableItems
 * @param callback
 */
export function createFitToViewportObservableStrategy(
  observableItems: ObservableItemInterface[],
  callback: IntersectionObserverCallback
): IntersectionObserver|null {
  if (!isObserverApiAvailable()) {
    return null;
  }

  const observerOptions = { rootMargin: "0px 0px 0px 0px" };
  const observer = new IntersectionObserver(callback, observerOptions);

  observableItems.forEach(({ ref }) => observer.observe(ref));

  return observer
}

/**
 * Gets unsubscribed intersecting html targets.
 * @param entries
 * @param observer
 */
export function getUnsubscribedIntersectingTargets(entries: IntersectionObserverEntry[], observer: IntersectionObserver): Element[] {
  const targets: Element[] = getIntersectingElementTargets(entries);

  if (!targets.length) {
    return;
  }

  unsubscribeObservables(targets, observer);

  return targets;
}

function getIntersectingElementTargets(entries: IntersectionObserverEntry[]) {
  return entries
    .filter(entry => entry.isIntersecting)
    .map(entry=> entry.target)
}

function unsubscribeObservables(targets: Element[], observer: IntersectionObserver): void {
  targets.forEach(target => observer.unobserve(target))
}
