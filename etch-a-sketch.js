
// Query selector for grid-container. 
const gridContainer = document.querySelector(".grid-container");



// Function to prompt the user for a grid size number. 
function getUserCanvasSize () {
    let num; 
    while (true) {
        let input = prompt("Enter a number between 1 and 100: "); 
        num = parseInt(input, 10);
        if (!isNaN(num) && num >= 1 && num <= 100) break;
        alert("Invalid input! Enter a valid integer between 1 and 100.");
    }; 
    return num; 
};

// Function to make the canvas with helpe function getUserCanvasSize()
function setCanvas () {
    gridContainer.innerHTML = "";

    let x = getUserCanvasSize();
    for (let i = 0; i < x; i++) {
        let temp = document.createElement("div"); 
        temp.classList.add("row");

        for (let j = 0; j < x; j++) {
            let temp2 = document.createElement("div"); 
            temp2.classList.add('single');
            temp.appendChild(temp2);
        }
        gridContainer.appendChild(temp);
    };

    // Attach event listers after creating the grid
    addDrawingListeners();
};

const canvasSizeBtn = document.querySelector(".canvasBtn"); 
canvasSizeBtn.addEventListener("click", setCanvas);

// Listener to determine if mouse is down and to draw on the canvas of div elements. 
let isDrawing = false; // toggle drawing mode. 

function addDrawingListeners() {
    const canvas = document.querySelectorAll(".single"); 
    
    canvas.forEach((spot) => {
        spot.addEventListener("click", () => {
            isDrawing = !isDrawing; // toggle drawing mode. 
        }); 

        spot.addEventListener("mousemove", (e) => {
            if (isDrawing) {
                e.target.setAttribute("style", "background: white;");
            }
        });
    });
};







// canvas.forEach((spot) => {
//     spot.addEventListener("mousedown", () => {
//         isDrawing = true;
//     });

//     spot.addEventListener("mouseup", () => {
//         isDrawing = false; 
//     }); 

//     spot.addEventListener("mousemove", (e) => {
//         if (isDrawing) {
//             e.target.setAttribute("style", "background: white;");
//         };
//     });
// });

// document.addEventListener("mouseup", () => {
//     isDrawing = false;
// });

