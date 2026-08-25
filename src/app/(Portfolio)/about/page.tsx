import Link from "next/link";
import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  ArrowUpRight,
  GraduationCap,
  HeartHandshake,
  Home,
  Languages,
  Lightbulb,
  LockKeyhole,
  UserRound,
} from "lucide-react";
import PortfolioPageHero from "../components/PortfolioPageHero";
import pageStyles from "../components/portfolio-page.module.css";
import styles from "./about.module.css";

const principles = [
  {
    title: "Useful beats flashy",
    description: "The best feature is the one that makes somebody’s real day a little easier.",
    icon: Lightbulb,
    color: "orange",
  },
  {
    title: "Privacy is a feature",
    description: "Local-first and self-hosted options matter when the data is personal.",
    icon: LockKeyhole,
    color: "cyan",
  },
  {
    title: "Build with people",
    description: "Good software comes from listening clearly, explaining choices, and iterating together.",
    icon: HeartHandshake,
    color: "grape",
  },
];

export default function AboutPage() {
  return (
    <main className={pageStyles.page}>
      <div className={pageStyles.texture} aria-hidden="true" />
      <PortfolioPageHero
        eyebrow="A little more context"
        title="Builder by habit."
        highlight="Human on purpose."
        description="I like software most when it leaves the screen and becomes part of somebody’s actual life."
        icon={<UserRound size="48%" />}
        color="orange"
      />

      <Container size="xl" className={pageStyles.content}>
        <div className={styles.grid}>
          <Paper radius="xl" className={`${styles.card} ${styles.story}`}>
            <Badge color="orange" variant="light">The short version</Badge>
            <Title order={2} mt="lg">I learn by making things that have somewhere to live.</Title>
            <Stack gap="md" mt="lg">
              <Text c="dimmed" lh={1.75}>
                I’m Ian, a UC Santa Cruz Computer Science graduate focused on
                full-stack development, AI-assisted workflows, and clean product
                design. My projects range from collaborative platforms to small
                household tools running on my own TrueNAS server.
              </Text>
              <Text c="dimmed" lh={1.75}>
                I’m drawn to practical problems: preserving a family recipe from a
                voice memo, making shared finances less confusing, or keeping family
                photos and genealogy private. The technology changes; the reason for
                building stays grounded.
              </Text>
            </Stack>
          </Paper>

          <Paper radius="xl" className={`${styles.card} ${styles.quickFacts}`}>
            <Text size="xs" fw={900} tt="uppercase" c="violet.3" lts="0.14em">Quick facts</Text>
            <Stack gap={0} mt="lg">
              <Group className={styles.fact}>
                <ThemeIcon color="violet" variant="light" radius="lg"><GraduationCap size={17} /></ThemeIcon>
                <Box><Text fw={850}>UC Santa Cruz</Text><Text size="xs" c="dimmed">B.S. Computer Science · 2024</Text></Box>
              </Group>
              <Group className={styles.fact}>
                <ThemeIcon color="cyan" variant="light" radius="lg"><Home size={17} /></ThemeIcon>
                <Box><Text fw={850}>San Mateo, California</Text><Text size="xs" c="dimmed">Building from the Bay Area</Text></Box>
              </Group>
              <Group className={styles.fact}>
                <ThemeIcon color="orange" variant="light" radius="lg"><Languages size={17} /></ThemeIcon>
                <Box><Text fw={850}>English + Spanish</Text><Text size="xs" c="dimmed">Comfortable collaborating in both</Text></Box>
              </Group>
            </Stack>
          </Paper>

          {principles.map(({ title, description, icon: Icon, color }) => (
            <Paper key={title} radius="xl" className={`${styles.card} ${styles.principle}`}>
              <ThemeIcon size="xl" radius="xl" color={color} variant="light">
                <Icon size={22} />
              </ThemeIcon>
              <Title order={3} mt="xl">{title}</Title>
              <Text c="dimmed" mt="sm" lh={1.7}>{description}</Text>
            </Paper>
          ))}

          <Paper radius="xl" className={`${styles.card} ${styles.closing}`}>
            <Box>
              <Text size="xs" fw={900} tt="uppercase" lts="0.14em">Keep exploring</Text>
              <Title order={2} mt="xs">The projects tell the longer story.</Title>
            </Box>
            <Group>
              <Button component={Link} href="/timeline" radius="xl" variant="white" color="dark">
                Timeline
              </Button>
              <Button
                component={Link}
                href="/projects"
                radius="xl"
                color="dark"
                rightSection={<ArrowUpRight size={17} />}
              >
                Projects
              </Button>
            </Group>
          </Paper>
        </div>
      </Container>
    </main>
  );
}
