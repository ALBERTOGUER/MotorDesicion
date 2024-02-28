
const calculateMonthsSince = (startDate) => {
    const currentDate = moment();
    const startDateMoment = moment(startDate);
    const months = currentDate.diff(startDateMoment, 'months');
    return months;
}

const calcMin = (tipoNomina, months, genero) => {

    if (genero === "masculino") {
        if (months <= 26) {
            switch (tipoNomina) {
                case "A":
                    return 100;
                case "B":
                    return 1000;
                case "C":
                    return 400;
                case "D":
                    return 400;
            }
        } else if (months === 27) {
            switch (tipoNomina) {
                case "A":
                    return 400;
                case "B":
                    return 600;
                case "C":
                    return 200;
                case "D":
                    return 300;
            }
        } else if (months === 28) {
            switch (tipoNomina) {
                case "A":
                    return 900;
                case "B":
                    return 1000;
                case "C":
                    return 200;
                case "D":
                    return 500;
            }
        } else if (months === 29) {
            switch (tipoNomina) {
                case "A":
                    return 100;
                case "B":
                    return 1000;
                case "C":
                    return 1000;
                case "D":
                    return 900;
            }
        } else { // Meses desde el primer empleo >= 30
            switch (tipoNomina) {
                case "A":
                    return 600;
                case "B":
                    return 1000;
                case "C":
                    return 600;
                case "D":
                    return 1000;
            }
        }
    } else {
        if (months < 25) {
            switch (tipoNomina) {
                case "A":
                    return 800;
                case "B":
                    return 800;
                case "C":
                    return 200;
                case "D":
                    return 500;
            }
        } else if (months === 25) {
            switch (tipoNomina) {
                case "A":
                    return 800;
                case "B":
                    return 700;
                case "C":
                    return 900;
                case "D":
                    return 1000;
            }
        } else if (months === 26) {
            switch (tipoNomina) {
                case "A":
                    return 800;
                case "B":
                    return 100;
                case "C":
                    return 700;
                case "D":
                    return 600;
            }
        } else if (months === 27) {
            switch (tipoNomina) {
                case "A":
                    return 600;
                case "B":
                    return 600;
                case "C":
                    return 800;
                case "D":
                    return 400;
            }
        } else { // Meses desde el primer empleo >= 28
            switch (tipoNomina) {
                case "A":
                    return 200;
                case "B":
                    return 700;
                case "C":
                    return 100;
                case "D":
                    return 700;
            }
        }
    }
}

const calcMax = (tipoNomina, months, genero) => {

    if (genero === "masculino") {
        if (months <= 26) {
            switch (tipoNomina) {
                case "A":
                    return 4900;
                case "B":
                    return 4700;
                case "C":
                    return 5000;
                case "D":
                    return 4400;
            }
        } else if (months === 27) {
            switch (tipoNomina) {
                case "A":
                    return 4700;
                case "B":
                    return 4400;
                case "C":
                    return 4700;
                case "D":
                    return 4700;
            }
        } else if (months === 28) {
            switch (tipoNomina) {
                case "A":
                    return 4600;
                case "B":
                    return 5000;
                case "C":
                    return 5000;
                case "D":
                    return 4300;
            }
        } else if (months === 29) {
            switch (tipoNomina) {
                case "A":
                    return 4600;
                case "B":
                    return 4400;
                case "C":
                    return 4200;
                case "D":
                    return 4900;
            }
        } else { // Meses desde el primer empleo >= 30
            switch (tipoNomina) {
                case "A":
                    return 4500;
                case "B":
                    return 4900;
                case "C":
                    return 4600;
                case "D":
                    return 4300;
            }
        }
    } else {
        if (months < 25) {
            switch (tipoNomina) {
                case "A":
                    return 4000;
                case "B":
                    return 4700;
                case "C":
                    return 4600;
                case "D":
                    return 5000;
            }
        } else if (months === 25) {
            switch (tipoNomina) {
                case "A":
                    return 4200;
                case "B":
                    return 4200;
                case "C":
                    return 4900;
                case "D":
                    return 4900;
            }
        } else if (months === 26) {
            switch (tipoNomina) {
                case "A":
                    return 4100;
                case "B":
                    return 4500;
                case "C":
                    return 4600;
                case "D":
                    return 4700;
            }
        } else if (months === 27) {
            switch (tipoNomina) {
                case "A":
                    return 4200;
                case "B":
                    return 4300;
                case "C":
                    return 4700;
                case "D":
                    return 5000;
            }
        } else { // Meses desde el primer empleo >= 28
            switch (tipoNomina) {
                case "A":
                    return 4500;
                case "B":
                    return 4400;
                case "C":
                    return 4000;
                case "D":
                    return 4300;
            }
        }
    }
}

const calculateCreditLineTime = (minAmount, maxAmount) => {
    const p1 = minAmount + Math.sqrt(maxAmount - minAmount);
    const p2 = minAmount + 0.0175 * (maxAmount - minAmount);
    return Math.max(p1, p2);
};

const calculoMotor = ( tipoNomina, fechaPrimerEmpleo, genero ) => {
    const months = calculateMonthsSince(fechaPrimerEmpleo)
    const montoMinimo = calcMin(tipoNomina, months, genero)
    const montoMaximo = calcMax(tipoNomina, months, genero)
    const recomendacionLinea = calculateCreditLineTime( montoMinimo, montoMaximo)


    return {
        montoMinimo,
        montoMaximo,
        recomendacionLinea  
    }
}

console.log(calculoMotor('A', new Date("2022-06-12"), 'fememnino'))
console.log(calculoMotor('B', new Date("1993-12-30"), 'fememnino'))
console.log(calculoMotor('C', new Date("2020-09-19"), 'masculino'))
console.log(calculoMotor('D', new Date("2019-01-15"), 'masculino'))