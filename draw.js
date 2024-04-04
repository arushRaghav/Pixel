let currInk = 'rgb(17,66,50)';
let currBack = 'rgb(247,246,187)';
let currSize = 30;

// grid generating function
function gen(size , colo ){
    console.log(size);
    let bo = document.body.getElementsByClassName('box')[0];
    for(let i=0;i<size*size;i++){
        let nd = document.createElement('div');
        nd.style.height = `${600/size}px`;
        nd.style.width = `${600/size}px`;
        nd.style.backgroundColor = colo;
        // nd.classList.add('content');
        bo.appendChild(nd);
    }
}

//taking input
function drawing(ink){
    let bo = document.body.getElementsByClassName('box')[0];
    bo.addEventListener('mousemove',(event)=>{
        if(event.buttons == 1)
        event.target.style.backgroundColor = ink;
        event.preventDefault();
    });
}

function changingColor(){
    let col = document.body.getElementsByClassName('colo')[0];
    col.addEventListener('change',(event)=>{
        currInk = event.target.value;
        drawing(currInk);
    });
}

function deleteNode(){
    let bo = document.getElementsByClassName('box')[0];
    while(bo.firstChild != null){
        bo.firstChild.remove();
    }
}

function changeBackground(){
    let col = document.body.getElementsByClassName('colo')[1];
    col.addEventListener('change',(event)=>{
        deleteNode();
        currBack = event.target.value;
        gen(currSize,currBack);
    });
}

//generating
gen(currSize,currBack);
drawing(currInk);
changingColor();
changeBackground();

window.addEventListener('load',()=>{
    let coo = document.body.getElementsByClassName('control')[0];
    let boo = document.body.getElementsByClassName('box')[0];
    coo.style.left = (coo.style.left - 300) + "px";
    coo.classList.add('animate');
    boo.style.left = (boo.style.left - 300) + "px";
    boo.classList.add('animate');
});