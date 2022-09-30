var radioButtons =document.querySelectorAll('input[name="selector"]');
var total = document.getElementById('total');

total.onclick = function () {
    var car;
    for (var radioButton of radioButtons) {
        if (radioButton.checked) {
            car = radioButton.value;
            break;
        }
    }
}
