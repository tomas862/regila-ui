/**
 * Defines if intersection observer can be used.
 */
export function isObserverApiAvailable(): boolean {
  return !!window.IntersectionObserver;
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
