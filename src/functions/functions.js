export const randomCategory = (array) => {
  const generateNumbers = Math.floor(Math.random() * 9) + 1;
  return validateValue(array[generateNumbers]);
};

export const validateValue = (value) => {
  let replace = value.replaceAll(" & ", "_and_").toLowerCase();
  return replace;
};
