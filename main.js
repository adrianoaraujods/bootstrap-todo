const addInput = document.querySelector(`#add-input`);
const addButton = document.querySelector(`#add-btn`);

const todoList = document.querySelector(`#todo-list`);

function addItem() {
  if (!todoList) return;

  const { value } = addInput;
  if (!value || String(value).length === 0) {
    alert("O descrição da tarefa não pode estar vazio.");
    return;
  }

  const index = todoList.childElementCount;

  todoList.innerHTML += `<li id="todo-item-${index}" class="input-group">
  <input
    id="todo-input-${index}"
    type="text"
    class="form-control todo-text"
    value="${value}"
    aria-label="Descrição da Tarefa"
    readonly
  />

  <button
    id="todo-edit-btn-${index}"
    class="btn btn-outline-secondary"
    type="button"
    title="Editar"
    aria-label="Editar tarefa"
  >
    <i class="bi bi-pencil"></i>
  </button>
  
  <button
    id="todo-delete-btn-${index}"
    class="btn btn-outline-danger rounded-end"
    type="button"
    title="Excluir"
    aria-label="Excluir tarefa"
  >
    <i class="bi bi-trash"></i>
  </button>
</li>`;
}

addButton.addEventListener("click", (e) => addItem());
