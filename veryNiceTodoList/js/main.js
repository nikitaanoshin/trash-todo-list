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

function newElement() {
	let li = document.createElement('li');
	let inputValue = document.getElementById('toDoEl').value;
	let t = document.createTextNode(inputValue);
	li.appendChild(t);
	if(inputValue == ''){
		alrtInput = prompt('Вы ничего не написали, напишите то, что хотите сделать!');
		alrtInput.value;
		t = document.createTextNode(alrtInput);
		li.appendChild(t);
		document.getElementById('list').appendChild(li);
	}
	else{
		document.getElementById('list').appendChild(li);
	}
	document.getElementById('toDoEl').value = '';
	let span = document.createElement('SPAN');
	let txt = document.createElement('SPAN');
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);
	todoLocal();
	}

	if(localStorage.getItem('todoStorage')) {
		list.innerHTML = localStorage.getItem('todoStorage');
	}