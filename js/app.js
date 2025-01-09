document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "January Project",
            description: "A website documenting my journey.",
            image: "assets/january.jpg",
            link: "#"
        },
        {
            title: "February Project",
            description: "Another awesome project.",
            image: "assets/february.jpg",
            link: "#"
        }
    ];

    function renderProjects() {
        const gallery = document.querySelector(".project-grid");

        projects.forEach(project => {
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

    renderProjects();
});
