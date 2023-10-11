const projectsContainer = document.getElementById("projects-container");
const githubUsername = "DanielAntunes-dev";

const fetchGitHubProjects = async () => {
    try {
    const response = await fetch(
        `https://api.github.com/users/${githubUsername}/repos?sort=created&direction=desc`
    );
    const projects = await response.json();

    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
        <div class="w3-container">
            <img src="/img/github.png" alt="Imagem Padrão do Projeto" style="max-width: 200px;">
            <h5><a href="${project.html_url}" target="_blank" style="font-size:26px; text-decoration: none;">${project.name}</a></5>
            <hr>
        </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
    } catch (error) {
    console.error("Erro ao buscar os projetos do GitHub:", error);
    }
};

fetchGitHubProjects();
