const directions = [
    "allez tout droit sur 100m",
    "tournez à gauche, puis montez les escaliers",
    "tournez à droite après la boulangerie",
    "vous êtes arrivés à destination"
  ];
  
  function obtainDirections(step) {
    return new Promise ( (resolve, reject) => {
      // resolve("true")
      // console.log('====')
      setTimeout(() => {
        console.log( directions[step] );
        if (!directions[step]) reject("Instructions not found.")
        else resolve("error");
      }, 2000); 
    })
  }
  
  async function getCoffee() {
    try {
      await obtainDirections(0);
      await obtainDirections(1);
      await obtainDirections(2);
      await obtainDirections(3);
    } catch (error) {
      console.log('==>erro :',error)
    }
    console.log("You arrived at your destination!");
  }
  
  getCoffee();
  
