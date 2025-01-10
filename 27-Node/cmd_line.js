const args = process.argv.slice(2);

console.log('Command Line Arguments', args);
a=parseInt(args[0])
b=parseInt(args[1])

s=a+b;
console.log(s)