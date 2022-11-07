function primer(num: number) {
    if(num <=1) {
        return false;
    }
    
    for(let i: number = 2; i < num; i++) {
        if(num % i == 0) {
            return false;

        }


    }

    return true;
}

console.log(13);
console.log(44);