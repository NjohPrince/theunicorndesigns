// filtering from already fetched data
// not very efficient as the data stored on the CMS may change
// when there is a  user currently using the platform

// this can be used when the content on the site will not change --static

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
