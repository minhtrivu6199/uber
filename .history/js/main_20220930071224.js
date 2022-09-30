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
    switch (car){
        case 'uberx': {
            if(distance <= 1) {
                total = distance * 8000;
            }
            if (distance <= 20) {
                total = 8000 + (distance - 1)*12000;
            }
            if (distance > 20) {
                total = 8000 + (20*12000) + (distance - 20)*10000;
            }
            total = total + (waitingTime*2000);
            break;
        }
        case 'ubersuv': {
            if(distance <= 1) {
                total = distance * 9000;
            }
            if (distance <= 20) {
                total = 9000 + (distance - 1)*14000;
            }
            if (distance > 20) {
                total = 9000 + (20*14000) + (distance - 20)*12000;
            }
            total = total + (waitingTime*3000);
            break;
        }
        case 'uberblack': {
            if(distance <= 1) {
                total = distance * 10000;
            }
            if (distance <= 20) {
                total = 10000 + (distance - 1)*16000;
            }
            if (distance > 20) {
                total = 10000 + (20*16000) + (distance - 20)*14000;
            }
            total = total + (waitingTime*4000);
            break;
        }
    }
    money.innerHTML = total;
    money.style.display = 'block';
}
