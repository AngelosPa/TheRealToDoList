// old way
// document.write("Hi I am text");
//document.write("<h1> Hi h1>");

const addToGamwlist = (e) => {
  // Preventing the from sending information out aka Reloading the page
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
    //vazoume me .appendChild() to list item mas mesa sto bigresult mas
    document.querySelector(".bigresult").appendChild(newListitem);
    //ftiaxnoume divaki me 2 koubia
    const newbox = document.createElement("div");
    const koubidone = document.createElement("button");
    const koubidelete = document.createElement("button");

    koubidone.innerHTML = "ready ✓";
    koubidelete.innerHTML = "let it go✗";
    newbox.appendChild(koubidelete);
    newbox.appendChild(koubidone);
    newListitem.appendChild(newbox);
    // Complete function
    // toggle will check if the class name exist, will remove it and if it's not will add it
    const checkit = () => newListitem.classList.toggle("completed");
    koubidone.addEventListener("click", checkit);
    // const del = () => newLi.remove() ;
    // Adding event listener to my buttons
    koubidelete.addEventListener("click", () => newListitem.remove());
  } else {
    document.querySelector("#ouruserprojectdata").placeholder =
      "write here your task...";
  }
};
// Adding event listener to the form
document.querySelector("form").addEventListener("submit", addToGamwlist);
const keyCheck = (e) => {
  //console.log(event);
  if (e.key == "Enter") addToGamwlist(e);
};
// const addToList = (e) => {
//   let userData = document.querySelector("#userData").value;

//   // Checking my input if it has a text
//   if (userData != "") {
//     let newLi = document.createElement("li");

//     let text = document.createTextNode(userData);
//     newLi.appendChild(text);

//     document.querySelector(".result").appendChild(newLi);
//     document.querySelector("#userData").value = "";
//     const newContainer = document.createElement("div");
//     const doneButton = document.createElement("button");
//     const deleteButton = document.createElement("button");

//     // const checkBox = document.createElement("input");
//     // checkBox.type = "checkbox";
//     // newContainer.appendChild(checkBox);
//     // Adding some text
//     doneButton.innerHTML = "✓";
//     deleteButton.innerHTML = "✗";

//     // Injecting the buttons into the container
//     newContainer.appendChild(doneButton);
//     newContainer.appendChild(deleteButton);

//     // Adding class
//     doneButton.classList.add("done");
//     newLi.appendChild(newContainer);
//     // Complete function
//     // toggle will check if the class name exist, will remove it and if it's not will add it
//     const check = () => newLi.classList.toggle("completed");
//     // const del = () => newLi.remove() ;
//     // Adding event listener to my buttons
//     deleteButton.addEventListener("click", () => newLi.remove());
//     doneButton.addEventListener("click", check);
//   } else {
//     document.querySelector("#userData").placeholder = "Please Enter text first";
//   }
// };
