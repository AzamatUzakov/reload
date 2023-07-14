let arr_one = []
let arr_two = []
let arr_three = []

let BASE_URL = 'http://localhost:5050'
fetch(BASE_URL + '/cars')
    .then(res => res.json())
    .then(data => reload(data))

let box = document.querySelector('.box')
let one_block = document.querySelector('.year_one')
let two_block = document.querySelector('.year_two')
let three_block = document.querySelector('.others_year')
let link = document.querySelectorAll('.h3')

console.log(link);
let show_one = 4
let show_two = 4
let show_three = 4
function reload(arr) {
    console.log(arr);
    for (let i of arr) {
        let box = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let button = document.createElement('button')


        box.classList.add('box')
        button.classList.add('button')
        h2.innerHTML = ` ${i.car}`
        p.innerHTML = `VIN:${i.car_vin}`
        p2.innerHTML = `Year:${i.car_model_year}`

        button.innerHTML = 'Подаобнее'


        box.append(h2, p, p2, button)


        if (i.car_model_year >= 2020 && arr_one.length !== show_one) {
            one_block.append(box)
            arr_one.push(i)
        }
        else if (i.car_model_year >= 2013 && arr_two.length !== show_two) {
            two_block.append(box)
            arr_two.push(i)

        }
        else if (i.car_model_year < 2013 && arr_three.length !== show_three) {
            three_block.append(box)
            arr_three.push(i)
        }
    }
}



