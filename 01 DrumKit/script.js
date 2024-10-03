function boxTransition(box) {
    box.classList.add("new-box");
}

function endTransition(box) {
    if (box.propertyName !== "transform") return;
    box.target.classList.remove("new-box");
}



document.addEventListener("keydown", ev => {
    const boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(box => box.addEventListener("transitionend", endTransition));

    // Play Audio
    let box = document.getElementById(`${ev.key.toUpperCase()}`);
    //let audioElement = box.querySelector(".sound-name");
    let audioName = box.querySelector(".sound-name").textContent;
    let something = new Audio(`sounds/${audioName}.wav`);
    boxTransition(box);
    something.play();
    //let audioName = ev.key.toUpperCase();
    //let audioElement = document.querySelector(`.${audioNa}`)
    //console.log(something);
    


});


//console.log(key);