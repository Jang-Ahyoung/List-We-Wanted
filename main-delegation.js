const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

let id = 0; // UUID
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="item__divider"></div>`;
  id++;
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
//  이벤트 위임
items.addEventListener('click', event => { // 부모 안에 원하는 타겟만 선택하여 이벤트 처리
  const id = event.target.dataset.id; // 데이터 아이디 지정해준 것
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
}); 

 