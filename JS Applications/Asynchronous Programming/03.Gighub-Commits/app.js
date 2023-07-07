async function loadCommits() {
    let usernameInput = document.getElementById("username");
    let repoInput = document.getElementById("repo");
    let username = usernameInput.value;
    let repo = repoInput.value;

    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    let commits = await fetch(url)
        .then(response => response.json());
  
    console.log(commits);
}