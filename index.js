let turn = "X";
isGameOver = false

const turnChange = () => {
    return turn === 'X' ? 'O' : 'X';
}

const winner = () => {
    const win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    // const box = document.getElementsByClassName('box')
    const target = document.getElementsByClassName('target');
    win.forEach((e) => {
        if ((target[e[0]].innerText === target[e[1]].innerText) && (target[e[2]].innerText === target[e[1]].innerText) && (target[e[0]].innerText !== "")) {
            const info = document.querySelector('.info');
            info.style.display = "initial"
            info.innerText = "Congratulation '" + target[e[0]].innerText + "' ✨"
            isGameOver = true;

            if (isGameOver) {
                // Array.from(box).forEach((e)=>{

                // })
            }


        }
    })
}


const box = document.getElementsByClassName('box');
Array.from(box).forEach((ele) => {
    ele.addEventListener('click', () => {
        const target = ele.querySelector('.target');
        target.innerText = turn;
        turn = turnChange();
        winner();
        if (!isGameOver) {
            const first = document.getElementById("first");
            const second = document.getElementById("second");
            
            if(turn === 'X'){
                second.style.display = 'none';
                first.style.display = 'initial';
                first.style.width = '20em';
                second.style.width = '20em';
                first.innerText = `'X' is playing`

            }else if(turn === 'O'){
                first.style.display = 'none'
                second.style.display = 'initial'
                first.style.width = '20em';
                second.style.width = '20em';
                second.innerText = `'O' is playing`
            }
            // [0].innerText  = "Turn for " + turn;
        }
    })
})

    reset.addEventListener('click', resetBtn);
    function resetBtn() {
        const target = document.getElementsByClassName('target');
        Array.from(target).forEach((e) => {
            e.innerText = ""
        })
        const info = document.querySelector('.info');
        info.style.display = "none"
        turn = 'X'
    }