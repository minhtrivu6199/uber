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
                        total = 8000 + (20*12000) + (Number(distance.value) - 20)*10000;
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

btnInvoice.onlick = function() {
    var body = document.getElementsByTagName('body');
   body.innerHTML = `<div class="modal" tabindex="-1" role="dialog">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title">Modal title</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
        <thead>
        <tr>
            <th scope="col">Chi ti???t</th>
            <th scope="col">S??? d???ng</th>
            <th scope="col">????n gi??</th>
            <th scope="col">Th??nh ti???n</th>
        </tr>
        </thead>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>`;
}


