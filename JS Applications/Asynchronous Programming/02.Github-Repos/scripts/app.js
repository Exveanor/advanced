function loadRepos() {
	let input = document.getElementById("username");
	let ul = document.getElementById("repos");
	let username = input.value
	let url = `https://api.github.com/users/${username}/repos`;
	fetch(url).then(response => response.json()).then(data => {
		data.forEach(element => {
			let li = createLi(element.full_name, element.html_url);
			ul.appendChild(li);
		});
	});
}

function createLi(name, url) {
	let li = document.createElement("li");
	let a = document.createElement("a");
	a.textContent = name;
	a.href = url;
	li.appendChild(a);
	return li;
}