import { useCallback, useEffect } from "react";
/**
 * @param { (...args: any[]) => any } fn - A callback function to use debounce effect on.
 * @param { number } delay - A number that indicates how much time it waits.
 * @param { any[] } deps - A dependency list.
 *
 */
export const useDebounce = (
  fn: (...args: any[]) => any,
  delay: number,
  deps: any[]
) => {
  /**
   * Store the memoized version of the callback.
   * It changes only when one of the dependencies has has changed.
   * See official documentation at: https://reactjs.org/docs/hooks-reference.html#usecallback
   * */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(fn, deps);
  /**
   * useEffect gets re-called whenever "callback" changes.
   * You can add "delay" to the second argument array,
   *    if you want to change "delay" dynamically.
   * */
  useEffect(() => {
    // Call the memoized version of callback after the delay
    const handler = setTimeout(() => {
      callback();
    }, delay);
    /**
     * Clear timeout when useEffect gets re-called,
     *    in other words, when "callback" changes.
     * */
    return () => {
      console.log("cleared timeout");
      clearTimeout(handler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);
};
