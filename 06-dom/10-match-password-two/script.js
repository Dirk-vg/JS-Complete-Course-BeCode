/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    HTMLInputElement
    document.getElementById('run').addEventListener('click', () => {
        const pass = document.getElementById("pass-one").value;
        const rePass = document.getElementById("pass-two").value;
        let a = document.getElementsByTagName('input')[0];
        let b = document.getElementsByTagName('input')[1];
        if (pass !== rePass) {
            a.setAttribute('class', "error");
            b.setAttribute('class', "error");
            console.log("Passwords don't match");
        } else {
            console.log("Passwords match");
            a.removeAttribute('class', "error");
            b.removeAttribute('class', "error");
        }
    });
})();
