"use strict";

// functie ce verifica disponibilitatea stocului
function checkStock() {
  return this.inStock > 0 ? "In stock" : "Out of stock";
} // Array de produse


var products = [{
  name: "Numele 1",
  category: "Categoria 1",
  price: 299.99,
  originCountry: {
    name: "Rep.Moldova",
    code: "MD"
  },
  inStock: 6
}, {
  name: "Numele 2",
  category: "Categoria 2",
  price: 639.99,
  originCountry: {
    name: "România",
    code: "RO"
  },
  inStock: 12
}, {
  name: "Numele 3",
  category: "Categoria 4",
  price: 969.99,
  originCountry: {
    name: "Ukrain",
    code: "UKR"
  },
  inStock: 3
}, {
  name: "Numele 4",
  category: "Categoria 3",
  price: 2369.99,
  originCountry: {
    name: "Moldova",
    code: "MD"
  },
  inStock: 0
}, {
  name: "Numele 5",
  category: "Categoria 1",
  price: 599.99,
  originCountry: {
    name: "România",
    code: "RO"
  },
  inStock: 1
}]; // Actualizarea metodei "checkStock" pentru a returna rezultatul

products.forEach(function (product) {
  product.availability = checkStock.call(product);
});
console.log("1.Afisarea produselor"); // Afisam lista de produse.

function showAllProducts() {
  products.forEach(function (product) {
    console.log(product);
  });
}

showAllProducts();
console.log("2.Adaugarea produselor"); // Posibilitatea de a suplini stocul produselor.

function addNewProduct(name, category, price, originName, originCode, quantity) {
  var newProduct = {
    name: name,
    category: category,
    price: price,
    originCountry: {
      name: originName,
      code: originCode
    },
    inStock: quantity
  };
  newProduct.availability = checkStock.call(newProduct);
  products.push(newProduct); // Adauga noul produs in lista

  console.log("A fost adăugat cu succes produsul: " + newProduct.name);
}

addNewProduct("Numele 6", "Categoria 1", 799.99, "România", "RO", 10);
checkStock();
showAllProducts();
console.log("3.Stergerea produselor"); // Posibilitatea de a lua produse din depozit.

function removeProduct(name) {
  var indexToRemove = products.findIndex(function (product) {
    return product.name === name;
  });

  if (indexToRemove !== -1) {
    products.splice(indexToRemove, 1);
    console.log("Produsul cu numele: " + name + ", a fost sters");
  } else {
    console.log("Produsul cu numele: " + name + ", nu a fost gasit");
  }
}

removeProduct("Numele 3");
showAllProducts();
console.log("4.Filtrarea produselor dupa categorie"); // Posibilitatea de a filtra produsele după categorie.

function filterByCategory(categoryFilter) {
  var filteredProucts = products.filter(function (product) {
    return product.category === categoryFilter;
  });
  console.log("Produsele din categoria, " + categoryFilter + ", sunt: ", filteredProucts);
  return filteredProucts;
}

filterByCategory("Categoria 1");
console.log("5.Filtrarea produselor dupa tară"); // Posibilitatea de a filtra produsele după țara de origine.

function filteredByCountry(countryFilter) {
  var filteredByCountryProucts = products.filter(function (product) {
    return product.originCountry.name === countryFilter;
  });
  console.log("Produsele din tara de origine, " + countryFilter + ", sunt: ", filteredByCountryProucts);
  return filteredByCountryProucts;
}

filteredByCountry("România");
console.log("6.Găsește produsul cel mai scump"); // Să se găsească produsul cel mai scump.

function findExpensiveProduct() {
  var expensiveProduct = products[0];
  products.forEach(function (product) {
    if (product.price > expensiveProduct.price) {
      expensiveProduct = product;
    }
  });
  console.log("Cel mai scump produs este:", expensiveProduct);
}

findExpensiveProduct();
console.log("7.Găsește produsul cel mai ieftin"); // Să se găsească produsul cel mai ieftin.

function findCheapestProduct() {
  var cheapProduct = products[0];
  products.forEach(function (product) {
    if (product.price < cheapProduct.price) {
      cheapProduct = product;
    }
  });
  console.log("Cel mai ieftin produs este:", cheapProduct);
}

findCheapestProduct();
console.log("8.Găsește produsul între o limită indicată"); // Să se găsească produsele cu prețul între o limită indicată

function findRangeProduct(minValue, maxValue) {
  var foundProduct = [];
  products.forEach(function (product) {
    if (product.price > minValue && product.price < maxValue) {
      foundProduct.push(product);
    }
  });
  var message = foundProduct.length > 0 ? "Produsul cu pretul in intervalul (".concat(minValue, " - ").concat(maxValue, ") este: ") : "In intervalul (".concat(minValue, " - ").concat(maxValue, ") nu au fost gasite produse.");
  console.log(message);
  foundProduct.forEach(function (product) {
    console.log(product);
  });
}

findRangeProduct(600, 1000);