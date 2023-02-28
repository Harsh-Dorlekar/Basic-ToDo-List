const list = document.getElementById('list');
const input = document.getElementById('input');
const button = document.getElementById('button');
const button2 = document.getElementById('button2');

// Add new task
button.addEventListener('click', function() {
  // Create new list item
  let li = document.createElement('li');
  li.innerHTML = input.value;
  list.appendChild(li);
  // Clear input
  input.value = '';
});

button2.addEventListener('click', function(){
    list.innerHTML = '';
});

