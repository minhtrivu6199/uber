var radioButtons =document.querySelectorAll('input[name="selector"]');
var btnTotal = document.getElementById('total');
var distance = document.getElementsByName('distance');
var waitingTime = document.getElementsByName('waitingTime');
var money = document.getElementById('xuatTien');

btnTotal.onclick = function () {
    var car;
    var total;
    for (var radioButton of radioButtons) {
        if (radioButton.checked) {
            car = radioButton.value;
            break;
        }
    }
    console.log(total);
    switch (car){
        case 'uberx': {
            if(Number(distance) <= 1) {
                total = Number(distance) * 8000;
            }
            if (Number(distance) <= 20) {
                total = 8000 + (Number(distance) - 1)*12000;
            }
            if (Number(distance) > 20) {
                total = 8000 + (20*12000) + (Number(distance) - 20)*10000;
            }
            total = total + (Number(waitingTime)*2000);
            break;
        }
        case 'ubersuv': {
            if(Number(distance) <= 1) {
                total = Number(distance) * 9000;
            }
            if (Number(distance) <= 20) {
                total = 9000 + (Number(distance) - 1)*14000;
            }
            if (Number(distance) > 20) {
                total = 9000 + (20*14000) + (Number(distance) - 20)*12000;
            }
            total = total + (Number(waitingTime)*3000);
            break;
        }
        case 'uberblack': {
            if(Number(distance) <= 1) {
                total = Number(distance) * 10000;
            }
            if (Number(distance) <= 20) {
                total = 10000 + (Number(distance) - 1)*16000;
            }
            if (Number(distance) > 20) {
                total = 10000 + (20*16000) + (Number(distance) - 20)*14000;
            }
            total = total + (Number(waitingTime)*4000);
            break;
        }
    }
    // money.innerHTML = total;
    // money.style.display = 'block';
    console.log(total);
}
