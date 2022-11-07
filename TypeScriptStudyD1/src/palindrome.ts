function palindrominator(str: string | number) {
    
    let input: string = str + "";
    let reversed: string = "";


    for(let c of input) {
        reversed = c + reversed;
    }

    return (reversed == input);
}

console.log(palindrominator(1234321));
console.log(palindrominator("racer"));
console.log(palindrominator("racecar"));

