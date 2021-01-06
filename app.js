var btnPaid = document.querySelector("#btn-billPaid");
var inputBill = document.querySelector("#billAmt");
var inputPaid = document.querySelector("#billPaid");
var output = document.querySelector(".output-box");
var statusBar = document.querySelector(".status-bar");

//animate status bar somehow

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

function outputEventHandler() {
    output.style.opacity = "0%";
    billPaid = inputPaid.value;
    var change = billPaid - billAmount;
    if (change > 0) {
        calculateNotes(change);
        statusBar.style.borderColor = "var(--blue)";
        btnPaid.style.color = "var(--blue)";
        btnPaid.style.border = "1px solid var(--blue)";
        output.innerText = "Return ₹" + change + " to the customer.\n\n";
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].number > 0) {
                output.innerText += notes[i].number + " x " + notes[i].name + "\n";
            }
        }
    } else if (change === 0) {
        output.innerHTML = "Thank you for shopping with us!"
        statusBar.style.borderColor = "var(--green)";
        btnPaid.style.border = "1px solid var(--green)";
        btnPaid.style.color = "var(--green)";
    } else {
        output.innerText = "Please pay ₹" + Math.abs(change) + " more";
        statusBar.style.borderColor = "var(--red)";
        btnPaid.style.border = "1px solid var(--red)";
        btnPaid.style.color = "var(--red)";
    }
    output.style.opacity = "100%"
}

function calculateNotes(change) {
    console.log(change);
    for (var i = 0; i < notes.length; i++) {
        notes[i].number = 0;
    }
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
        statusBar.style.borderColor = "var(--light-grey)";
        btnPaid.style.color="var(--dark-red)"
        btnPaid.style.border = "none";
        inputPaid.disabled = true;
        btnPaid.disabled = true;
    } else {
        btnPaid.style.color="var(--silver)"
        btnPaid.style.border = "1px solid var(--ultradark-grey)";
        inputPaid.disabled = false;
        btnPaid.disabled = false;
    }
    billEventHandler();
}

function paidEventHandler() {
    output.style.opacity = "0%"
    setTimeout(outputEventHandler, 250);
}

inputPaid.addEventListener("input",disableHandler);
inputBill.addEventListener("input", disableHandler);
btnPaid.addEventListener("click", paidEventHandler);