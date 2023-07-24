// Save everything

function saveProjectSTodoLS(keyName, array) {
  const stringify = JSON.stringify(array);

  localStorage.setItem(keyName, stringify);
}

function lookForDataInLS(keyName) {
  // We need to look for the data in the local storage
  if (localStorage.getItem(keyName) === null) {
    return [];
  }
  const getItem = localStorage.getItem(keyName);
  console.log(getItem);

  const data = JSON.parse(getItem);
  console.log(data);

  return data;
}

export { saveProjectSTodoLS, lookForDataInLS };
