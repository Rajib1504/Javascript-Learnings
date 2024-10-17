console.log("im connected");
function post() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));

  function displayPosts(data) {
    console.log(data);
    for (const post of data) {
      console.log(post.title);

      const postscontainer = document.getElementById("posts-container");
      postscontainer.classList.add("bg");
      const div = document.createElement("div");
      div.innerHTML = `
    <h2>user- ${post.userId}</h2>
    <h3>id-${post.id}</h3>
    <h3>title-${post.title}</h3>
    <p>body- ${post.body}</p>
    <hr>
    `;
      postscontainer.appendChild(div);
    }
  }
}
window.onload = post();
