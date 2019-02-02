function sortNumbers(n1, n2, n3) {
    n1 = Number(n1);
    n2 = Number(n2);
    n3 = Number(n3);

    if (n1 > n2 && n1 > n3) {
        if (n2 > n3) {
            console.log(n1);
            console.log(n2);
            console.log(n3);
        } else {
            console.log(n1);
            console.log(n3);
            console.log(n2);
        }
    } else if (n2 > n1 && n2 > n3) {
        if (n1 > n3) {
            console.log(n2);
            console.log(n1);
            console.log(n3);
        } else {
            console.log(n2);
            console.log(n3);
            console.log(n1);
        }
    } else {
        if (n2 > n1) {
            console.log(n3);
            console.log(n2);
            console.log(n1);
        } else {
            console.log(n3);
            console.log(n1);
            console.log(n2);
        }
    }
}