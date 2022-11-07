function fibonacci(num: number) {
    let n1: number = 0, n2: number = 1;

    for(let i: number = 1; i <= num; i++) {
        console.log(n1);
        let next: number = n1+n2;
        n1 = n2;
        n2 = next;

    }

}

fibonacci(10);