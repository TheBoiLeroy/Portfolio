import ProjectShowcase from "../components/ProjectShowcase";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="px-6 py-20 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      {projects.map((project) => (
        <ProjectShowcase key={project.title} {...project} />
      ))}
    </main>
  );
}
