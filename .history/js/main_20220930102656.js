var radioButtons =document.querySelectorAll('input[name="selector"]');
var btnTotal = document.getElementById('total');
var distance = document.getElementById('distance');
var waitingTime = document.getElementById('waitingTime');
var money = document.getElementById('xuatTien');

btnTotal.onclick = function () {
    var car;
    var total = 0;
    for (var radioButton of radioButtons) {
        if (radioButton.checked) {
            car = radioButton.value;
            console.log(radioButton.value);
            switch (car){
                case 'uberx': {
                    if(Number(distance.value) <= 1) {
                        total = Number(distance.value) * 8000;
                    }
                    if (Number(distance.value) > 0 && Number(distance.value) <= 20) {
                        total = 8000 + (Number(distance.value) - 1)*12000;
                    }
                    if (Number(distance) > 20) {
                        total = 8000 + 20 * 12000 + (Number(distance.value) - 20)*10000;
                    }
                    total = total + (Number(waitingTime.value)*2000);
                    break;
                }
                case 'ubersuv': {
                    if(Number(distance.value) <= 1) {
                        total = Number(distance.value) * 9000;
                    }
                    if (Number(distance.value) > 0 && Number(distance.value) <= 20) {
                        total = 9000 + (Number(distance.value) - 1)*14000;
                    }
                    if (Number(distance.value) > 20) {
                        total = 9000 + (20*14000) + (Number(distance.value) - 20)*12000;
                    }
                    total = total + (Number(waitingTime.value)*3000);
                    break;
                }
                case 'uberblack': {
                    if(Number(distance.value) <= 1) {
                        total = Number(distance.value) * 10000;
                    }
                    if (Number(distance.value) > 0 && Number(distance.value) <= 20) {
                        total = 10000 + (Number(distance.value) - 1)*16000;
                    }
                    if (Number(distance.value) > 20) {
                        total = 10000 + (20*16000) + (Number(distance.value) - 20)*14000;
                    }
                    total = total + (Number(waitingTime.value)*4000);
                    break;
                }
            }
            money.innerHTML = total;
            var divThanhTien = document.getElementById('divThanhTien');
            divThanhTien.style.display = 'block';
            break;
        }
    }
    if (radioButton.checked == false) {
        alert('Vui long chon loai xe');
    }
}

var btnInvoice = document.getElementById('invoice');

btnInvoice.onclick = function() {
    var car;
    var total = 0;
    var tBody = document.getElementById('tBody');
    for (var radioButton of radioButtons) {
        if (radioButton.checked) {
            car = radioButton.value;
            console.log(radioButton.value);
            switch (car){
                case 'uberx': {
                    if(Number(distance.value) <= 1) {
                        total = Number(distance.value) * 8000;
                        tBody.innerHTML = `<tr>
                                <th>${car}</th>
                                <th>${distance.value}</th>
                                <th>8000</th>
                                <th>${distance.value * 8000}</th>
                            </tr>
                            <tr>
                                <th>Thời gian chờ</th>
                                <th>${waitingTime.value} phút</th>
                                <th>2000</th>
                                <th>${waitingTime.value * 2000}</th>
                            </tr>
                            <tr>
                                <th colspan="3">Tổng</th>
                                <th>${total + waitingTime.value*2000} vnd</th>
                            </tr>`;
                    }
                    if (Number(distance.value) > 1 && Number(distance.value) <= 20) {
                        total = 8000 + (Number(distance.value) - 1)*12000;
                        tBody.innerHTML = `<tr>
                        <th>${car}</th>
                        <th>1</th>
                        <th>8000</th>
                        <th>8000</th>
                    </tr>
                    <tr>
                        <th>${car}</th>
                        <th>${distance.value - 1}</th>
                        <th>12000</th>
                        <th>${(distance.value - 1)*12000}</th>
                    </tr>
                    <tr>
                                <th>Thời gian chờ</th>
                                <th>${waitingTime.value} phút</th>
                                <th>2000</th>
                                <th>${waitingTime.value * 2000}</th>
                            </tr>
                    <tr>
                        <th colspan="3">Tổng</th>
                        <th>${total + waitingTime.value*2000} vnd</th>
                    </tr>`;
                    }
                    if (Number(distance) > 20) {
                        total = 8000 + (20*12000) + (Number(distance.value) - 20)*10000;
                        tBody.innerHTML = `<tr>
                            <th>${car}</th>
                            <th>1</th>
                            <th>8000</th>
                            <th>8000</th>
                        </tr>
                        <tr>
                            <th>${car}</th>
                            <th>20</th>
                            <th>12000</th>
                            <th>240000</th>
                        </tr>
                        <tr>
                            <th>${car}</th>
                            <th>${distance.value - 20}</th>
                            <th>10000</th>
                            <th>${(distance.value - 20)* 10000}</th>
                        </tr>
                        <tr>
                                <th>Thời gian chờ</th>
                                <th>${waitingTime.value} phút</th>
                                <th>2000</th>
                                <th>${waitingTime.value * 2000}</th>
                            </tr>
                        <tr>
                            <th colspan="3">Tổng</th>
                            <th>${total + waitingTime.value*2000} vnd</th>
                        </tr>`;
                    }
                    total = total + (Number(waitingTime.value)*2000);
                    break;
                }
                case 'ubersuv': {
                    if(Number(distance.value) <= 1) {
                        total = Number(distance.value) * 9000;
                        tBody.innerHTML = `<tr>
                                <th>${car}</th>
                                <th>${distance.value}</th>
                                <th>9000</th>
                                <th>${distance.value * 9000}</th>
                            </tr>
                            <tr>
                                <th>Thời gian chờ</th>
                                <th>${waitingTime.value} phút</th>
                                <th>3000</th>
                                <th>${waitingTime.value * 3000}</th>
                            </tr>
                            <tr>
                                <th colspan="3">Tổng</th>
                                <th>${total + waitingTime.value*3000} vnd</th>
                            </tr>`;
                    }
                    if (Number(distance.value) > 1 && Number(distance.value) <= 20) {
                        total = 9000 + (Number(distance.value) - 1)*14000;
                        tBody.innerHTML = `<tr>
                        <th>${car}</th>
                        <th>1</th>
                        <th>9000</th>
                        <th>9000</th>
                    </tr>
                    <tr>
                        <th>${car}</th>
                        <th>${distance.value - 1}</th>
                        <th>12000</th>
                        <th>${(distance.value - 1)*14000}</th>
                    </tr>
                    <tr>
                                <th>Thời gian chờ</th>
                                <th>${waitingTime.value} phút</th>
                                <th>3000</th>
                                <th>${waitingTime.value * 3000}</th>
                            </tr>
                    <tr>
                        <th colspan="3">Tổng</th>
                        <th>${total + waitingTime.value*3000} vnd</th>
                    </tr>`;
                    }
                    if (Number(distance.value) > 20) {
                        total = 9000 + (20*14000) + (Number(distance.value) - 20)*12000;
                        tBody.innerHTML = `<tr>
                            <th>${car}</th>
                            <th>1</th>
                            <th>9000</th>
                            <th>9000</th>
                        </tr>
                        <tr>
                            <th>${car}</th>
                            <th>20</th>
                            <th>14000</th>
                            <th>280000</th>
                        </tr>
                        <tr>
                            <th>${car}</th>
                            <th>${distance.value - 20}</th>
                            <th>12000</th>
                            <th>${(distance.value - 20)* 12000}</th>
                        </tr>
                        <tr>
                                <th>Thời gian chờ</th>
                                <th>${waitingTime.value} phút</th>
                                <th>3000</th>
                                <th>${waitingTime.value * 3000}</th>
                            </tr>
                        <tr>
                            <th colspan="3">Tổng</th>
                            <th>${total + waitingTime.value*3000} vnd</th>
                        </tr>`;
                    }
                    total = total + (Number(waitingTime.value)*3000);
                    break;
                }
                case 'uberblack': {
                    if(Number(distance.value) <= 1) {
                        total = Number(distance.value) * 10000;
                        tBody.innerHTML = `<tr>
                                <th>${car}</th>
                                <th>${distance.value}</th>
                                <th>10000</th>
                                <th>${distance.value * 10000}</th>
                            </tr>
                            <tr>
                                <th>Thời gian chờ</th>
                                <th>${waitingTime.value} phút</th>
                                <th>4000</th>
                                <th>${waitingTime.value * 4000}</th>
                            </tr>
                            <tr>
                                <th colspan="3">Tổng</th>
                                <th>${total + waitingTime.value*4000} vnd</th>
                            </tr>`;
                    }
                    if (Number(distance.value) > 1 && Number(distance.value) <= 20) {
                        total = 10000 + (Number(distance.value) - 1)*16000;
                        tBody.innerHTML = `<tr>
                        <th>${car}</th>
                        <th>1</th>
                        <th>10000</th>
                        <th>10000</th>
                    </tr>
                    <tr>
                        <th>${car}</th>
                        <th>${distance.value - 1}</th>
                        <th>16000</th>
                        <th>${(distance.value - 1)*16000}</th>
                    </tr>
                    <tr>
                                <th>Thời gian chờ</th>
                                <th>${waitingTime.value} phút</th>
                                <th>3000</th>
                                <th>${waitingTime.value * 4000}</th>
                            </tr>
                    <tr>
                        <th colspan="3">Tổng</th>
                        <th>${total + waitingTime.value*4000} vnd</th>
                    </tr>`;
                    }
                    if (Number(distance.value) > 20) {
                        total = 10000 + (20*16000) + (Number(distance.value) - 20)*14000;
                        tBody.innerHTML = `<tr>
                            <th>${car}</th>
                            <th>1</th>
                            <th>10000</th>
                            <th>10000</th>
                        </tr>
                        <tr>
                            <th>${car}</th>
                            <th>20</th>
                            <th>16000</th>
                            <th>320000</th>
                        </tr>
                        <tr>
                            <th>${car}</th>
                            <th>${distance.value - 20}</th>
                            <th>14000</th>
                            <th>${(distance.value - 20)* 14000}</th>
                        </tr>
                        <tr>
                                <th>Thời gian chờ</th>
                                <th>${waitingTime.value} phút</th>
                                <th>4000</th>
                                <th>${waitingTime.value * 4000}</th>
                            </tr>
                        <tr>
                            <th colspan="3">Tổng</th>
                            <th>${total + waitingTime.value*4000} vnd</th>
                        </tr>`;
                    }
                    total = total + (Number(waitingTime.value)*4000);
                    break;
                }
            }
            break;
        }
    }
}


