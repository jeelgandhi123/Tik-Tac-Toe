let boxes = document.querySelectorAll(".box");//for all boxes
let resetbtn = document.querySelector("#reset")//for reset btn

let messagecontainer = document.querySelector(".message-container");//winner msg
let msg = document.querySelector(".msg");
let newbtn = document.querySelector("#new");//new btn

let player_O = true;
let count = 0;

// here winning pattern applied
const winning_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// for draw game 
const gamedraw = () => {
    msg.innerText = `Game was a Draw.`;
    messagecontainer.classList.remove("hide");
    disabledbtn();
}
// for reset game function resegame
const resetgame = () => {
    player_O = true;
    count = 0;
    enablebtn();
    messagecontainer.classList.add("hide")
}
// function enablebtn
const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
// function disablebtn
const disabledbtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
// function showwinner
const showwinner = (winner) => {
    msg.innerText = `Congratulations!! winner is ${winner}`
    messagecontainer.classList.remove("hide");
    disabledbtn();
};

// here we aplied that when box was clicked which we want to print 
boxes.forEach((value) => {
    value.addEventListener("click", () => {
        if (player_O === true) {
            value.innerText = "O";
            player_O = false;
        }
        else {
            value.innerText = "X";
            player_O = true;
        }
        value.disabled = true;
        count++;

        let iswinner=checkwinner();

        if (count === 9 && !iswinner) {
            gamedraw();
        }
    })
});
// function checkwinner
const checkwinner = () => {
    for (pattern of winning_pattern) {
        let pos_1 = boxes[pattern[0]].innerText;
        let pos_2 = boxes[pattern[1]].innerText;
        let pos_3 = boxes[pattern[2]].innerText;

        if (pos_1 != "" && pos_2 != "" && pos_3 != "") {
            if (pos_1 === pos_2 && pos_2 === pos_3) {
                showwinner(pos_1);
                return true;
            }
        }
    }
}
newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
