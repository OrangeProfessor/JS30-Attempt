/* function playAudio(letter) {

}
*/

document.addEventListener("keydown", ev => {
    
    let box = document.getElementById(`${ev.key.toUpperCase()}`);
    //let audioElement = box.querySelector(".sound-name");
    let audioName = box.querySelector(".sound-name").textContent;
    let something = new Audio(`sounds/${audioName}.wav`);
    something.play();
    //let audioName = ev.key.toUpperCase();
    //let audioElement = document.querySelector(`.${audioNa}`)
    //console.log(something);
});


//console.log(key);