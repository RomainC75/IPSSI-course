var ping = require('ping');

for(let i=50; i<60; i++){
    for (let j=0; j<254; j++){
        const host = `10.51.${i}.${j}`
        ping.sys.probe(host, function(isAlive){
            if(isAlive){
                console.log(host);
            }
        });        
    }
}

