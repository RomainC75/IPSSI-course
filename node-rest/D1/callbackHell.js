const directions = [
    "Starting point: Paris",
    "allez tout droit",
    "veuillez tourner à droite",
    "avancez de 150 mètres"
  ];
  
  
  function getDirections(step, callback, errorCallback) {
    setTimeout(() => {
      console.log( directions[step] );
      
      if (!directions[step]) errorCallback("Instructions not found.");
      else callback();
    }, 2000); 
  }
  

getDirections(0, () => {
    getDirections(1, () => {
      getDirections(2, () => {
        getDirections(3, () => {          
          console.log("You arrived at your destination!");
          // getDirections(4, () => {}, (err) => console.log(err) ) ;
        }, (err) => console.log(err));
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
  