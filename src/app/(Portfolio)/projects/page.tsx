import { Container } from "@mantine/core";
import ProjectShowcase from "../components/ProjectShowcase";
import { projects, truenasProjects } from "../data/projects";
import styles from "./projects-page.module.css";

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.texture} aria-hidden="true" />
      <Container size="xl" className={styles.content}>
        <section className={styles.projectStack} aria-label="Selected projects">
          {[...projects, ...truenasProjects].map((project) => (
            <ProjectShowcase key={project.title} {...project} />
          ))}
        </section>
      </Container>
    </main>
  );
}
