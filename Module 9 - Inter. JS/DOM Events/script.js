let element = document.getElementById("onClick");

element.addEventListener("click", () => {
    console.log("Nice job :) ");
    
});

// I could use a function but I tried this one to see if works :)

const textColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("changeColors").style.color = "#" + randomColor;
        innerHTML = "#" + randomColor;
}

changeColors.addEventListener("click", () => {
    textColor();
}); 

/* 

I decided to use the the solution above because at first I would like to the user click on the phrase to make the changes.
With the following code it's useful but wheneaver I update the page the changes already happen, so not following the purpuse of I was wondering at first.

changeColors.addEventListener("click", textColor);
textColor(); 

*/

function changeText() {
    var input = document.getElementById("textInput")
    var h2 = document.getElementById("inputText")
    h2.innerText = input.value;
}

/* 

I choose this method because using the getElementByTagName could catch all my tags,
refer to the designated Id it's a better option. 

*/

function hideStuff() {
    var x = document.getElementById("content");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



// button.onmouseover = button.onmouseout = acButton;

// function acButton() {
//     if (event.type == 'mouseover') {
//         event.target.style.background = 'pink'
//     } if (event.type == 'mouseout') {
//         event.target.style.background = ''
//     }
// }