export function toTitleCase(word) {
  return word.charAt(0).toUpperCase() + word.substr(1);
}

export function getEnglish(arr) {
  let tempArr = arr.filter((item) => {
    return item.language.name === "en";
  });
  return tempArr[0];
}
