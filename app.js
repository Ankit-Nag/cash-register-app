var btnBill= document.querySelector("#btn-billAmt");
var btnPaid= document.querySelector("#btn-billPaid");
var inputBill= document.querySelector("#billAmt");
var inputPaid= document.querySelector("#billPaid");
var output = document.querySelector(".output-box");
var billAmount=0, billPaid=0;
var notes=[{"name":"₹2000","number":0},
]

function billEventHandler(){
    billAmount=inputBill.value;
    if(billAmount===""){
        inputPaid.disabled=true;
        btnPaid.disabled=true;
    }
    else{
        inputPaid.disabled=false;
        btnPaid.disabled=false;
    }
}

function paidEventHandler(){
    billPaid=inputPaid.value;
    var change=billPaid-billAmount;
    calculateNotes(change);
}

function calculateNotes(change){
    for(var i=0;change>0;i++){

    }
}

btnBill.addEventListener("click",billEventHandler);
btnPaid.addEventListener("click",paidEventHandler);