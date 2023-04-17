const cells = document.querySelectorAll('.cell');
const out = document.querySelector('.out');
const timer = document.querySelector('.timer');


const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

updateCountDown = () => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.textContent = `${minutes} : ${seconds}`;
    time--;

    if(minutes == 0 && seconds == 0) {
        out.textContent = 'Проиграл'
        clearInterval(interval);
    }
}

let time = 60;
const interval = setInterval(updateCountDown, 1000);



const randomCells = () => {
    const randomCellsArray = [];
    for(let i = 0; i < 10; i++) {
        let randomNum = random(1, 100);
        if(!randomCellsArray.includes(randomNum)) {
            randomCellsArray.push(randomNum)
        } else {
            i--;
        }
    }

    return randomCellsArray;
}

const actived = [];

const checkedActived = () => actived.length == 10 ? true : false;

const randomCellsArray = randomCells();
console.log(randomCellsArray)
cells.forEach(item => {
    item.addEventListener('click', ()=> {
        if(randomCellsArray.includes(+item.textContent)) {
            item.classList.add('actived');
            actived.push('actived');
        }
        else item.classList.add('disabled');
        
        if(checkedActived()) {
            out.textContent = 'Вы нашли все ячейки'
            clearInterval(interval);
        }
    })
})