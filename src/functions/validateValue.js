export const validateValue = (value) => {
  let replace = value.replaceAll(" & ", "_and_").toLowerCase();
  return replace;
};
