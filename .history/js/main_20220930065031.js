var radioButtons =document.querySelectorAll('input[name="selector"]');
var btnTotal = document.getElementById('total');
var distance = document.getElementsByName('distance');
var waitingTime = document.getElementsByName('waitingTime');

btnTotal.onclick = function () {
    var car;
    var total;
    if (car === undefined) {
        alert('Vui long chon loai xe');
    }
    for (var radioButton of radioButtons) {
        if (radioButton.checked) {
            car = radioButton.value;
            break;
        }
    }
    switch (car){
        case uberx:
            if(distance <= 1) {
                total = distance * 1;
            }
    }
}
