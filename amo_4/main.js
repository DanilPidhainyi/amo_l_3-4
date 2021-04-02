// Варіант 18

// Метод хорд
// x^2 - 20sin(x) = 0
// 0.0 2.753
const round = (x, e) => {
    return Math.round(x / e) * e
}

let f = x => x * x - 20 * Math.sin(x);
// let df = x => 2 * x - 20 * Math.cos(x);
// let ddf = x => 2 + 20 * Math.sin(x);

// 2x - 20*cos(x)
// 2 + sin(x)
// алгоритм розрахунку
// розв'язання нелінійного рівняння методом дотичних



const find = () => {

    let a = parseFloat(document.form1.myX0.value),
        b = parseFloat(document.form1.myX1.value),
        e = parseFloat(document.form1.E.value);


    // if (f(a) * f(b) < 0) {
    //     return 'алгоритм не викон'
    // }

    const M_Hord = () => {
        // алгоритм методом хорд
        while (Math.abs(b - a) > e) {
            a = b - (b - a) * f(b) /
                (f(b) - f(a));
            b = a - (a - b) * f(a) /
                (f(a) - f(b));
        }
        return b;
    }

    const ddd = round(M_Hord(), e)
    if (isNaN(ddd)) {
        alert("помилка вводу даних")
    } else if ((a*b < 0)) {
        alert("А і В повинні бути однакового знаку")
    }else {
        alert(ddd)
    }

}



/*

function myFunction() {
    let formula = '',
        // String(document.form1.myFormula.value)
        //a = parseFloat(document.form1.myX0.value) | 0,
       // b = parseFloat(document.form1.myX1.value) | 1,
        a = 0,
        b = 3,
        //e = parseFloat(document.form1.myEpsilon.value) | 0.01,
        e = 0.001


    const f = x => x * x - 20 * Math.sin(x)

    function method_chord(x_prev, x_curr, f_e, f) {
        let x_next = 0,
            tmp;

        do{
            tmp = x_next;
            x_next = x_curr - f(x_curr) * (x_prev - x_curr) / (f(x_prev) - f(x_curr));
            x_prev = x_curr;
            x_curr = tmp;
        } while (Math.abs(x_next - x_curr) > f_e);

        return x_next;
    }
    let x = method_chord(a, b, e, f)

    //
    // function f(x) {
    //
    //     return Math.pow(x, 3) - 18 * x - 83; //вот это уравнение
    // }

    console.log(x.toFixed(4))
    //alert('Корень равен: ' + x.toFixed(4));
}

myFunction()*/
