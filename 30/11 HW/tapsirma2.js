const NNumbers = [10,20,30,40];
let sum = 0;

NNumbers.push(50,60,70);
NNumbers.forEach(san =>{
    sum += san;
});

console.log(sum);
