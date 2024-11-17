function checkNumber() {
    
    var num = document.getElementById('numberInput').value;
    num = parseInt(num); 


    if (isNaN(num)) {
        document.getElementById('result').innerHTML = "Please enter a valid number!";
    }

    else if (num === 9) {
        document.getElementById('result').innerHTML = "It's a nine";
    }

    else {
        document.getElementById('result').innerHTML = "Not a nine";
    }
}