/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
        const td = document.createElement("td");
        table.appendChild(tr);
        tr.appendChild(td);
        td.innerHTML = (i);
    }
})();
