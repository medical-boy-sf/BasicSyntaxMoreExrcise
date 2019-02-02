function distanceBetweenPoints(x1, y1, x2, y2) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    console.log(c);
}