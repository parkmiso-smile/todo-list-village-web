document.getElementById('add-btn').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addTodo();
});

function addTodo() {
  const input = document.getElementById('todo-input');
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement('li');
  li.textContent = value;

  // 클릭하면 상태 변경: 기본 → 성공 → 실패
  li.addEventListener('click', function () {
    if (!li.classList.contains('done') && !li.classList.contains('failed')) {
      li.classList.add('done');
      addFlower(); // 성공 시 꽃 추가
    } else if (li.classList.contains('done')) {
      li.classList.remove('done');
      li.classList.add('failed');
    } else if (li.classList.contains('failed')) {
      li.classList.remove('failed');
    }
  });

  document.getElementById('todo-list').appendChild(li);
  input.value = '';
}

function addFlower() {
  const garden = document.getElementById('garden');
  const flower = document.createElement('img');
  flower.src = 'assets/flower.png'; // 실제 꽃 이미지 경로에 맞게 수정
  flower.alt = '꽃';
  garden.appendChild(flower);
}

