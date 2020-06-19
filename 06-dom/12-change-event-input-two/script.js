/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("pass-one").setAttribute("minLength", "8");
    document.getElementById("pass-one").oninput = () => {
        let string = document.getElementById("pass-one").value;
        let pass = /^(?=(\D\d){2,}).{2,}(?=.[a-zA-Z]).{6,}$/;
        if (pass.test(string)) {
            document.getElementById("validity").innerHTML = "Ok";
        } else {
            document.getElementById("validity").innerHTML = "Not ok";
        }
    }
})();
