var radioButtons =document.querySelectorAll('input[name="selector"]');
var total = document.getElementById('total');
var distance = document.getElementsByName('distance');
var waitingTime = document.getElementsByName('waitingTime');
total.onclick = function () {
    var car;
    if (car === undefined) {
        alert('Vui long chon loai xe');
    }
    for (var radioButton of radioButtons) {
        if (radioButton.checked) {
            car = radioButton.value;
            break;
        }
    }
    
}
