/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        const pass = document.getElementById("pass-one").value;
        const rePass = document.getElementById("pass-two").value;
        if (pass === rePass) {
            document.getElementsByTagName("input")[0].style.borderColor = "black";
            document.getElementsByTagName("input")[1].style.borderColor = "black";
            console.log("Passwords match");
        } else {
            document.getElementsByTagName("input")[0].style.borderColor = "red";
            document.getElementsByTagName("input")[1].style.borderColor = "red";
            console.log("Passwords don't match");
        }
    });
})();
