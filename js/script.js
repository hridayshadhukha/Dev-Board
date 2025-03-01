document.querySelectorAll(".complete-btn").forEach((button) => {
  button.addEventListener("click", 
  function (event) {
    event.preventDefault(); 

    alert("Board Updated Successfully");


    const value = document.getElementById("plus").innerText;
    const convertedValue = parseInt(value);
    const plusValue = document.getElementById("plus-1").innerText;
    const convertedPlusValue = parseInt(plusValue);
    
    const sum = convertedValue - 1;
    const plusSum = convertedPlusValue + 1;
    document.getElementById("plus").innerText = sum;
    document.getElementById("plus-1").innerText = plusSum;

    button.disabled = true;
    button.style.backgroundColor= "#d3d3d3";
    button.style.color = "#808080";

const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    const time = hour >= 12? "PM" : "AM";

    hour = hour % 12 || 12;
    minute = minute <10 ? "0" + minute : minute;
    second = second <10 ? "0" + second : second;

    const times = `${hour}:${minute}:${second} ${time}`;

    const cardTitle = button.closest(".card").querySelector(".card-title").innerText;

    const newText = `You have completed the task <br> ${cardTitle} at ${times} <br><br>`;

    document.getElementById("add-text").innerHTML += newText;

    if(sum === 0){
      alert("congrates!!! you have completed all the current task");
    }
  });
});

document.getElementById("click").addEventListener("click", 
function(event){
  event.preventDefault();
  window.location.href= "./blog.html";
})

function mainPage(){
  window.location.href = "./index.html";
}

document.getElementById("clear").addEventListener("click", 
function(event){
  document.getElementById("add-text").innerHTML = "";
})

const colors = ["#E0F2E7", "#FFEBES", "#E8F6EF", "#FAF3DD", "#E4F1FF", "#FFDEE9"];

let currentIndex = 0;

function changeColor(){
  document.body.style.backgroundColor = colors[currentIndex];

  currentIndex = (currentIndex + 1) % colors.length;
}

document.getElementById("color-change").addEventListener("click", changeColor);