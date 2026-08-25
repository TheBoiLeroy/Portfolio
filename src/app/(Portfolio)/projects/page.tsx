import { Container } from "@mantine/core";
import { Layers3 } from "lucide-react";
import ProjectShowcase from "../components/ProjectShowcase";
import PortfolioPageHero from "../components/PortfolioPageHero";
import { projects, truenasProjects } from "../data/projects";
import styles from "./projects-page.module.css";

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.texture} aria-hidden="true" />
      <PortfolioPageHero
        eyebrow="Selected work"
        title="Things I’ve made,"
        highlight="broken, and improved."
        description="Team projects, product experiments, and hands-on infrastructure work—each one taught me something worth carrying into the next build."
        icon={<Layers3 size="48%" />}
        color="cyan"
      />

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
