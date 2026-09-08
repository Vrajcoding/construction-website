// Motion tokens matching the Konstruktion editorial design language
export const MOTION_TOKENS = {
  duration: {
    fast: 0.2,       // 200ms - hover states, arrows, color shifts
    normal: 0.35,    // 350ms - dropdowns, tab toggles, modal slides
    slow: 0.75,      // 750ms - scroll reveal entrances, section headings
    imageZoom: 0.7,  // 700ms - image scale-on-hover
  },
  easing: {
    // Architectural editorial cubic-bezier easing curve
    editorial: [0.16, 1, 0.3, 1] as const,
    easeOut: [0, 0, 0.2, 1] as const,
    easeInOut: [0.4, 0, 0.2, 1] as const,
  },
  stagger: {
    small: 0.08,
    medium: 0.15,
    large: 0.25,
  },
  distance: {
    small: 15,
    medium: 35,
    large: 50,
  },
} as const;
