let box=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newbutton=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgcontainerhide=document.querySelector(".msg-container");
let turn0=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turn0===true){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disable=true;
        checkWinner();
    });
});
const resetGame=()=>{
    turn0=true;
    enablebox();
    msgcontainerhide.classList.add("hide");
}
const enablebox=()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
}
const disable=()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }
}
const showWinner=(winner)=>{
msg.innerText=`Congragulation Winner is ${winner}`;
msgcontainerhide.classList.remove("hide")
disable();
}
const checkWinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=box[pattern[0]].innerText;
        let pos2val=box[pattern[1]].innerText;
        let pos3val=box[pattern[2]].innerText;
        if(pos1val!="" && pos2val!=" " && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("Winner");
            showWinner(pos1val);
        }
        }
    }
};
newbutton.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);