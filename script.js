// Text fade-in effect on scroll
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".section h2, .section p");

    function checkVisibility() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on load
});

// Adding class to trigger fade-in animation
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".home-content h1, .home-content p");
    fadeElements.forEach(element => {
        element.classList.add("visible");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const slugs = [
      "typescript",
      "javascript",
      "dart",
      "java",
      "react",
      "flutter",
      "android",
      "html5",
      "css3",
      "nodedotjs",
      "express",
      "nextdotjs",
      "prisma",
      "amazonaws",
      "postgresql",
      "firebase",
      "nginx",
      "vercel",
      "testinglibrary",
      "jest",
      "cypress",
      "docker",
      "git",
      "jira",
      "github",
      "gitlab",
      "visualstudiocode",
      "androidstudio",
      "sonarqube",
      "figma",
    ];
  
    const iconCloud = document.getElementById("icon-cloud");
    const radius = 300; // Sphere radius
    const totalIcons = slugs.length;
  
    slugs.forEach((slug, index) => {
      // Calculate spherical coordinates
      const theta = Math.acos(-1 + (2 * index) / totalIcons); // Vertical angle
      const phi = Math.sqrt(totalIcons * Math.PI) * theta; // Horizontal angle
  
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);
  
      // Create the icon element
      const icon = document.createElement("img");
      icon.classList.add("icon");
      icon.src = `https://cdn.simpleicons.org/${slug}`;
      icon.alt = slug;
      icon.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  
      // Append the icon to the cloud
      iconCloud.appendChild(icon);
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const socialIcons = document.querySelectorAll(".social-icons a");
    const contactFormContainer = document.querySelector(".contact-form-container");
    const hoveredIcon = document.querySelector(".hovered-icon");

    socialIcons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            contactFormContainer.classList.add("icon-hover"); // Hide form fields and show hovered icon
            const iconName = icon.getAttribute("data-icon"); // Get the icon name (facebook, twitter, etc.)
            hoveredIcon.innerHTML = `<img src="https://cdn.simpleicons.org/${iconName}" alt="${iconName}">`; // Display corresponding large icon
        });

        icon.addEventListener("mouseleave", () => {
            contactFormContainer.classList.remove("icon-hover"); // Show the form fields again
            hoveredIcon.innerHTML = ''; // Clear the hovered icon when mouse leaves
        });
    });
});
