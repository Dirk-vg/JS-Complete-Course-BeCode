/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    
    const img = document.getElementsByTagName('img')[0];
    document.getElementById('next').addEventListener('click',()=>{
        //check current image
        let index;
        for (let i = 0; i < gallery.length; i++){
            //img.getAttribute('src) gives relative path, img.src gives full path
            if (img.getAttribute('src') === gallery[i]){
                index = i;
                console.log(index = i);
            }
        }
        //set src to next img, if last img go to first again
        img.src = (index === gallery.length-1) ? gallery[0] : gallery[index + 1];
        console.log(img.src)
    })
    
})();
