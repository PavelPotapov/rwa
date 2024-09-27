import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const isDev = process.env.NODE_ENV === "development";

interface AnimationOptions extends gsap.TweenVars {
  duration?: number;
  delay?: number;
}

interface ScrollTriggerOptions {
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: boolean;
}

export const animateOnScroll = (
  element: HTMLElement | null,
  animationOptions: AnimationOptions = {},
  scrollTriggerOptions: ScrollTriggerOptions = {}
) => {
  if (!element) return;

  const { duration = 1, delay = 0, ...animationProps } = animationOptions;

  const {
    start = "top 80%",
    end = "top 30%",
    scrub = true,
    markers = isDev,
  } = scrollTriggerOptions;

  gsap.fromTo(
    element,
    { ...animationProps },
    {
      ...animationProps,
      duration: duration,
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        scrub: scrub,
        markers: markers,
      },
      delay,
    }
  );
};

export const fadeInOnScroll = (
  element: HTMLElement | null,
  options: {
    start?: string;
    end?: string;
    duration?: number;
    markers?: boolean;
  } = {}
) => {
  if (!element) return;
  const {
    start = "top 80%",
    end = "top 30%",
    duration = 1,
    markers = false,
  } = options;
  gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true,
        markers: markers || isDev,
      },
    }
  );
};

export const slideInFromLeft = (
  element: HTMLElement | null,
  options: {
    start?: string;
    end?: string;
    duration?: number;
    markers?: boolean;
    delay?: number;
  } = {}
) => {
  if (!element) return;
  const {
    start = "top 80%",
    end = "top 30%",
    duration = 1,
    markers = false,
    delay = 0,
  } = options;
  gsap.fromTo(
    element,
    { x: -200, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true,
        markers: markers || isDev,
      },
      delay,
    }
  );
};

export const slideInFromRight = (
  element: HTMLElement | null,
  options: {
    start?: string;
    end?: string;
    duration?: number;
    markers?: boolean;
    delay?: number;
  } = {}
) => {
  if (!element) return;
  const {
    start = "top 80%",
    end = "top 30%",
    duration = 1,
    markers = false,
    delay = 0,
  } = options;
  gsap.fromTo(
    element,
    { x: 200, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true,
        markers: markers || isDev,
      },
      delay,
    }
  );
};

export const animateOnceOnScroll = (
  element: HTMLElement | null,
  animation: gsap.TweenVars,
  start: string = "top 80%",
  delay: number = 0
) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { ...animation.from },
    {
      ...animation.to,
      scrollTrigger: {
        trigger: element,
        start: start,
        once: true,
        markers: isDev,
      },
      delay,
    }
  );
};

// Функция для анимации с эффектом появления слева
export const fadeInFromLeft = (
  element: HTMLElement | null,
  delay: number = 0
) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0, x: -200 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        once: true,
        markers: isDev,
      },
      delay,
    }
  );
};

// Функция для анимации с эффектом появления справа
export const fadeInFromRight = (
  element: HTMLElement | null,
  delay: number = 0
) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0, x: 200 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        once: true,
        markers: isDev,
      },
      delay,
    }
  );
};
