var x = prompt("Enter 1 To Addition, 2 To Multiplication")
var doc = document.getElementById('home')
var h = document.getElementById('heading')
if (x == 1) { // Addition
    for (var x = 1; x <= 10; x++) {
        doc.innerHTML += "<div> 3 + " + x + " = " + (3 + x) + "</div>"
    }
    h.innerText = "Addition of 3";
} else if (x == 2) { // Multiplication
    for (var x = 1; x <= 10; x++) {
        doc.innerHTML += "<div> 3 * " + x + " = " + (3 * x) + "</div>"
    }
    h.innerText = "Multiplication of 3";
}