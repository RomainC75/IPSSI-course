const directions = [
  "Starting point: Paris",
  "allez tout droit",
  "veuillez tourner à droite",
  "avancez de 150 mètres",
];

function getDirections(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(directions[step]);
      if (!directions[step]) reject("Instructions not found.");
      else resolve();
    }, 2000);
  });
}

getDirections(0)
  .then(() => {
    getDirections(1);
  })
  .then(() => {
    getDirections(2);
  })
  .then(() => {
    getDirections(3);
  })
  .catch(() => {
    console.log("You arrived at your destination");
  });

// getDirections(0).then(() => {
//   getDirections(1).then(() => {
//     getDirections(2).then(() => {
//       getDirections(3);
//     });
//   });
// });

