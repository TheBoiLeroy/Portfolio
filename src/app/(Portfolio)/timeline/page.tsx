import { Container } from "@mantine/core";
import TimelineSteps from "@/app/(Portfolio)/components/HorizontalScrollTimeline";
import styles from "./timeline-page.module.css";

export default function TimelinePage() {
  return (
    <main className={styles.page}>
      <div className={styles.texture} aria-hidden="true" />
      <Container size="xl" className={styles.content}>
        <TimelineSteps />
      </Container>
    </main>
  );
}
