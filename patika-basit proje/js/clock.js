fullName = prompt('Adınız Nedir ? ')

let indexDOM = document.querySelector('#name')
indexDOM.innerHTML += fullName

let clockDOM = document.querySelector('#myClock')

function showTime() {
    let date = new Date().toLocaleString('tr-TR');
    clockDOM.innerHTML = date
}
showTime(1000)