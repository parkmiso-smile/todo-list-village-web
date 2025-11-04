function addTodo() {
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');
  const value = input.value.trim();

  if (!value) return;

  const li = document.createElement('li');
  li.textContent = `❤️ ${value}`;
  list.appendChild(li);

  input.value = '';
}
