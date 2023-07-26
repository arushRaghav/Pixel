
function generate(numb){
let big = document.body.getElementsByClassName("out")[0];
for(i=0;i<numb*numb;i++){

    let bo = document.createElement("div");
    bo.setAttribute("class","box");
    bo.style.width= `${800/numb}px`;
    bo.style.height = `${800/numb}px`;
    big.appendChild(bo);
}
}

function color(numb){

    let select = document.body.getElementsByClassName("box");

    let se = document.body.getElementsByClassName("out")[0];
    se.addEventListener("click",()=>{

    for(let i = 0;i<numb*numb;i++)
    {
        select[i].addEventListener("mouseover",()=>{
        select[i].style.backgroundColor = "black";
        });
    }
});
}

generate(50);
color(50);