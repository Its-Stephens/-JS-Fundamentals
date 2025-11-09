const argu = process.argv.slice(2);
const argument = argu[0];
const write = "C is fun";
if (isNaN(argument)){
    console.log("Missing number of occurrences");
}
else{
    for (let i = 0; i < argument; i++){
        console.log(write);
    }
}
