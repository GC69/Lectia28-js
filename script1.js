// creare array
const array = [3, 4, 6, 2, 8, 7, 3, 2, 6, 9, 5, 1, 2, 6, 5, 4, 2, 6, 2, 3, 5];

function faraDublicate() {
  // creare Set
  let setElement = new Set();

  // Parcurge fiecare element din array
  for (let element of array) {
    // adaugam elementele unice in elementul Set
    setElement.add(element);
  }

  // convertim  elementul Set im array
  let arrayFaraDuplicate = [...setElement];
  return arrayFaraDuplicate;
}
console.log(faraDublicate());