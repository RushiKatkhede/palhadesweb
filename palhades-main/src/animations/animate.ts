export const SlideUp = (delay: number, position: number) => {
  return {
    initial: {
      y: position,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};

export const SlideDown = (delay: number, position: number) => {
  return {
    initial: {
      y: -position,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};

export const SlideRight = (delay: number, position: number) => {
  return {
    initial: {
      x: -position,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};

export const SlideLeft = (delay: number, position: number) => {
  return {
    initial: {
      x: position,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};
