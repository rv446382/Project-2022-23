// catch all buttons
let buttons = document.querySelectorAll('.drum')

// run a for each loop on buttons array and add eventlistener for each element
buttons.forEach(function(el){
    el.addEventListener('click',function(){
        playSound(el.textContent);

    })
})

function playSound(element){
    switch(element){
        case 'w' :
            // only three step.
            // create new sound 
            // play sound
            // break
            let wSound = new Audio('sounds/tom-1.mp3')
            wSound.play();
            break;
        case 'a' :
            let aSound = new Audio('sounds/tom-2.mp3')
            aSound.play();
            break;
        case 's' :
            let sSound = new Audio('sounds/tom-3.mp3')
            sSound.play();
            break;
        case 'd' :
            let dSound = new Audio('sounds/tom-4.mp3')
            dSound.play();
            break;
        case 'j' :
            let jSound = new Audio('sounds/snare.mp3')
            jSound.play();
            break;
        case 'k' :
            let kSound = new Audio('sounds/crash.mp3')
            kSound.play();
            break;
        case 'l' :
            let lSound = new Audio('sounds/kick-bass.mp3')
            lSound.play();
            break;
        default: 
            console.log(element);
            break;   
    }
}

// document.querySelector('.w').addEventListener('click',function(){
//     // new audion in an method in js to import the audio files here
//     // syntax is  the new Audio('Location of the file');
//     let sound1 = new Audio('sounds/tom-1.mp3');
//     // in this step we just created a variable.
//     // .play() is the method we use a sound to play.
//     sound1.play();
// })



// based on keyboard
// we are catching the key value that is pressed using event.key

document.addEventListener('keydown',function(event){
            playSound(event.key);
        // console.log(event);
})