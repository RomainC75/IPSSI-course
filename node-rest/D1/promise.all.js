const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("foo"), 1000);
  });
   
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(1337), 2000);
  });
   
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve( { name: "Bob" } ), 4000);
  });
   
   
  Promise.allSettled( [p1, p2, p3] )
    .then((values) => console.log("values", values)).catch(err=>console.log('==>',err))


