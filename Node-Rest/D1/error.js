const pr3 = new Promise((resolve, reject) => {
  throw new Error("Rejected by throwing an Error!");
});

pr3
  .then((value) => console.log("Resolved with: ", value))
  .catch((err) => console.log("catch() -> ", err));

// Bloque la suite s'il y a une erreur.

const pr4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Ironhack"), 2000);
});

pr4
  .then(() => {
    console.log("1. then()");
  })
  .then(() => {
    console.log("2. then()");
    throw new Error("Something went wrong"); // <= Throw an Error
  })
  .then(() => {
    // <= Le bloque est ignoré
    console.log("3. then()");
  })
  .catch((err) => console.log("catch() -> ", err));
