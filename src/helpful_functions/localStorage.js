// Save everything

function saveProjectSTodoLS(keyName, array) {
  const stringify = JSON.stringify(array);
  // allows us to grab projects
  localStorage.setItem(keyName, stringify);

  // now we need one for todo items

  // we need to setItem for todo items, how do we grab that?
}

function lookForDataInLS(keyName) {
  // We need to look for the data in the local storage
  if (localStorage.getItem(keyName) === null) {
    return [];
  }
  const getItem = localStorage.getItem(keyName);

  const data = JSON.parse(getItem);

  // remember parse returns an object not an array

  return data;
}

export { saveProjectSTodoLS, lookForDataInLS };
