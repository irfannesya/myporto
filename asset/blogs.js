const blogPosts = [
    {
        title: "My First Blog Post",
        content: "This is my very first blog post. Exciting!",
        author: "John Doe",
        date: "2023-08-14"
    },
    {
        title: "JavaScript Basics",
        content: "In this post, I'll cover some JavaScript basics for beginners.",
        author: "Jane Smith",
        date: "2023-08-15"
    }
];
function createBlogPosElement(post){
    const blogPostElement = document.createElement("article");
    blogPostElement.className = "blog-post";

    const titleElement = document.createElement("h2")
    titleElement.textContent = post.title;

    const authorElement = document.createElement("p")
    authorElement.textContent = `by ${post.author} on ${post.date}`;

    const contentElement = document.createElement("p");
    contentElement.textContent.textContent = post.content;

    blogPostElement.appendChild(titleElement);
    blogPostElement.appendChild(authorElement);
    blogPostElement.appendChild(contentElement);

    return blogPostElement;
}

const blogList = document.getElementById("blog-list");

function showBlogDetails(post){
    const detailContainer = document.getElementById("blog-detail");
    detailContainer.innerHTML="";

    const titleElement = document.createElement ("h2");
    titleElement.textContent = post.title;

    const authorElement = document.createElement("p");
    authorElement.textContent = `By ${post.author} on ${post.date}`;

    const createElement = document.createElement("p");
    authorElement.textContent = post.content;

    detailContainer.appendChild(titleElement);
    detailContainer.appendChild(authorElement);
    detailContainer.appendChild(contentElement);

}

blogPosts.forEach((post, index) => {
    const blogPostElement = createBlogPosElement(post);
    blogPostElement.addEventListener("click", ()=>{
        showBlogDetails(post);
    })
    blogList.appendChild(blogPostElement);

});