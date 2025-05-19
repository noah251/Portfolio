const projects = [
  {
    title: 'My Cool App',
    description: 'A brief summary of the app.',
    link: 'https://github.com/yourname/my-cool-app',
    image: '/assets/project1.png',
  },
  // Add more projects
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <div key={project.title}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
