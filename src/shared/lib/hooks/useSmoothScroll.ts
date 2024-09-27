import { useCallback, RefObject } from "react";

interface ScrollOptions extends ScrollIntoViewOptions {
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

interface UseSmoothScroll {
  (
    isWindow?: boolean,
    options?: ScrollOptions,
    defaultSelector?: string | null,
    targetRef?: RefObject<HTMLElement> | null,
    offset?: number // Добавляем параметр отступа
  ): (event: React.MouseEvent<HTMLElement>) => void;
}

/**
 * Хук для плавного скролла с возможностью добавления отступа
 * @param isWindow - параметр, указывающий, что мы скролим, window или targetElement
 * @param options - настройки скролла
 * @param defaultSelector - селектор элемента, до которого нужно выполнить скролл
 * @param targetRef - Ref элемента, до которого нужно выполнить скролл
 * @param offset - отступ от целевого элемента при скролле
 * @return {Function}
 */
export const useSmoothScroll: UseSmoothScroll = (
  isWindow = false,
  options = {},
  defaultSelector = null,
  targetRef = null,
  offset = 0
) => {
  return useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();

      const targetElement =
        targetRef?.current ||
        (defaultSelector &&
          document.querySelector<HTMLElement>(defaultSelector)) ||
        (event.currentTarget.getAttribute("href") &&
          document.querySelector<HTMLElement>(
            event.currentTarget.getAttribute("href")!
          ));

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - offset;

        if (!isWindow) {
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
            ...options,
          });
        } else {
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
            ...options,
          });
        }
      }
    },
    [isWindow, options, defaultSelector, targetRef, offset]
  );
};
