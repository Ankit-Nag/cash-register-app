var btnPaid = document.querySelector("#btn-billPaid");
var inputBill = document.querySelector("#billAmt");
var inputPaid = document.querySelector("#billPaid");
var output = document.querySelector(".output-box");
var statusBar = document.querySelector(".status-bar");

//how to reset the array for each iteration?
//animate status bar somehow
//make buttons look better

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
    output.innerText = "";
}

function paidEventHandler() {
    billPaid = inputPaid.value;
    var change = billPaid - billAmount;
    if (change > 0) {
        calculateNotes(change);
        statusBar.style.borderColor = "var(--light-grey)";
        output.innerText = "";
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].number > 0) {
                output.innerText += notes[i].name + " : " + notes[i].number + "\n";
            }
        }
    } else if (change === 0) {
        output.innerText = "Thank you for shopping with us!"
        statusBar.style.borderColor = "var(--green)";
    } else {
        output.innerText = "Please pay ₹" + Math.abs(change) + " more";
        statusBar.style.borderColor = "var(--red)";
    }
}

function calculateNotes(change) {
    console.log(change);
    for (var i = 0; change > 0; i++) {
        if (change >= 2000) {
            change -= 2000;
            notes[0].number++;
            console.log(notes[0].number);
        } else if (change >= 500) {
            change -= 500;
            notes[1].number++;
            console.log(notes[1].number);
        } else if (change >= 100) {
            change -= 100;
            notes[2].number++;
            console.log(notes[2].number);
        } else if (change >= 20) {
            change -= 20;
            notes[3].number++;
            console.log(notes[3].number);
        } else if (change >= 10) {
            change -= 10;
            notes[4].number++;
            console.log(notes[4].number);
        } else if (change >= 5) {
            change -= 5;
            notes[5].number++;
            console.log(notes[5].number);
        } else if (change >= 1) {
            change -= 1;
            notes[6].number++;
            console.log(notes[6].number);
        }
    }
}

function disableHandler() {
    if (inputBill.value == "") {
        inputPaid.disabled = true;
        btnPaid.disabled = true;
    } else {
        inputPaid.disabled = false;
        btnPaid.disabled = false;
    }
    billEventHandler();
}

inputBill.addEventListener("input", disableHandler);
// btnBill.addEventListener("click", billEventHandler);
btnPaid.addEventListener("click", paidEventHandler);