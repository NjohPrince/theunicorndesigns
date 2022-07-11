export const runSearch = (designs, search) => {
  let newlyFilteredArray = [];

  newlyFilteredArray = designs.filter((design) =>
    design.title.toLowerCase().includes(search.toLowerCase())
  );
  return newlyFilteredArray;
};

export const filterByCategory = (categories, label) => {
  let newlyFilteredArray = [];

  newlyFilteredArray = categories.filter((category) => category.label == label);

  return newlyFilteredArray[0]?.designscat;
};
