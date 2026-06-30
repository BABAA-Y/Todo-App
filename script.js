  let input = document.querySelector("#todoinput");
  let btn = document.querySelector("#todosave");
  let clr = document.querySelector("#todoclear");
  let space = document.querySelector("#todospace");

  const data = (todo) => {

    let item = document.createElement("div");
    let checkbox = document.createElement("input");
    let para = document.createElement("p");
    let bttn = document.createElement("button");
    let edit = document.createElement("input");
    let editbtn = document.createElement("button");

    para.textContent = todo.title;

    bttn.textContent = "remove item"
    bttn.addEventListener("click", () => {
      tododata = tododata.filter(item => item.id !== todo.id)
      localStorage.setItem("tododata", JSON.stringify(tododata));

      console.log(tododata);
      item.remove();
    });




    checkbox.type = "checkbox";
    checkbox.checked = todo.condition
    para.classList.toggle("check", todo.condition);

    checkbox.addEventListener("click", () => {
      todo.condition = checkbox.checked;
      para.classList.toggle("check", checkbox.checked);
      localStorage.setItem("tododata", JSON.stringify(tododata));

      console.log(tododata);  
    });


    editbtn.textContent = "Edit";
    editbtn.addEventListener("click", () => {
      if (edit.value.trim() === "") return;
      todo.title = edit.value;
      para.textContent = edit.value;
      localStorage.setItem("tododata", JSON.stringify(tododata));
      console.log(tododata);

      edit.value = "";
    });

    space.appendChild(item);
    item.appendChild(checkbox);
    item.appendChild(para);
    item.appendChild(edit);
    item.appendChild(editbtn);
    item.appendChild(bttn);
  }

  let tododata = JSON.parse(localStorage.getItem("tododata")) || [];

  console.log(tododata);

  tododata.forEach(todo => {
    console.log(tododata);
    data(todo);
  });

  btn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    let newtodo = {
      id: Date.now(),
      title: input.value,
      condition: false
    }

    tododata.push(newtodo);
    data(newtodo);

    localStorage.setItem("tododata", JSON.stringify(tododata));

    console.log(localStorage.getItem("tododata"));

    console.log(tododata);
    input.value = "";
  });

  clr.addEventListener("click", () => {
    space.textContent = "";
    tododata = [];
    localStorage.removeItem("tododata")
    console.log(tododata); 
  });