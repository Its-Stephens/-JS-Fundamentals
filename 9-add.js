const argu = process.argv.slice(2);
const argument1 = argu[0];
const argument2 = argu[1];

const adder = function(a, b){
    return a + b;
}
const result = adder(Number(argument1), Number(argument2));
console.log(result);
