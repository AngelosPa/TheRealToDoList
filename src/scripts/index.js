const create = () => {
  // 1. step
  const newElement = document.createElement("div");

  const newText = document.createTextNode("I am a new element 😉");

  // 2. step
  // div                  // text
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};
const addanewgamwproject = () => {
  //we grab the id with this queryselector
  let gamwuserdata = document.querySelector("#gamwuserdata");
  //we create with document.createElement("create smth"); our new li (it is empty at the first place)
  newlistitem = document.createElement("li");
  //we create document.createTextNode(put a text "hi" or a var) the upcoming text that will show up
  let textfromuser = document.createTextNode(gamwuserdata);
  //with this ourvar.appendChild(where to) we place our new var ->newlistitem inside the input
  newlistitem.appendChild(textfromuser);
};
