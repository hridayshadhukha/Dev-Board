document.getElementById("btn-1").addEventListener("click", 
function(event){
  event.preventDefault();
  let userResponse = alert("Board Updated Successfully");

  const value = document.getElementById("plus").innerText;
  const convertedValue = parseInt(value);
  const plusValue = document.getElementById("plus-1").innerText;
  const convertedPlusValue = parseInt(plusValue);
  

  if(userResponse !== false){
    const sum = convertedValue - 1;
    const plusSum = convertedPlusValue + 1;
    const addText = "You have completed the task Fix Mobile Button Issue at ... AM";
    document.getElementById("plus").innerText= sum;
    document.getElementById("plus-1").innerText= plusSum;
    document.getElementById("add-text").innerHTML= "You have completed the task Fix <br> Mobile Button Issue at ... AM";
    document.getElementById("btn-1").disabled = true;
  }
})