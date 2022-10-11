const n = 20;
const array = [];
let sortAlgo = "bubble";
let isDisabled = false;

const container = document.getElementById("container");
const detail = document.getElementById('details');

newArray();

function newArray(){
    for(let i=0;i<n;i++){
        array[i]=Math.floor(Math.random()*99+1);
    }

    detail.style.fontStyle = "normal";
    detail.textContent = "Made with 🧠 and JavaScript."
    
    showBars();
    setActive();
}

function play(algo){
    setActive();
    toggleBtns();
    sortAlgo=algo;
    setDetails();

    const copyArray = [...array];
    let moves;
    if(sortAlgo=="bubble"){
        moves = bubbleSort(copyArray);
    }
    else if(sortAlgo=="selection"){
        moves = selectionSort(copyArray);
    }
    else if(sortAlgo=="insertion"){
        moves = insertionSort(copyArray);
    }
    else if(sortAlgo=="merge"){
        moves = mergeSort(copyArray);
    }
    animate(moves);
}

//animating the array using recursion
function animate(moves){
    if(moves.length==0){
        showBars();
        fillBars();
        toggleBtns();
        return;
    } 
    const speed = document.getElementById('speed');
    const move = moves.shift();
    const [i,j] = move.indices;
    if(move.type=="swap"){
        [array[i],array[j]]=[array[j],array[i]];
    }
    showBars(move);
    setTimeout(function(){
        animate(moves);
    },110-speed.value);
}

//creating bar divs
function showBars(move){
    container.innerHTML="";
    for(let i=0;i<array.length;i++){
        const bar = document.createElement("div");
        bar.style.height = array[i]*2+"%";
        bar.style.color = "white";
        bar.classList.add("bar");

        if(move && move.indices.includes(i)){
            bar.style.backgroundColor = move.type == "swap" ? "cyan" : "yellow";
        }
        container.appendChild(bar);
    }
}

//for slow animation while filling the array after finishing
const sleep = (time) => {
    return new Promise((resolve)=>setTimeout(resolve,time));
}
const fillBars = async () => {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        await sleep(50);
        bars[i].style.backgroundColor="rgb(53, 211, 153)"; 
    }
}


//set active state of the buttons
function setActive(){
    const links = document.querySelectorAll('.btn');
    if (links.length) {
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          links.forEach((link) => {
              link.classList.remove('active');
          });
          e.preventDefault();
          link.classList.add('active');
        });
      });
    }
}

function toggleBtns(){
    const btns = document.getElementsByClassName('btn');
    for(const btn of btns){
        btn.disabled = !isDisabled;
    }
    isDisabled=!isDisabled;
}

const Complexity = {
    "bubble": {
        best: "O(n)",
        avg : "O(n^2)",
        worst: "O(n^2)"
    },
    "insertion": {
        best: "O(n)",
        avg : "O(n^2)",
        worst: "O(n^2)"
    },
    "selection":{
        best: "O(n^2)",
        avg : "O(n^2)",
        worst: "O(n^2)"
    },
    "merge":{
        best: "O(nlogn)",
        avg : "O(nlogn)",
        worst: "O(nlogn)"
    }
}

//details
function setDetails(){
    detail.textContent = `Time Complexities 👉🏼  Best: ${Complexity[sortAlgo].best} | Average: ${Complexity[sortAlgo].avg} | Worst: ${Complexity[sortAlgo].worst}`;
    detail.style.fontFamily = 'Roboto';
    detail.style.fontStyle = "italic";
}