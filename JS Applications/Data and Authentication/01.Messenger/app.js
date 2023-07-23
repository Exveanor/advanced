function attachEvents() {
    const url = `http://localhost:3030/jsonstore/messenger`;
   
    const sendBtn = document.getElementById("submit");
    sendBtn.addEventListener("click", clickSendBtn);
   
    const refreshBtn = document.getElementById("refresh");
    refreshBtn.addEventListener("click", clickRefreshBtn);
   
    let authorName = document.querySelector(
      '#controls>input[name="author"][type="text"]'
    );
    let contentMessage = document.querySelector(
      '#controls>input[name="content"][type="text"]'
    );
   
   
   
    async function clickSendBtn() {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: authorName.value,
          content: contentMessage.value,
        }),
      });
   
      authorName.value = "";
      contentMessage.value = "";
      const data = await res.json();
    }
    async function clickRefreshBtn() {
      const textArea = document.getElementById("messages");
      //  console.log(textArea.value);
      const response = await fetch(url);
      const data = await response.json();
      const comments = [];
      let obj = Object.values(data).forEach((x) => {
        comments.push(`${x.author}: ${x.content}`);
        textArea.value = comments.join("\n");
      });
    }
  }
  attachEvents();