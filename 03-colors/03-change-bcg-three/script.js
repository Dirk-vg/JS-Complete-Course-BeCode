/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        red = Math.floor(Math.random() * 250 + 0 );
        green = Math.floor(Math.random() * 250 + 0);
        blue = Math.floor(Math.random() * 250 + 0);

        rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        document.body.style.background = rgbColor;
    }); 
    } 
    
)();