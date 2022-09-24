export const concatArrays = (obj) => {
  const concatedArray = [];
  Object.values(obj).forEach((element) => {
    element.forEach((item) => {
      concatedArray.push(item);
    });
  });
  return concatedArray;
};
