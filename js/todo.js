const toDoForm = document.getElementById("todo-form"); //form
const toDoInput = toDoForm.querySelector("input"); //input
const toDoList = document.getElementById("todo-list"); //ul

let todos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(event) {
  //버튼 클릭된 Li
  const li = event.target.parentElement;
  li.remove();
  //로컬스토리지로 저장될 todos를 변경! filter 이용
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("span");
  button.classList.add("material-symbols-outlined");
  button.innerText = "check_circle";
  button.addEventListener("click", deleteToDo);
  li.append(span);
  li.append(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  //object 생성
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  todos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  //저장된 Localstroage가 있다면
  const parsedToDos = JSON.parse(savedToDos);
  //parsedToDos는 array! => forEach 사용하면 각 요소(item)에 접근 가능
  parsedToDos.forEach(paintToDo);
  todos = parsedToDos;
}
