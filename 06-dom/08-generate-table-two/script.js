/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const table = document.createElement("table");
    document.getElementById("target").appendChild(table);
    table.setAttribute("border", '1');
    for (let i = 0; i <= 10; i++) {
        const tr = document.createElement("tr");
        table.appendChild(tr);
        for (let j = 0; j <= 10; j++) {
        const td = document.createElement("td");
        tr.appendChild(td);
        // assign multiplying 
            td.innerHTML = (i) +" x " + (j);
        }
    }
})();
