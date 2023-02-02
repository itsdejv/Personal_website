let body = document.querySelector("body")

for(let i = 0; i < 100; i++){
    console.log(Math.ceil(Math.random()*27))
}

body.addEventListener("click",function(){
    let audio = new Audio("sounds/keyboard (" + Math.ceil(Math.random()*27) + ").mp3")
    audio.volume = 0.1;
    audio.play()
})