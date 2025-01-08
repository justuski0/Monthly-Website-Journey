// Array of projects
const projects = [
    {
        title: "January Project",
        description: "A website documenting my journey.",
        image: "assets/january.jpg", // Add a placeholder image here
        link: "#"
    },
    {
        title: "February Project",
        description: "Another awesome project.",
        image: "assets/february.jpg", // Add a placeholder image here
        link: "#"
    }
];

// Function to render projects
function renderProjects() {
    const gallery = document.querySelector(".project-grid");

    projects.forEach(project => {
        // Create project card
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        gallery.appendChild(projectCard);
    });
}

// Call the function to render projects
renderProjects();
