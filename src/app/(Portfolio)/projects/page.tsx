import { Badge, Container, Group, Paper, Text, Title } from "@mantine/core";
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
          {projects.map((project) => (
            <ProjectShowcase key={project.title} {...project} />
          ))}
        </section>

        <Paper
          id="homelab-projects"
          component="section"
          radius="xl"
          className={styles.labIntro}
          aria-labelledby="homelab-heading"
        >
          <Group gap="xs">
            <Badge color="grape" variant="light">Vibe-coded</Badge>
            <Badge color="cyan" variant="light">Self-hosted on TrueNAS</Badge>
            <Badge color="lime" variant="light">Always evolving</Badge>
          </Group>
          <Title order={2} id="homelab-heading" className={styles.labTitle}>
            Built for my family,<br />hosted at home.
          </Title>
          <Text className={styles.labDescription}>
            These are living tools I prototype quickly with AI assistance, then
            test, refine, and maintain on my own server. They are my playground
            for local-first software, data ownership, and practical privacy.
          </Text>
        </Paper>

        <section className={styles.projectStack} aria-label="TrueNAS homelab projects">
          {truenasProjects.map((project) => (
            <ProjectShowcase key={project.title} {...project} />
          ))}
        </section>
      </Container>
    </main>
  );
}
