function GCD (a, b) {
    while(b) {
        let temp = b;
        b = a % b;
        a = temp;
    } 
    console.log(a)
}
GCD(15, 5)