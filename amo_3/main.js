// Варіант 18 e^cos(x) [0 5] 1.8

// рекурентне співвідношення Ейткена (1.8) )

// x = a + hi
// h = (b - a) / 10

//різні степені


// Налагодити програму шляхом інтерполяції функції (див.
//«Чисельний експеримент»).

//y = (x) => Math.sin(x)

// створення точок та значень функції
create_xy_arr = (a, b, n, fun) => {
    let h = (b - a) / n
    let x_arr = [...new Array(n)].map((x, i) => a + i * h)
    return {
        'x_arr': x_arr,
        'y_arr': x_arr.map(fun)
    }
}

// M
m = (x, x0, x1, y0, y1) => (x - x1) / (x0 - x1) * y0 + (x - x0) / (x1 - x0) * y1

// Cхема Ейткена
eitken = (x, x_arr, y_arr, tab) => {
    // x - точка значення в якій нада пощитать

    tab.push(y_arr)

    // вихід з рекурсії
    if (y_arr.length === 1) {
        return tab
    }

    // Додавання нового слою значень M в таблицю
    y_arr = y_arr.slice(0, -1)
        .map((item, i) => m(x, x_arr[i], x_arr[i + tab.length], item, y_arr[i + 1]))

    return eitken(x, x_arr, y_arr, tab)
}

// для гарно вигляду
const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

// керівник всіма процесами обрахунку
let Boss = {
    'get_tab': (fun, interval, dot, n = 5) => {
        const xy = create_xy_arr(interval[0], interval[1], n, fun)
        return [['x', 'y'],
            ...transpose([xy.x_arr,
            ...eitken(dot, xy.x_arr, xy.y_arr, [])
            ])]

    },
    'get_value': (fun, interval, dot, n = 5) => {
        const xy = create_xy_arr(interval[0], interval[1], n, fun)
        return eitken(dot, xy.x_arr, xy.y_arr, [])[n - 1][0]
    },
    'draw_tab': (fun, interval, dot, n = 5) => {
        let ans = Boss.get_tab(fun, interval, dot, n)
            .map(line => '<td>' + line.join('</td><td>'))
            .join('</tr><tr>')
        //document.getElementById('tab').innerHTML =
        return `<table>
                <tr>${ans}</tr>
             </table>`
    }
}

console.table(Boss.get_tab(Math.sin, [-1, 1], 0.5));

// 3) Передбачити в програмі оцінку похибки на основі порівняння значень,
// 	отриманих за допомогою інтерполяційних многочленів різного степеня.
// 4) Оцінити розмитість оцінки похибки.
// 5) Налагодити програму шляхом інтерполяції функції (див.
// «Чисельний експеримент»).
// 6) Застосувати програму для інтерполяції функції, з таблиці 2 за номером
// у списку.
// 7) Результат оцінки похибки представити у вигляді графіка (рис. 3, 4) і для
// одного з значень у вигляді таблиці 1.

