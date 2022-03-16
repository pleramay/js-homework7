alert('Проверим количество секунд в часе! Нажмите ОК чтобы продолжить')
let k = prompt('Введите количество часов: ', '');
let n = 3600;

function calcMult(k, n){
    return k * n;
}
let c = calcMult(k, n);
if(k < 2){
    alert(`В ${k} часe содержится ${c} секунд`);
} else
alert(`В ${k} часах содержится ${c} секунд`);
