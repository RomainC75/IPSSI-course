fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => { 
    // throw Error('error')
    return response.json();
  })
  .then((data) => {
    console.log("Parsed response: ", data);
    // coller ici
    
  })
  .catch( (err) => console.log('==>',err));



// pour afficher le contenu

//   data.forEach((launchObj) => {
//     const patchImage = launchObj.links.patch.small;
//     const imgElement = document.createElement("img");
 
//     imgElement.setAttribute("src", patchImage);
//     imgElement.setAttribute("width", 200);
//     document.body.appendChild(imgElement);
//   });
