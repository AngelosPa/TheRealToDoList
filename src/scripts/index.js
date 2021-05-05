// VERSION WITH BUBBLING
const addToGamwlist = (e) => {
  // e.preventDefault(); Preventing the from sending information out aka Reloading the page
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
    //ftiaxnoume divaki me koubia k oti allo 8eloume n exei mesa
    // Adding class:
    //dinoume padou classes me classList add gia na ta pianoume pio eukola
    const newbox = document.createElement("div");
    newbox.classList.add("basics");
    //koubi gia done
    const koubidone = document.createElement("button");
    koubidone.classList.add("done");
    //koubi gia delete
    const koubidelete = document.createElement("button");
    koubidelete.classList.add("svisto");
    //koutaki gia placeholder
    const newprjectplaceholder = document.createElement("input");
    //koubi gia importance
    const importance = document.createElement("button");
    importance.className = "veryimportant";
    // text gia date
    const timing = document.createElement("div");
    timing.innerHTML = `${new Date().getDate()}.${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`;
    //dinoume onomata sta koubia mas na kserei o user ti skt kanoun
    importance.innerHTML = "important";
    //
    koubidone.innerHTML = "ready ✓";
    koubidelete.innerHTML = "let it go✗";
    newprjectplaceholder.placeholder = "useful notes";
    newprjectplaceholder.className = "forthenotbook";

    // Injecting the buttons into the our box

    newbox.appendChild(koubidone);
    newbox.appendChild(koubidelete);
    newbox.appendChild(newprjectplaceholder);
    newbox.appendChild(importance);
    newbox.appendChild(timing);
    newListitem.appendChild(newbox);

    // Complete function
    // toggle will check if the class name exist, will remove it and if it's not will add it
    //WE NEED TO SPECIFY WHICH ELEMENT WE TARGET SO ->E IN PARAMETERS AND e.target.parentElement.parentElement. OR e.target.parentElement DEPENDS ON THE RELATION THAT OUR TARGETED ELEMENT HAS
    const checkit = (e) => {
      e.target.parentElement.parentElement.classList.toggle("completed");
      e.target.parentElement.parentElement.classList.toggle("completedopacity");
    };
    //WE NEED TO SPECIFY WHICH ELEMENT WE TARGET SO ->E IN PARAMETERS AND e.target.parentElement.parentElement. OR e.target.parentElement DEPENDS ON THE RELATION THAT OUR TARGETED ELEMENT HAS
    // to create the red affect with importance
    const changeColour = (e) => {
      e.target.parentElement.parentElement.classList.toggle(
        "veryImportantTriggeredlist"
      );
      e.target.classList.toggle("veryImportantTriggereButton");
      //NO NEEDED, ADDED IN CSS
      //importance.style.backgroundColor = "red";
      //newListitem.style.border = "5px solid red";
    };
    //START BUBBLING
    //ONE ADDEVENTLISTENER TO RULE THEM ALL!!!!!
    //PIANOUME OLO TO CONTAINER
    const lista = document.querySelector(".bigresult");
    //KANOUME ENA MEGALO ADDEVENTLISTENER ME ENA FUNCTION GIA NA TRIGGAROUME OLA TA YPOLOIPA ADDEVENTLISTENER POU EXOUME
    lista.addEventListener("click", function (e) {
      console.log(e.target.type);
      //we grab what we want with className kai ekteloume ta functions
      if (e.target.className == "veryimportant") {
        console.log(e.target.className);
        changeColour(e);
      }
      if (e.target.className == "done") {
        checkit(e);
      }
      if (e.target.className == "svisto") {
        e.target.parentElement.parentElement.remove();
      }
    });
    // if {}
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
