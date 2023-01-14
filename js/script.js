const editField = document.getElementById('editFld');
console.log(editField);
function onPrintHandler() {
  const html = `<div>${editField.value}</div>`;
  document.getElementById('result').innerHTML = html;
  /*   document.getElementById('message').innerHTML = html; */
}
const onClearHandler = () => {
  editField.value = '';
  document.getElementById('result').innerHTML = '';
};
let message = document.getElementsByClassName('message');
console.log(message);
var show = function (elem) {
  elem.classList.add('is-visible');
};

document.addEventListener('click', (event) => {
 if (editField.value === '') return;
  show(document.getElementById('message').innerHTML = html);
  
}); 
