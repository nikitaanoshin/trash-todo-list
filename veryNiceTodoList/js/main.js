let list = document.querySelector('ul');

let todoStorage; 
function todoLocal() {
	todoStorage = list.innerHTML;
	localStorage.setItem('todoStorage', todoStorage);
}

list.addEventListener('click', function(ev){
	if(ev.target.tagName === 'LI'){
		ev.target.classList.toggle('checked');
		todoLocal();
	}
	else if(ev.target.tagName === 'SPAN'){
			let div = ev.target.parentNode;
			div.remove();
		todoLocal();
		}
	
}, false);

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
	let li = document.createElement('li');
	let inputValue = document.getElementById('toDoEl').value.trim();
	let t = document.createTextNode(inputValue);
	li.appendChild(t);

	if (inputValue == '') {
		const err = document.querySelector('input').placeholder = 'Вы ничего не ввели или ввели пустой запрос';
	} else{
		document.getElementById('list').appendChild(li);
	}
	document.getElementById('toDoEl').value = '';
	let span = document.createElement('SPAN');
	let txt = document.createElement('SPAN');
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);
	todoLocal();
});

	if(localStorage.getItem('todoStorage')) {
		list.innerHTML = localStorage.getItem('todoStorage');
	}