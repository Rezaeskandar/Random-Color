/* step 1 add the text dynamicly to the page  */

let text = document.getElementById('note');
text.textContent = "dynamicly added text to the page.";

/* step 2 change the background of the cycle by click event */
let change = document.getElementById('cirlcle');
change.addEventListener('click', changeColor)

function changeColor() {

    let randomColor = Math.floor(Math.random() * 16777216)
        .toString(16);

    change.style.backgroundColor = `#${randomColor}`;
}