let countEl = document.getElementById('numbers');
let saveEL = document.getElementById('saved');
let resetEl = document.getElementById('reset');
let count = 0;

function increment(){
    count += 1;
    countEl.innerText = count;
}

function save(){
    let saved = count + " - ";
    saveEL.textContent += saved;
    countEl.textContent = 0;
    count = 0;
}

function reset(){
    saveEL.textContent = "Previous Entries: "  + "";
    count = 0;
    countEl.textContent = 0;
    count = 0;
}