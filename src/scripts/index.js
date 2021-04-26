// old way
// document.write("Hi I am text");
//document.write("<h1> Hi h1>");

const addToGamwlist = (e) => {
  e.preventDefault();
  let ouruserprojectdata = document.querySelector("#ouruserprojectdata").value;

  console.log(ouruserprojectdata);
  if (ouruserprojectdata != "") {
    // ftiaxnoume ena li
    let newListitem = document.createElement("li");
    //rixnoume to text pou egrapse o user sto input mas
    let texti = document.createTextNode(ouruserprojectdata);
    //vazoume me .appendChild() to text tou giouzer mesa sto list mas
    newListitem.appendChild(texti);
    // Adding random colour to my list ama theloume
    //newListitem.style.color = "black";
    //rixnoume to newListitem mesa sto item me to //class name bigresult
    document.querySelector(".bigresult").appendChild(newListitem);
  } else {
    document.querySelector("#ouruserprojectdata").placeholder =
      "Please Enter text first";
  }
};
const addToList = (e) => {
  // Preventing the from sending information out aka Reloading the page
  e.preventDefault();
  let userData = document.querySelector("#userData").value;

  // Checking my input if it has a text
  if (userData != "") {
    let newLi = document.createElement("li");

    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    // Adding random colour to my list item
    newLi.style.color = colorGen();
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
    // Other way to add random colours for all of the list items that are in my page
    // const listItems = document.querySelectorAll("li");
    // listItems.forEach((item) => {
    //   item.style.color = colorGen();
    // });
    const newContainer = document.createElement("div");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    // const checkBox = document.createElement("input");
    // checkBox.type = "checkbox";
    // newContainer.appendChild(checkBox);
    // Adding some text
    doneButton.innerHTML = "✓";
    deleteButton.innerHTML = "✗";
    // Injecting the buttons into the container
    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);
    // Adding class
    doneButton.classList.add("done");
    newLi.appendChild(newContainer);
    // Complete function
    // toggle will check if the class name exist, will remove it and if it's not will add it
    const check = () => newLi.classList.toggle("completed");
    // const del = () => newLi.remove() ;
    // Adding event listener to my buttons
    deleteButton.addEventListener("click", () => newLi.remove());
    doneButton.addEventListener("click", check);
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};
// Random colour generator in hexa number
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};
// Functional check which key the user is pressing
const keyCheck = (event) => {
  console.log(event);
  if (e.key == "Enter") addToList();
};
// Adding event listener to the input
// const userInput = document.querySelector("#userData");
// userInput.addEventListener("keypress", keyCheck);

// Adding event listener to the form
document.querySelector("form").addEventListener("submit", addToGamwlist);
