function nextDay(year, month, day) {
    year = Number(year);
    month = Number(month);
    day = Number(day);

    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ) {
        if(month === 12) {
            if(day === 31) {
                month += 1;
                day += 1;
                year += 1;
            } else {
                day += 1;
            }
        } else {
            if (day === 31) {
                month += 1;
                day += 1;
            } else {
                day += 1;
            }
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if(day === 30) {
            month += 1;
            day = 1;
        } else {
            day += 1;
        }
    } else {
        if (day === 29) {
            month += 1;
            day += 1;
        } else {
            day += 1;
        }
    }
    console.log(`${year}-${month}-${day}`);
}