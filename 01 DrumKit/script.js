/* function playAudio(letter) {

}
*/

document.addEventListener("keydown", ev => {
    
    let audioElement = document.getElementById(`${ev.key.toUpperCase()}`);
    //let audioName = ev.key.toUpperCase();
    //let audioElement = document.querySelector(`.${audioNa}`)
    console.log(audioElement);
});


//console.log(key);