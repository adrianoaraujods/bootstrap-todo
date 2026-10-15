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
      <button
        id="todo-check-btn-${index}"
        class="todo-check-btn btn btn-outline-secondary"
        type="button"
        title="Marcar como concluída"
        aria-label="Marcar tarefa como concluída"
        aria-pressed="false"
      >
        <i class="bi bi-check-lg"></i>
      </button>

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

  const checkButton = document.querySelector(`#todo-check-btn-${index}`);
  checkButton.addEventListener("click", (e) =>
    toggleItem(document.querySelector(`#todo-input-${index}`), checkButton),
  );

  const editButton = document.querySelector(`#todo-edit-btn-${index}`);
  editButton.addEventListener("click", (e) =>
    editItem(
      document.querySelector(`#todo-input-${index}`),
      document.querySelector(`#todo-edit-btn-${index}`),
    ),
  );

  const deleteButton = document.querySelector(`#todo-delete-btn-${index}`);
  deleteButton.addEventListener("click", (e) =>
    deleteItem(document.querySelector(`#todo-item-${index}`)),
  );

  addInput.value = "";
}

function toggleItem(input, button) {
  const checked = button.getAttribute("aria-pressed") !== "true";

  button.setAttribute("aria-pressed", String(checked));
  button.classList.toggle("btn-success", checked);
  button.classList.toggle("btn-outline-secondary", !checked);
  button.title = checked ? "Marcar como pendente" : "Marcar como concluída";
  button.setAttribute(
    "aria-label",
    checked ? "Marcar tarefa como pendente" : "Marcar tarefa como concluída",
  );

  input.classList.toggle("text-decoration-line-through", checked);
}

function editItem(input, button) {
  if (input.hasAttribute("readonly")) {
    button.innerHTML = `<i class="bi bi-floppy"></i>`;
    input.removeAttribute("readonly");
    input.focus();
  } else {
    button.innerHTML = `<i class="bi bi-pencil"></i>`;
    input.setAttribute("readonly", "");
  }
}

function deleteItem(item) {
  if (!item) return;

  confirm(
    "Você tem certeza que quer excluir essa tarefa? Essa ação não pode ser desfeita.",
  );

  item.remove();
}

addButton.addEventListener("click", (e) => addItem());
