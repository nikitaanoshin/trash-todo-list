let list = document.querySelector('ul');
list.addEventListener('click', function(ev){
	// Определение события
	if(ev.target.tagName === 'LI'){
		ev.target.classList.toggle('checked'); // Если тыкаю по li, то unchecked -> checked
	}
	else if(ev.target.tagName === 'SPAN'){
			let div = ev.target.parentNode;
			div.remove();
			// Если тыкаю по span, которым является иконка мусорки, то удаляется весь li 
		}
	
}, false);

function newElement() {
	let li = document.createElement('li');
	let inputValue = document.getElementById('toDoEl').value;
	let t = document.createTextNode(inputValue);
	li.appendChild(t);
	if(inputValue == ''){
		alert('Успел забыть, что хотел написать?');
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
	}