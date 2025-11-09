const argu = process.argv.slice(2);
const argument = argu[0];

if (!isNaN(argument)){
    console.log(`My number: ${argument}`);
}
else{
    console.log("Not a number");
}
