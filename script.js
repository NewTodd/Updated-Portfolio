document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully");

    // Smooth Scroll for Navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
    
            if (href.startsWith("#")) {  // Internal section scrolling
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            } else {  // External navigation (e.g., blog.html)
                window.location.href = href;
            }
        });
    });

    // Highlight Active Navigation Link
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        document.querySelectorAll("section").forEach(section => {
            let sectionTop = section.offsetTop - 60;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll("nav ul li a").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === sectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

    // Contact Icons Hover Effect
    document.querySelectorAll(".contact-item img").forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.1)";
            icon.style.transition = "0.3s ease-in-out";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        
    });

    // Skills Bar Animation
    const skillLevels = {
        html: "90%",
        css: "85%",
        js: "75%",
        git: "80%"
    };
    document.querySelectorAll(".skill-level").forEach(skill => {
        const skillClass = skill.classList[1];
        if (skillLevels[skillClass]) {
            skill.style.width = skillLevels[skillClass];
        }
    });

    // Project Image Hover Effect
    document.querySelectorAll(".project-img").forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.05)";
            img.style.transition = "transform 0.3s ease-in-out";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });

});
 // Blog Post Fade-in Animation
 const blogPosts = document.querySelectorAll(".blog-post");
 function revealBlogPosts() {
     blogPosts.forEach(post => {
         const position = post.getBoundingClientRect().top;
         const screenHeight = window.innerHeight / 1.2;
         if (position < screenHeight) {
             post.classList.add("visible");
         }
     });
 }
 window.addEventListener("scroll", revealBlogPosts);
 revealBlogPosts();

  // Blog Read More Functionality - Dynamic Blog Loading
  document.querySelectorAll(".blog-post a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const postId = this.getAttribute("data-id");
        window.location.href = `blog-single.html?id=${postId}`;
    });
});