function nextDay02(y, m, d) {
    let today = new Date(y, m - 1, d);
    let nextDay = new Date(y, m - 1, today.getDate() + 1);
    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`);
}