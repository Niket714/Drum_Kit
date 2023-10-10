// add Event listner tells us what to do  when this event happens like when
// this click happens then which function should be Called 


// document.querySelector("button").addEventListener("click" , handleClick);

// function handleClick(){
//     alert("I got clicked");
// }

// document.querySelector("button").addEventListener("click" , function (){ 
//     alert("I got clicked");
// }); 

// to play an audio 
// var aud = new Audio("./sounds/tom-1.mp3");
// aud.play();


var arr = document.querySelectorAll(".drum");

for(var i=0 ; i< arr.length ; i++){
    arr[i].addEventListener("click" , function (){
        var buttoninnerHtml = this.innerHTML;
        // this.style.color = "white";
        soundplay(buttoninnerHtml);
        buttonAnimation(buttoninnerHtml);
    });
}                                               

// eventlistner for clicking any key on the keyboard 
// and the whole webpage should listen to the pressing of any key so we 
// should associated it with the whole document
document.addEventListener("keydown", function (event){
    // alert("key is pressed");
    // console.log(event);
    // console.log(event.key);
    var  word = event.key;
    soundplay(word);
    buttonAnimation(word);
});

function soundplay(char){
    var aud;
    switch (char){
        case 'a' : aud = new Audio("./sounds/tom-1.mp3");
        break;
        
        case 's' : aud = new Audio("./sounds/tom-2.mp3");
        break;
        case 'd' : aud = new Audio("./sounds/tom-3.mp3");
        break;
        case 'f' : aud = new Audio("./sounds/tom-4.mp3");
        break;
        case "j" : aud = new Audio("./sounds/snare.mp3");
        break;
        case 'k' : aud = new Audio("./sounds/crash.mp3");
        break;
        case 'l' : aud = new Audio("./sounds/kick-bass.mp3");
        break;

        default:
            break;
    }
    aud.play();
}


function buttonAnimation(currentKey){
    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    } , 100);
}