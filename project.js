const projects = [
    {
        name: "SocialHub",
        description: "A social media app for sharing posts.",
        technologyUsed: ["Flutter", "Firebase"],
        year: 2024,
    },
    {
        name: "E-Commerce Platform",
        description: "An online shopping website.",
        technologyUsed: ["React", "Node.js", "MongoDB"],
        year: 2023,
    },
    {
        name: "Portfolio Website",
        description: "A personal portfolio website.",
        technologyUsed: ["HTML", "CSS", "JavaScript"],
        year: 2022,
    },
];

const projectListDiv = document.getElementById('project-list');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-container');

    const nameHeading = document.createElement('h3');
    nameHeading.textContent = `Project Name: ${project.name}`;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = `Description: ${project.description}`;

    const techParagraph = document.createElement('p');
    techParagraph.textContent = `Technology Used: ${project.technologyUsed.join(", ")}`;

    const yearParagraph = document.createElement('p');
    yearParagraph.textContent = `Year: ${project.year}`;

    const separator = document.createElement('div');
    separator.classList.add('separator');

    projectDiv.appendChild(nameHeading);
    projectDiv.appendChild(descriptionParagraph);
    projectDiv.appendChild(techParagraph);
    projectDiv.appendChild(yearParagraph);
    projectListDiv.appendChild(projectDiv);
    projectListDiv.appendChild(separator);

});
