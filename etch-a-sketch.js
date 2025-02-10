

const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 64; i++) {
    let temp = document.createElement("div"); 
    temp.classList.add("row");
    // temp.textContent = "0"; 
    for (let j = 0; j < 64; j++) {
        let temp2 = document.createElement("div"); 
        temp2.classList.add('single');
        // temp2.textContent = "0"; 
        temp.appendChild(temp2);
    }
    gridContainer.appendChild(temp);
}

const canvas = document.querySelectorAll(".single"); 
let isDrawing = false; // toggle drawing mode. 
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