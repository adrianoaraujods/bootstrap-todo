const addInput = document.querySelector(`#add-input`);
const addButton = document.querySelector(`#add-btn`);

const todoList = document.querySelector(`#todo-list`);

let head = 0;

function addItem() {
  if (!todoList) return;

  const { value } = addInput;
  if (!value || String(value).length === 0) {
    alert("O descrição da tarefa não pode estar vazio.");
    return;
  }

  const index = ++head;

  todoList.insertAdjacentHTML(
    "beforeend",
    `<li id="todo-item-${index}" class="input-group">
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
        class="todo-edit-btn btn btn-outline-secondary"
        type="button"
        title="Editar"
        aria-label="Editar tarefa"
      >
        <i class="bi bi-pencil"></i>
      </button>

      <button
        id="todo-delete-btn-${index}"
        class="todo-delete-btn btn btn-outline-danger rounded-end"
        type="button"
        title="Excluir"
        aria-label="Excluir tarefa"
      >
        <i class="bi bi-trash"></i>
      </button>
    </li>`,
  );

  const deleteButton = document.querySelector(`#todo-delete-btn-${index}`);
  deleteButton.addEventListener("click", (e) =>
    deleteItem(document.querySelector(`#todo-item-${index}`)),
  );

  addInput.value = "";
}

function deleteItem(item) {
  if (!item) return;

  item.remove();
}

addButton.addEventListener("click", (e) => addItem());
