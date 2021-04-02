let a, b, E, result;

function secondDerivative(x) {

    return 2 + 20 * Math.sin(x);
}

function firstDerivative(x) {

    return 2 * x - 20 * Math.cos(x);
}

function myFunction(x) {

    return x * x - 20 * Math.sin(x);
}


function count(a, b, e) {
    console.log(a, b, e)

    while (Math.abs(b - a) > e) {
        a = b - (b - a) * f(b) /
            (f(b) - f(a));
        b = a - (a - b) * f(a) /
            (f(a) - f(b));
    }
    return b;
}

function countResult(a, b, E) {

    if(myFunction(b) * secondDerivative(b) > 0) {
        var z = a;
        a = b;
        b = z;
    }

    return count(a,b,E);
}

function clear() {
    document.getElementById('a').value = "";
    document.getElementById('b').value = "";
    document.getElementById('E').value = "o";
}

function mainF() {
    a = +document.getElementById('a').value;
    b = +document.getElementById('b').value;
    E = document.getElementById('E').value;

    if(a == false || a >= b || E == "o"){

        alert("Будь ласка, перевірте ввід даних");
        clear();
    }else {
        E = +E;
        (a*b < 0) && ( (alert("А і В повинні бути однакового знаку")) (clear())) || (result = countResult(a,b,E))

        let html='<a>';
        html +=result;
        document.getElementById('result').innerHTML=html+'</a>';
    }

}
