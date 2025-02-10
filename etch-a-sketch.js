
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
    gridContainer.innerHTML = ""; // Clears the existing canvas. 

    let x = getUserCanvasSize();
    for (let i = 0; i < x; i++) {
        let temp = document.createElement("div"); 
        temp.classList.add("row");

        for (let j = 0; j < x; j++) {
            let temp2 = document.createElement("div"); 
            temp2.classList.add('single');
            // temp2.setAttribute("data-opaticty", "0");
            // temp2.style.backgroundColor = "black";
            // temp2.style.opacity = "0";
            temp.appendChild(temp2);
        }
        gridContainer.appendChild(temp);
    };

    // Attach event listers after creating the grid
    addDrawingListeners();
};

// Event listener for canvas size change button. Pass set cavnas by reference 
/** setCanvas (without ()) tells JavaScript to execture it when clicked. 
 * if with (), it immediately exectues once, so the event listener would never work properly.
 */
const canvasSizeBtn = document.querySelector(".canvasBtn"); 
canvasSizeBtn.addEventListener("click", setCanvas);

// Listener to determine if mouse is down and to draw on the canvas of div elements. 
let isDrawing = false; // toggle drawing mode. 

// function to add event listerers. To be called once a canvas is made. 
function addDrawingListeners() {
    const canvas = document.querySelectorAll(".single"); 
    
    canvas.forEach((spot) => {
        spot.addEventListener("click", () => {
            isDrawing = !isDrawing; // toggle drawing mode. 
        }); 

        spot.addEventListener("mousemove", (e) => {
            if (isDrawing) {
                e.target.setAttribute("style", `background: ${randomHexcolor()};`);
            }
        });
    });
};

function randomHexcolor() {
    let letters = "0123456789ABCDEF"; 
    let color = '#'; 
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; 
    }; 
    return color; 
};

// // Function to progressively darken a square using opacity
// function darkenSquare(square) {
//     let currentOpacity = parseFloat(square.getAttribute("data-opacity"));

//     if (currentOpacity < 1) {
//         currentOpacity = Math.min(1, currentOpacity + 0.1); // Increase by 0.1 (10%)
//     } else {
//         currentOpacity = 0; // Reset after full opacity
//     }

//     square.setAttribute("data-opacity", currentOpacity);
//     square.style.opacity = currentOpacity.toString(); // Apply new opacity
// }







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

