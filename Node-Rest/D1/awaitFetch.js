async function displayMissionPatches() {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/launches");
      const jsonResponse = await response.json();
      // attention ! 
    //   const jsonResponse = response.json()[0]
    //   const jsonResponse = await response.json()[0]

   
      console.log("Parsed response: ", typeof jsonResponse);
    } catch (err) {
      console.log("Something went wrong!", error);
    }
  }
   
  displayMissionPatches();


//   fetch("https://api.spacexdata.com/v4/launches")
//   .then((response) => { 
//     return response.json();
//   })
//   .then((jsonResponse) => {
//     console.log("Parsed response: ", jsonResponse);
//   })
//   .catch((err) => console.log("Something went wrong!", error));