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
    document.querySelector("#ouruserprojectdata").value = "";
    //ftiaxnoume divaki me 2 koubia
    const newbox = document.createElement("div");
    newbox.classList.add("basics");
    const koubidone = document.createElement("button");
    const koubidelete = document.createElement("button");
    const newprjectplaceholder = document.createElement("input");
    const importance = document.createElement("button");
    const timing = document.createElement("div");
    timing.innerHTML = `${new Date().getDate()}.${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`;
    importance.innerHTML = "important";
    //
    koubidone.innerHTML = "ready ✓";
    koubidelete.innerHTML = "let it go✗";
    newprjectplaceholder.placeholder = "useful notes";
    newprjectplaceholder.className = "forthenotbook";
    importance.className = "veryimportant";
    //
    // Injecting the buttons into the our box
    newbox.appendChild(koubidone);
    newbox.appendChild(koubidelete);
    newbox.appendChild(newprjectplaceholder);
    newbox.appendChild(importance);
    newbox.appendChild(timing);
    newListitem.appendChild(newbox);
    // Adding class

    koubidone.classList.add("done");
    // Complete function

    // Complete function
    // toggle will check if the class name exist, will remove it and if it's not will add it
    const checkit = () => {
      newListitem.classList.toggle("completed");
      newListitem.classList.toggle("completedopacity");
    };
    const changeColour = () => {
      newListitem.classList.toggle("veryImportantTriggeredlist");
      importance.classList.toggle("veryImportantTriggereButton");
      //importance.style.backgroundColor = "red";
      //newListitem.style.border = "5px solid red";
    };
    koubidone.addEventListener("click", checkit);
    importance.addEventListener("click", changeColour);
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
// Adding event listener to the input
// const userInput = document.querySelector("#userData");
// userInput.addEventListener("keypress", keyCheck);
