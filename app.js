var btnBill = document.querySelector("#btn-billAmt");
var btnPaid = document.querySelector("#btn-billPaid");
var inputBill = document.querySelector("#billAmt");
var inputPaid = document.querySelector("#billPaid");
var output = document.querySelector(".output-box");
var billAmount = 0,
    billPaid = 0;
var notes = [{
        "name": "₹2000",
        "number": 0
    },
    {
        "name": "₹500",
        "number": 0
    },
    {
        "name": "₹100",
        "number": 0
    },
    {
        "name": "₹20",
        "number": 0
    },
    {
        "name": "₹10",
        "number": 0
    },
    {
        "name": "₹5",
        "number": 0
    },
    {
        "name": "₹1",
        "number": 0
    }
];

function billEventHandler() {
    billAmount = inputBill.value;
    output.innerText="";
    if (billAmount === "") {
        inputPaid.disabled = true;
        btnPaid.disabled = true;
    } else {
        inputPaid.disabled = false;
        btnPaid.disabled = false;
    }
}

function paidEventHandler() {
    billPaid = inputPaid.value;
    var change = billPaid - billAmount;
    if(change>0){
    calculateNotes(change);
    for(var i=0;i<notes.length;i++){
        output.innerText+=notes[i].name + " " + notes[i].number+"\n";
    }
    }
    else if(change===0){
        output.innerText="Thank you for shopping with us!"
    }
    else{
        output.innerText="Please pay ₹" + Math.abs(change) +" more";
    }
}

function calculateNotes(change) {
    console.log(change);
    for(var i=0;change>0;i++){
        if(change>=2000){
            change-=2000;
            notes[0].number++;
            console.log(notes[0].number);
        }
        else if(change>=500){
            change-=500;
            notes[1].number++;
            console.log(notes[1].number);
        }
        else if(change>=100){
            change-=100;
            notes[2].number++;
            console.log(notes[2].number);
        }
        else if(change>=20){
            change-=20;
            notes[3].number++;
            console.log(notes[3].number);
        }
        else if(change>=10){
            change-=10;
            notes[4].number++;
            console.log(notes[4].number);
        }
        else if(change>=5){
            change-=5;
            notes[5].number++;
            console.log(notes[5].number);
        }
        else if(change>=1){
            change-=1;
            notes[6].number++;
            console.log(notes[6].number);
        }
    }
}

btnBill.addEventListener("click", billEventHandler);
btnPaid.addEventListener("click", paidEventHandler);