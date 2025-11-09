const argu = process.argv.slice(2);
const argument = argu[0];
if (!argument){
    console.log("No arguments");
}
else{
    console.log(`${argument}`);
}
