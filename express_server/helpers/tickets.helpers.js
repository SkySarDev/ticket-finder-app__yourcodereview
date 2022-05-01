export const calcSegmentsDuration = (segments) => {
  return segments
    .map(({ duration }) => duration)
    .reduce((sum, item) => sum + item, 0);
};
