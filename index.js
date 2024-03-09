
let n=document.querySelectorAll(".drum").length ;
var a;

// keyboard press
document.addEventListener('keypress',function(){
    a=event.key
    console.log(event.key)
    makesound(a);

    buttonanimation(a);


    })


// button press 
for (var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makesound(this.innerHTML);

        buttonanimation(this.innerHTML);
        



        }
    );
}


 
function makesound(key){
    switch (key){
        case 'w':
                var audio1=new Audio('./sounds/crash.mp3');
                audio1.play()
            break;
        case 'a':
                var audio1=new Audio('./sounds/kick-bass.mp3');
                audio1.play()
            break;
        case 's':
                var audio1=new Audio('./sounds/snare.mp3');
                audio1.play()
            break;
        case 'd':
                var audio1=new Audio('./sounds/tom-1.mp3');
                audio1.play()
            break;
        case 'j':
                var audio1=new Audio('./sounds/tom-2.mp3');
                audio1.play()
            break;
        case 'k':
            var audio1=new Audio('./sounds/tom-3.mp3');
            audio1.play()
            break;
         case 'l':
                var audio1=new Audio('./sounds/tom-4.mp3');
                audio1.play()
            break;

        // default:

    }
}


function buttonanimation(current){

    var active=document.querySelector("."+current);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed")
    },100)
}




