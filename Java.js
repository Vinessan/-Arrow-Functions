//Exercicio  1
//O this quando colocado dentro de uma function global ele estara se referindo a "window" do navegador, sendo assim, o this tem que estar assosiado ao "objeto" que esta sendo execultado para que o this consiga ser execultado de maneira correta.


//Exercicio 2

//Created
month = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
day = new Date

console.log("Created:" + day.getDate() + " de " + month[day.getMonth()] + " de " + day.getFullYear())



//CurrentDate
const data = new Date()
const dia = data.getDate()
const mes = data.getMonth()
const ano = data.getFullYear()

console.log(`CurrentDate: 0${dia}/0${mes}/${ano}`);



//CurrentTime
const time = new Date()
const hours = time.getHours()
const minuts = time.getMinutes()
const seconds = time.getSeconds()

console.log(`CurrentTime: ${hours}:${minuts}:${seconds}`);



//SetTime
const setHour = (number) => {
    const hour = new Date().setTime(number)
    return hour
}
console.log('SetTime: 20:00');




//SetDate
function setDatas() {
    const date = new Date().getDate()
    return date
}
console.log("SetDate:" + "09/09/197" + setDatas("09/09/1973"));




//CallBack
var array = [
    "Vinicius"
]

function mapear (array, callback) {
    let name = 0;
    for(let i = 0; i < array.length; i++) {
        setTimeout((callback) => {
            console.log("Name: " + array[0]);
        }, 1000);
    } 
}
mapear(array)

