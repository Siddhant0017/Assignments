const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userdata = input.value;

  if (!userdata) {
    alert("Please some task before submitting");
    return;
  }

  const task = document.createElement("div");
  task.classList.add("task");
  task.classList.add("mb-2");

  const content = document.createElement("div");
  content.classList.add("content");

  const taskinput = document.createElement("input");
  taskinput.classList.add("text");
  taskinput.classList.add("form-control");
  taskinput.classList.add("mb-2");
  taskinput.value = userdata;
  taskinput.setAttribute("readonly", "readonly");
  taskinput.type = "text";

  content.appendChild(taskinput);
  task.appendChild(content);
  tasks.appendChild(task);

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const taskedit = document.createElement("button");
  taskedit.classList.add("edit");
  taskedit.classList.add("btn");
  taskedit.classList.add("btn-warning");
  taskedit.innerHTML = "Edit";

  const taskdelete = document.createElement("button");
  taskdelete.classList.add("delete");
  taskdelete.classList.add("btn");
  taskdelete.classList.add("btn-danger");
  taskdelete.classList.add("mx-2");
  taskdelete.innerHTML = "Delete";

  actions.appendChild(taskedit);
  actions.appendChild(taskdelete);
  task.appendChild(actions);

  input.value = ""; //to make the input field blank

  //edit user data
  taskedit.addEventListener("click", () => {
    if(taskedit.innerHTML=='Edit'){
        taskinput.removeAttribute("readonly");
        taskinput.focus();
        taskedit.innerHTML = "Save";

    }else{
        taskinput.setAttribute("readonly", "readonly");
        taskedit.innerHTML = "Edit";

    }
    
  });

  //delete user date
  taskdelete.addEventListener("click", () => {
    tasks.removeChild(task);
  })
   
  
});
