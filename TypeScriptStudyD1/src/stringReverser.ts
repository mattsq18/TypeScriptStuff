function stringReverser(str: string) {
    let reversedStr: string = "";

    for (let c of str) {
        reversedStr = c + reversedStr;
    }

    return reversedStr;
}

console.log(stringReverser("example"));