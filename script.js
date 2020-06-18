const a = 315;
const b = 370;
const c = 480;
const d = 640;
const e = 760;
var ec = 0;

function calculate() {
    fix = document.getElementById('fix').value;
    console.log('fix ', fix);
    // ec = parseFloat(document.getElementById('EC').value);
    // console.log('ec ', EC);
    mRent = parseFloat(document.getElementById('mRent').value);
    console.log('mRent ', mRent);
    duty = parseFloat(document.getElementById('duty').value);
    console.log('duty ', duty);
    fuel = parseFloat(document.getElementById('fuel').value);
    console.log('fuel ', fuel);
    subsidy = parseFloat(document.getElementById('subsidy').value);
    console.log('subsidy ', subsidy);

    units = document.getElementById('cons').value;


    ecUpdate(units);





    amount = +fix + +ec + +mRent + +duty + +fuel + -subsidy;
    document.getElementById('amount').value = amount;
    console.log(amount);

}




//live updating unittttt in input field
function updateUnits() {
    pRead = parseFloat(document.getElementById('pRead').value);
    nRead = parseFloat(document.getElementById('nRead').value);
    if (nRead > 0 && pRead > 0 && nRead > pRead) {
        units = +nRead + -pRead;
        document.getElementById('cons').value = units;
        ecUpdate(units);
    }
}

///////updatinnnnng energy                   charge in input fiiiiield
function ecUpdate(units) {
    console.log(units);

    rem = units % 100;
    firstDigit = Math.floor(units / 100);
    if (units < 501) {
        if (firstDigit == 0) {
            ec = rem * 3.15;

            document.getElementById('EC').value = ec;
            console.log(ec);
        }
        else if (firstDigit == 1) {
            ec = a + (rem * 3.7);
            document.getElementById('EC').value = ec;
            console.log(ec);

        }
        else if (firstDigit == 2) {
            ec = a + b + (rem * 4.8)
            document.getElementById('EC').value = ec;
            console.log(ec);
        }
        else if (firstDigit == 3) {
            ec = a + b + c + (rem * 6.4)
            document.getElementById('EC').value = ec;
            console.log(ec);
        }
        else if (firstDigit == 4) {
            ec = a + b + c + d + (rem * 7.6)
            document.getElementById('EC').value = ec;
            console.log(ec);
        }
        else if (firstDigit == 5) {
            ec = a + b + c + d + e
            document.getElementById('EC').value = ec;
            console.log(ec);
        }
    }
    if (units > 500) {
        if (units > 500 && units < 601) {
            ec = units * 5.8;
            document.getElementById('EC').value = ec;
            console.log(ec);
        }
        else if (units > 600 && units < 701) {
            ec = units * 6.6;
            document.getElementById('EC').value = ec;
            console.log(ec);

        }
        else if (units > 700 && units < 801) {
            ec = units * 6.9;
            document.getElementById('EC').value = ec;
            console.log(ec);
        }
        else if (units > 800 && units < 1001) {
            ec = units * 7.1;
            document.getElementById('EC').value = ec;
            console.log(ec);
        }
        else if (units > 1000) {
            ec = units * 7.9;
            document.getElementById('EC').value = ec;
            console.log(ec);
        }
    }
}