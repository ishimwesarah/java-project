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

projects.forEach(project => {
    // Using console.log
    console.log("--- Project Information ---");
    console.log(`Project Name: ${project.name}`);
    console.log(`Description: ${project.description}`);
    console.log(`Technology Used: ${project.technologyUsed.join(", ")}`);
    console.log(`Year: ${project.year}`);

    // Using document.write (Note: This is typically discouraged)
    document.write(`<div class="project-container">`);
    document.write(`<h3>Project Name: ${project.name}</h3>`);
    document.write(`<p>Description: ${project.description}</p>`);
    document.write(`<p>Technology Used: ${project.technologyUsed.join(", ")}</p>`);
    document.write(`<p>Year: ${project.year}</p>`);
    document.write(`</div><div class="separator"></div>`);

});