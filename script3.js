// functie ce verifica disponibilitatea stocului
function checkStock(product) {
  return product.inStock > 0 ? "In stock" : "Out of stock";
}

// Array de produse
const products = [
  {
    name: "Numele 1",
    category: "Categoria 1",
    price: 299.99,
    originCountry: {
      name: "Rep.Moldova",
      code: "MD",
    },
    inStock: 6,
  },
  {
    name: "Numele 2",
    category: "Categoria 2",
    price: 639.99,
    originCountry: {
      name: "România",
      code: "RO",
    },
    inStock: 12,
  },
  {
    name: "Numele 3",
    category: "Categoria 4",
    price: 969.99,
    originCountry: {
      name: "Ukrain",
      code: "UKR",
    },
    inStock: 3,
  },
  {
    name: "Numele 4",
    category: "Categoria 3",
    price: 2369.99,
    originCountry: {
      name: "Moldova",
      code: "MD",
    },
    inStock: 0,
  },
  {
    name: "Numele 5",
    category: "Categoria 1",
    price: 599.99,
    originCountry: {
      name: "România",
      code: "RO",
    },
    inStock: 1,
  },
];

// Actualizarea metodei "checkStock" pentru a returna rezultatul
products.forEach(function (product) {
  product.availability = checkStock(product);
});

// Afisam lista de produse.
function showAllProducts() {
  products.forEach(function (product) {
    console.log(product);
  });
}

// Posibilitatea de a suplini stocul produselor.
function addNewProduct(product) {
  const index = products.findIndex((item) => item.name === product.name);
  if (index === -1) {
    products.push(product); // Adauga noul produs in lista
  }
  {
    products[index].inStock = products[index].inStock + product.inStock;
  }
}

// Posibilitatea de a lua produse din depozit.
function removeProduct(name) {
  const indexToRemove = products.findIndex(function (product) {
    return product.name === name;
  });

  if (indexToRemove !== -1) {
    if (products[indexToRemove].inStock > 1) {
      products[indexToRemove].inStock = products[indexToRemove].inStock - 1;

      return products[indexToRemove];
    } else {
      return products.splice(indexToRemove, 1)[0];
    }
  }
  return null;
}

// Posibilitatea de a filtra produsele după categorie.
function filterByCategory(categoryFilter) {
  return products.filter(function (product) {
    return product.category === categoryFilter;
  });
}

// Posibilitatea de a filtra produsele după țara de origine.
function filteredByCountry(countryFilter) {
  return products.filter(function (product) {
    return product.originCountry.name === countryFilter;
  });
}

// Să se găsească produsul cel mai scump.
function findExpensiveProduct() {
  let expensiveProduct = products[0];

  products.forEach(function (product) {
    if (product.price > expensiveProduct.price) {
      expensiveProduct = product;
    }
  });
  return expensiveProduct;
}

// Să se găsească produsul cel mai ieftin.
function findCheapestProduct() {
  let cheapestProduct = products[0];

  products.forEach(function (product) {
    if (product.price < cheapestProduct.price) {
      cheapestProduct = product;
    }
  });
  return cheapestProduct;
}

// Să se găsească produsele cu prețul între o limită indicată
function findRangeProduct(minValue, maxValue) {
  const foundProducts = [];

  products.forEach(function (product) {
    if (product.price > minValue && product.price < maxValue) {
      foundProducts.push(product);
    }
  });

  return foundProducts;
}

// showAllProducts();

// const p = filterByCategory("Categoria 2");
// console.log(p);

// addNewProduct({
//   name: "Numele 5",
//   category: "Categoria 1",
//   price: 599.99,
//   originCountry: {
//     name: "România",
//     code: "RO",
//   },
//   inStock: 11,
// });

// showAllProducts();

// console.log(filterByCategory("Categoria 2"));

console.log(filteredByCountry("România"));
