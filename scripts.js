
document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll(".post");
    const filterLinks = document.querySelectorAll(".sidebar a");

    filterLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const filter = link.getAttribute("data-filter");

            posts.forEach(post => {
                if (filter === "all" || post.getAttribute("data-category") === filter) {
                    post.style.display = "block";
                } else {
                    post.style.display = "none";
                }
            });
        });
    });
});
