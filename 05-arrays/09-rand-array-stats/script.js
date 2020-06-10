/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    (function () {
        let numbers = [...Array(10)].map(() => Math.floor(Math.random() * 100));
        document.getElementById("run").addEventListener("click", function () {
          let targets = document.getElementsByTagName("td");
          for (let i = 0; i < numbers.length; i++) {
            targets[i].innerHTML = numbers[i];
          }
          let sum = numbers.reduce(function (a, b) {
            return a + b;
          }, 0);
          document.getElementById("min").innerHTML = Math.min(...numbers);
      
          document.getElementById("max").innerHTML = Math.max(...numbers);
      
          document.getElementById("sum").innerHTML = sum;
      
          document.getElementById("average").innerHTML = sum / numbers.length;
        });
})();
