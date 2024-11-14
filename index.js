
//   section one: Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
      
    });
}


//  section two : Detecting keyboard press
document.addEventListener("keypress", function (event ){
makeSound(event.key);
});

function makeSound(key){

    switch (key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
             break;
             case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
                case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
                case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
                case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
                case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
                case "l":
                    var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;
                default: console.log(b)

    }
}



// previously before adding key. this was the code that was passing inner html and the switch was inside the for loop just after the buttonInnerHTML variable
// switch (buttonInnerHTML){
//     case "w":
//         var audio = new Audio("sounds/tom-1.mp3");
//          audio.play();
//          break;
//          case "a":
//             var audio = new Audio("sounds/tom-2.mp3");
//             audio.play();
//             break;
//             case "s":
//             var audio = new Audio("sounds/tom-3.mp3");
//             audio.play();
//             break;
//             case "d":
//             var audio = new Audio("sounds/tom-4.mp3");
//             audio.play();
//             break;
//             case "j":
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play();
//             break;
//             case "k":
//             var audio = new Audio("sounds/crash.mp3");
//             audio.play();
//             break;
//             case "l":
//                 var audio = new Audio("sounds/kick-bass.mp3");
//                 audio.play();
//                 break;
//             default: console.log(b)

// }