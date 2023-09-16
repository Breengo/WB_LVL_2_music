const timeTransform = (time) => {
  if (time < 10) return `0${time}`;
  return time;
};

export default timeTransform;
