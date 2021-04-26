const create = () => {
  // 1. step
  const newElement = document.createElement("div");

  const newText = document.createTextNode("I am a new element 😉");

  // 2. step
  // div                  // text
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};
const addanewourtask = () => {
  //we grab the value of this input with this querySelector
  let ouruserdata = document.querySelector("#ouruserdata").value;
  //we create with document.createElement("create smth"); our new li (it is empty at the first place)
  let newlistitem = document.createElement("li");
  //we create document.createTextNode(put a text "hi" or a var) the upcoming text that will show up
  let textfromuser = document.createTextNode(ouruserdata);
  //with this ourNiceBsElement.appendChild(what we place) we place our new textfromuser inside the newlistitem
  newlistitem.appendChild(textfromuser);
  // now we place our newlistitem inside our ul with the class name result
  document.querySelector(".result").appendChild(newlistitem);
  document.querySelector("#ouruserdata").value = "";
};
