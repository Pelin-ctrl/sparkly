

document.addEventListener("DOMContentLoaded", function () {
    const cardAlice = document.querySelector(".card1"); // Только первая карточка
    const mainScreen = document.querySelector(".mainscreen"); // Первый экран
    const secondScreen = document.querySelector(".secondscreen"); // Второй экран

    cardAlice.addEventListener("click", function () {
        mainScreen.style.display = "none"; // Скрываем главный экран
        secondScreen.style.display = "flex"; // Показываем второй экран
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const changerButton = document.querySelector(".changer"); // Кнопка переключения
    const secondScreen = document.querySelector(".secondscreen"); // Второй экран
    const thirdScreen = document.querySelector(".thirdscreen"); // Третий экран

    // Переход со второго экрана на третий при клике на .changer
    changerButton.addEventListener("click", function () {
        secondScreen.style.display = "none"; // Скрываем второй экран
        thirdScreen.style.display = "flex"; // Показываем третий экран (flex для центрирования)
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const changer2Button = document.querySelector(".changer2"); // Кнопка на третьем экране
    const thirdScreen = document.querySelector(".thirdscreen"); // Третий экран
    const fourthScreen = document.querySelector(".fourthscreen"); // Четвертый экран

    // Переход с третьего экрана на четвертый при клике на .changer2
    changer2Button.addEventListener("click", function () {
        thirdScreen.style.display = "none"; // Скрываем третий экран
        fourthScreen.style.display = "flex"; // Показываем четвертый экран
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const changer3Button = document.querySelector(".changer3"); // Кнопка на четвертом экране
    const mainScreen = document.querySelector(".mainscreen"); // Главный экран
    const fourthScreen = document.querySelector(".fourthscreen"); // Четвертый экран

    // Переход с четвертого экрана на главный при клике на .changer3
    changer3Button.addEventListener("click", function () {
        fourthScreen.style.display = "none"; // Скрываем четвертый экран
        mainScreen.style.display = "flex"; // Показываем главный экран
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const changer5Button = document.querySelector(".changer4"); // Кнопка на пятом экране
    const fifthScreen = document.querySelector(".fifthscreen"); // Пятый экран
    const sixthScreen = document.querySelector(".sixthscreen"); // Шестой экран

    // Переход с пятого экрана на шестой при клике на .changer5
    changer5Button.addEventListener("click", function () {
        fifthScreen.style.display = "none"; // Скрываем пятый экран
        sixthScreen.style.display = "flex"; // Показываем шестой экран
    });
});



document.addEventListener("DOMContentLoaded", () => {
    // Находим все элементы с классом "draggable"
    const draggables = document.querySelectorAll(".draggable");

    // Применяем функцию dragElement ко всем найденным элементам
    draggables.forEach((el) => {
        dragElement(el);
    });

    function dragElement(elmnt) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.position = "absolute"; // Делаем позицию абсолютной, чтобы двигать
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
        console.log(`Top: ${elmnt.style.top}, Left: ${elmnt.style.left}`);
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
});
let rows = 3;
let columns = 3;

let currPuzzle;
let otherPuzzle;

const imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let puzzle = document.createElement("img");
            puzzle.hd = r.toString() + "-" + c.toString();
            puzzle.src = "img/sixthscreen/" + imgOrder.shift() + ".svg"; // Путь к картинкам

            puzzle.draggable = true; // Делаем изображения перетаскиваемыми
            puzzle.addEventListener("dragstart", dragStart);
            puzzle.addEventListener("dragover", dragOver);
            puzzle.addEventListener("dragenter", dragEnter);
            puzzle.addEventListener("dragleave", dragLeave);
            puzzle.addEventListener("drop", dragDrop);
            puzzle.addEventListener("dragend", dragEnd);
            
            document.getElementById("board").append(puzzle);
        }
    }
};

function dragStart() {
    currPuzzle = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
    otherPuzzle = this;
}

function dragEnd() {
    if (currPuzzle && otherPuzzle) {
        let currImg = currPuzzle.src;
        let otherImg = otherPuzzle.src;

        currPuzzle.src = otherImg;
        otherPuzzle.src = currImg;
    }
}
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clearBtn = document.getElementById("clearBtn");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "lightblue";  
ctx.lineWidth = 7;
ctx.lineCap = "round";

let drawing = false;

canvas.addEventListener("mousedown", () => (drawing = true));
canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.beginPath();
});
canvas.addEventListener("mousemove", draw);

function draw(event) {
    if (!drawing) return;
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
}


window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
document.addEventListener("DOMContentLoaded", function () {
    const rocket = document.querySelector(".rocket img");
    let x = 0; // Положение по оси X
    let y = 0; // Положение по оси Y

    document.querySelector(".right").addEventListener("click", function () {
        x += 20;
        rocket.style.transform = `translate(${x}px, ${y}px)`;
    });

    document.querySelector(".left").addEventListener("click", function () {
        x -= 20;
        rocket.style.transform = `translate(${x}px, ${y}px)`;
    });

    document.querySelector(".up").addEventListener("click", function () {
        y -= 20;
        rocket.style.transform = `translate(${x}px, ${y}px)`;
    });

    document.querySelector(".down").addEventListener("click", function () {
        y += 20;
        rocket.style.transform = `translate(${x}px, ${y}px)`;
    });
});
