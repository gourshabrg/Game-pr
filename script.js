var bt = document.querySelectorAll('.box');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  let cont=0;
  let flag=true;
bt.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(flag)
        {
            item.innerText='X';
            flag=false
        }
        else{
            item.innerText='O'
            flag=true;  
        }
        item.disabled=true;
        cont++;
        let isWinner = checkWinner();

        if (cont === 9 && !isWinner) {
          gameDraw();
        }
        
    });
    
});
let checkWinner =()=>{
    for(let pt of winPatterns)
    {
        let f = bt[pt[0]].innerText;
        let s=bt[pt[1]].innerText;
        let t=bt[pt[2]].innerText;
        console.log(` ${pt[0]} ${pt[1]} ${pt[2]}`);
        console.log(`${bt[pt[0]].innerText} ${bt[pt[1]].innerText} ${bt[pt[2]].innerText}`);
        
        
        if(f!="" && s!="" && t!="")
        {
            if(f==s&&s==t)
            {
                showWinner(f);
                return true;
            }
        }

    }
};

let showWinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disaBled()


}
let disaBled=()=>
{
    for(let box of bt)
        box.disabled=true;
}

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

  const enableBoxes = () => {
    for (let box of bt) {
      box.disabled = false;
      box.innerText = "";
    }
  };

  const resetGame = () => {
    flag = true;
    cont = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);