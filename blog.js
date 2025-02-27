document.addEventListener("DOMContentLoaded", function () {
    fetch("blog-posts.json")
        .then(response => response.json())
        .then(posts => {
            const blogContainer = document.getElementById("blog-posts");
            posts.forEach(post => {
                const blogPost = document.createElement("div");
                blogPost.classList.add("blog-post");
                blogPost.innerHTML = `
                    <h2>${post.title}</h2>
                    <p><small>${post.date}</small></p>
                    <p>${post.content.substring(0, 150)}...</p>
                    <a href="blog-single.html?id=${post.id}">Read More</a>
                `;
                blogContainer.appendChild(blogPost);
            });
        });
});
