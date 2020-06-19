/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById('target');
    //get text out of target as string, remove any excess white spaces with replace()
    //regex is used here: \s is a space; \s{2,} is 2 or more spaces; search global for them, replace them with 1 space 
    let str = target.innerHTML.replace(/\s{2,}/g,' ');
    let strArray = str.split('');
    //clear out the text before adding one by one letter in
    target.innerHTML ='';
    let i=0;
    let time=200;
    setInterval(() => {
        if (i<strArray.length){
            target.innerHTML += strArray[i];   
        }
        i++;
    }, time);
})();
