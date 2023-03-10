// var todoList = [];

// var input = document.getElementById("myText");
// input.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         addToList();
//     }
// });

// function addToList() {
//     var text = input.value;
//     if (text.trim() === "") {
//         return;
//     }
//     input.value = "";
//     todoList.push(text);
//     add();
// }

// function add() {
//     var ulList = document.getElementById("ul-list");
//     ulList.innerHTML = "";
//     todoList.forEach((text, index) => {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(text));
//         li.setAttribute("id", index);

//         var removeBtn = document.createElement("button");
//         removeBtn.setAttribute("class", "remove-button");
//         removeBtn.textContent = "remove";
//         removeBtn.onclick = () => {
//             removeFromList(index);
//         };

//         li.appendChild(removeBtn);
//         ulList.appendChild(li);
//     });
// }

// function removeFromList(index) {
//     // todoList = todoList.filter((val, i) => {
//     //     return index !== i;
//     // });

//     todoList = todoList.splice(index,1)
//     add();
// }


//version 2

var todoList = [];
var input = document.getElementById("myText");
input.addEventListener("keypress",function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); //brauzerlə bağlı bir şeydir
    addToList();
  }
});


function addToList() {
  var text = input.value;
  if (text.trim() === "") {
    return;
  }
  todoList.push({
    text: text,
    id:(Math.random() + 1).toString(36).substring(7),
  });
  // console.log(todoList);
  add(); 
  input.value = "";
}

function add(){
  var ulList = document.getElementById("ul-list");
  ulList.innerHTML = "";
  todoList.forEach((obj, index) => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(obj.text));
    li.setAttribute("id", obj.id);

    var removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "remove-button");
    removeBtn.textContent = "remove";
    removeBtn.onclick = () => {
      removeFromList(obj.id);
    };
    
    li.appendChild(removeBtn);
    ulList.appendChild(li);
});
}


function removeFromList(id){
  todoList = todoList.filter((val, i) => {
    return val.id !== id;
  });

  //   todoList = todoList.splice(index, 1);
  add();
}




