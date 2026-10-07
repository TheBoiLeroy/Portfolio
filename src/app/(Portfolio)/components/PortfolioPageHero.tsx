import type { ReactNode } from "react";
import { Badge, Container, ThemeIcon, Text, Title } from "@mantine/core";
import styles from "./portfolio-page.module.css";

type PortfolioPageHeroProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  icon: ReactNode;
  color?: string;
};

export default function PortfolioPageHero({
  eyebrow,
  title,
  highlight,
  description,
  icon,
  color = "violet",
}: PortfolioPageHeroProps) {
  return (
    <header className={styles.hero}>
      <Container size="xl" className={styles.heroInner}>
        <div>
          <Badge size="lg" variant="light" color={color}>
            {eyebrow}
          </Badge>
          <Title order={1} className={styles.title}>
            {title} <span>{highlight}</span>
          </Title>
          <Text className={styles.description}>{description}</Text>
        </div>
        <ThemeIcon
          size="auto"
          radius="xl"
          color={color}
          variant="light"
          className={styles.heroIcon}
        >
          {icon}
        </ThemeIcon>
      </Container>
    </header>
  );
}
