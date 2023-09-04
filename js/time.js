function convertToShamsi(date) {
    const miladiDate = new Date(date);

    const miladiYear = miladiDate.getFullYear();
    const miladiMonth = miladiDate.getMonth() + 1;
    const miladiDay = miladiDate.getDate();

    const miladiMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const miladiLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    let shamsiYear = miladiYear - 621;
    let shamsiMonth = miladiMonth;
    let shamsiDay = miladiDay;

    if (miladiMonth > 2 && !miladiLeapYear(miladiYear)) {
        shamsiDay -= 1;
    }

    if (shamsiDay <= 0) {
        shamsiMonth -= 1;
        if (shamsiMonth === 0) {
            shamsiYear -= 1;
            shamsiMonth = 12;
        }
        shamsiDay = miladiLeapYear(miladiYear - 1) ? 30 : 29;
    }

    let shamsiMonthDays = shamsiMonth === 12 && miladiLeapYear(miladiYear) ? 30 : 29;

    while (shamsiDay > shamsiMonthDays) {
        shamsiDay -= shamsiMonthDays;
        shamsiMonth += 1;
        if (shamsiMonth > 12) {
            shamsiYear += 1;
            shamsiMonth = 1;
            shamsiMonthDays = shamsiMonth === 12 && miladiLeapYear(miladiYear) ? 30 : 29;
        }
    }

    const shamsiDate = ${shamsiYear}/${shamsiMonth}/${shamsiDay};
    return shamsiDate;
}

const miladiDate = "2022-01-01"; // Replace with your desired Miladi date

const shamsiDate = convertToShamsi(miladiDate);
console.log(shamsiDate);