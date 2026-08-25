import { Container } from "@mantine/core";
import { Route } from "lucide-react";
import TimelineSteps from "@/app/(Portfolio)/components/HorizontalScrollTimeline";
import PortfolioPageHero from "@/app/(Portfolio)/components/PortfolioPageHero";
import styles from "./timeline-page.module.css";

export default function TimelinePage() {
  return (
    <main className={styles.page}>
      <div className={styles.texture} aria-hidden="true" />
      <PortfolioPageHero
        eyebrow="The long version"
        title="Small steps,"
        highlight="real momentum."
        description="A click-through story of the classes, side quests, team projects, and practical problems that shaped how I build."
        icon={<Route size="48%" />}
        color="violet"
      />
      <Container size="xl" className={styles.content}>
        <TimelineSteps />
      </Container>
    </main>
  );
}
