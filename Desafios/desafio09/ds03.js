let num = [5, 4, 6, 7, 8, 2]
num.push(15)
num.push(16)
num.push(18)
num.push(25)
num.push(33)
for(let pos in num){
    if(num[pos] > 10){
        console.log(num[pos])
    }
}

