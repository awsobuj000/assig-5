document.getElementById("logo-refresh")
    .addEventListener("click",
        function(){
            window.location.href = "./index.html";
        }
    );

document.getElementById("blog-html")
    .addEventListener("click",
        function(){
            window.location.href = "./blog.html";
        }
    );

const colors = ["#7096ff", "#c670ff", "#fa70ff", "#ff9170", "#a4ff70", "#F4F7FF"];
let index = 0;
document.getElementById("theme-btn")
    .addEventListener("click", function(){
        document.body.style.backgroundColor = colors[index];
        index++;
        if(index === colors.length){
            index = 0;
        }
    });
btnClicked("complete-1", "title-1", "message-container", "span-number", "body-number");

btnClicked("complete-2", "title-2", "message-container", "span-number", "body-number");

btnClicked("complete-3", "title-3", "message-container", "span-number", "body-number");

btnClicked("complete-4", "title-4", "message-container", "span-number", "body-number");

btnClicked("complete-5", "title-5", "message-container", "span-number", "body-number");

btnClicked("complete-6", "title-6", "message-container", "span-number", "body-number");

document.getElementById("clear-history")
    .addEventListener("click",
        function(){
            document.getElementById("message-container").innerText = " ";
        }
    );


const now = new Date();
const dateTime = now.toDateString().split(" ")[0];
const dateTime2 = now.toDateString().split(" ")[1];
const dateTime3 = now.toDateString().split(" ")[2];
const dateTime4 = now.toDateString().split(" ")[3];
// document.getElementById("day-date").innerText = dateTime;
const dayDateContainer = document.getElementById("day-date");
const div = document.createElement("div");
div.innerHTML = `
    <h1> ${dateTime}, </h1>
    <h1 class = "font-semibold"> ${dateTime2} ${dateTime3} ${dateTime4} </h1>
`;
dayDateContainer.appendChild(div);