import map from "./map";
import reduce from "./reduce";
import getProductDetails from "./promise";
import calcString from "./calculator";
import expect from "./test";

console.log(
  "Map function",
  map([1, 2, 3, 4], (number) => number % 2)
);
console.log(
  "Reduce function",
  reduce(
    [
      ["a", 1],
      ["b", 2],
      ["c", 3]
    ],
    (object, [key, value]) => ({ ...object, [key]: value })
  )
);

//test case
expect(
  reduce([1, 2, 3, 4], (prev, accu) => prev + accu, -5),
  5
);

getProductDetails(123)
  .catch((error) => {
    console.log("Error, ", error);
  })
  .then((allData) => {
    console.log("data combined", allData);
  });

console.log("calculator", calcString("3-3+2+3"));
