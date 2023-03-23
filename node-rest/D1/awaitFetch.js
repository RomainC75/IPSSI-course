async function displayMissionPatches() {
    try {
      const response = fetch("https://api.spacexdata.com/v4/launches");
      // const jsonResponse = await response.json();
      // attention ! 
      // const jsonResponse = await response.json()[0]
    //   const jsonResponse = await response.json()[0]
      console.log("fetch promise : ", response)
   
      console.log("Parsed response: ", jsonResponse);
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