const delayTime = 1500;

export const delay = () =>
  new Promise((resolve) => setTimeout(resolve, delayTime));
