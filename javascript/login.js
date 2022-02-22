const id = document.querySelector('#id');

document.querySelector('form').addEventListener('submit', function (evt) {
  evt.preventDefault();
  // console.log(id.value);

  if (!id.value) {
    alert('아이디를 입력해주세요');
    id.value = '';
    id.focus();
  }
})