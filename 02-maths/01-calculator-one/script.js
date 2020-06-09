/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function output() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
    let one = document.getElementById('op-one').value;
    let two = document.getElementById('op-two').value;
    let result = parseFloat(one) + parseFloat(two);
    alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
    let one = document.getElementById('op-one').value;
    let two = document.getElementById('op-two').value;
    let result = parseFloat(one) - parseFloat(two);
    alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
    let one = document.getElementById('op-one').value;
    let two = document.getElementById('op-two').value;
    let result = parseFloat(one) * parseFloat(two);
    alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
    let one = document.getElementById('op-one').value;
    let two = document.getElementById('op-two').value;
    let result = parseFloat(one) / parseFloat(two);
    alert(result);
    });
})();
