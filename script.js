let container=document.querySelector(".container")
let sounds=document.querySelectorAll(".sound")
let keys=document.querySelectorAll(".key")
let soundNames=document.querySelectorAll(".sound-name")

// keys.forEach((key,index) => {
//     key.addEventListener("keydown", (event)=> {
//         if(event.key==='a' || event.key==='A') {
//             sounds[index].classList.add("playing")
//         }
//     })
// });

let bass=new Audio("./bass.mp3")
let bass2=new Audio("./bass2.wav")
let crash=new Audio("./crash_symbal.mp3")
let stick=new Audio("./drum_sticks.mp3")
let floorTom=new Audio("./floor_tom.mp3")
let closedHat=new Audio("./hi_hat_closed.mp3")
let openHat=new Audio("./hi_hat_open.mp3")
let kick=new Audio("./kick.wav")
let midTom=new Audio("./mid_tom.mp3")
let rideBell=new Audio("./ride_cymbal_bell.mp3")
let ride=new Audio("./ride_cymbal.mp3")
let smallTom=new Audio("./small_tom.mp3")
let snare=new Audio("./snare.wav")
let splash=new Audio("./splash_cymbal.mp3")

document.addEventListener("keydown", (event)=> {
    
    keys.forEach((key,index) => {
        if(event.key.toLowerCase()===key.getAttribute("key")) {
            sounds[index].classList.add("playing")
            if(event.key.toLowerCase()==='a') {
                bass.currentTime=0
                bass.play()
            }
            else if(event.key.toLowerCase()==='b') {
                bass2.currentTime=0
                bass2.play()
            }
            else if(event.key.toLowerCase()==='c') {
                crash.currentTime=0
                crash.play()
            }
            else if(event.key.toLowerCase()==='d') {
                ride.currentTime=0
                ride.play()
            }
            else if(event.key.toLowerCase()==='e') {
                rideBell.currentTime=0
                rideBell.play()
            }
            else if(event.key.toLowerCase()==='f') {
                splash.currentTime=0
                splash.play()
            }
            else if(event.key.toLowerCase()==='g') {
                snare.currentTime=0
                snare.play()
            }
            else if(event.key.toLowerCase()==='h') {
                stick.currentTime=0
                stick.play()
            }
            else if(event.key.toLowerCase()==='i') {
                kick.currentTime=0
                kick.play()
            }
            else if(event.key.toLowerCase()==='j') {
                openHat.currentTime=0
                openHat.play()
            }
            else if(event.key.toLowerCase()==='k') {
                closedHat.currentTime=0
                closedHat.play()
            }
            else if(event.key.toLowerCase()==='l') {
                floorTom.currentTime=0
                floorTom.play()
            }
            else if(event.key.toLowerCase()==='m') {
                midTom.currentTime=0
                midTom.play()
            }
            else if(event.key.toLowerCase()==='n') {
                smallTom.currentTime=0
                smallTom.play()
            }
            sounds[index].addEventListener("transitionend", ()=> {
                sounds[index].classList.remove("playing")
            })
        }
    })
})

// keys.forEach((key,index) => {
//     key.addEventListener("transitionend", (event)=> {
//         if(event.key.toLowerCase()===key.getAttribute("key"))
//             sounds[index].classList.remove("playing")
//     })
// })