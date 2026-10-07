"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Heart,
  Languages,
  Rocket,
  Server,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import styles from "./home.module.css";

const projectImages = {
  v1: {
    src: "/images/projectimgs/v1/simBossDash.png",
    alt: "The first ContractorWorks boss dashboard",
  },
  v2: {
    src: "/images/projectimgs/v2/BossDash.png",
    alt: "The redesigned ContractorWorks boss dashboard",
  },
};

const tools = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Django",
  "PostgreSQL",
  "Docker",
  "TrueNAS",
];

const homelabProjects = [
  { name: "Mise", note: "voice memo → recipe", icon: BookOpen },
  { name: "Family Finance", note: "shared budget lab", icon: Database },
  { name: "Family Tree", note: "private genealogy", icon: GitBranch },
  { name: "Photo Library", note: "local face search", icon: Heart },
];

export default function HomePage() {
  const [version, setVersion] = useState<"v1" | "v2">("v2");

  return (
    <main className={styles.page}>
      <div className={styles.gridTexture} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orbOne}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orbTwo}`} aria-hidden="true" />

      <Container size="xl" className={styles.container}>
        <section className={styles.hero}>
          <Stack gap="xl" className={styles.heroCopy}>
            <Badge
              size="lg"
              variant="light"
              color="lime"
              leftSection={<Sparkles size={14} />}
              className={styles.statusBadge}
            >
              Full-stack builder · San Mateo, CA
            </Badge>

            <Box>
              <Text className={styles.kicker}>Hi, I&apos;m Ian.</Text>
              <Title order={1} className={styles.heroTitle}>
                I turn everyday problems into{" "}
                <span>useful little systems.</span>
              </Title>
            </Box>

            <Text className={styles.heroDescription}>
              I&apos;m a UC Santa Cruz Computer Science graduate building thoughtful
              web products, AI-assisted experiments, and privacy-minded tools for
              real people—often from the server in my own home.
            </Text>

            <Group gap="md">
              <Button
                component={Link}
                href="/projects"
                size="lg"
                radius="xl"
                rightSection={<ArrowUpRight size={18} />}
                className={styles.primaryButton}
              >
                Explore my work
              </Button>
              <Button
                component={Link}
                href="/timeline"
                size="lg"
                radius="xl"
                variant="default"
                leftSection={<Rocket size={18} />}
                className={styles.secondaryButton}
              >
                My timeline
              </Button>
            </Group>

            <Group gap="sm" className={styles.heroTags}>
              <Badge variant="outline" color="grape">AI-assisted</Badge>
              <Badge variant="outline" color="cyan">Self-hosted</Badge>
              <Badge variant="outline" color="orange">English + Spanish</Badge>
              <Badge variant="outline" color="pink">Always tinkering</Badge>
            </Group>
          </Stack>

          <div className={styles.portraitStage}>
            <div className={styles.sparkleSticker} aria-hidden="true">✦</div>
            <div className={styles.codeSticker} aria-hidden="true">{`{ build: "joy" }`}</div>
            <Paper className={styles.portraitCard} radius="xl">
              <div className={styles.portraitFrame}>
                <Image
                  src="/webPP.jpg"
                  alt="Ian Santos"
                  width={560}
                  height={560}
                  priority
                  className={styles.portrait}
                />
              </div>
              <Group justify="space-between" align="flex-end" mt="lg">
                <Box>
                  <Text size="xs" tt="uppercase" fw={800} c="dimmed" lts="0.12em">
                    Current mode
                  </Text>
                  <Text fw={800} size="lg">Build · test · learn · repeat</Text>
                </Box>
                <ThemeIcon size="xl" radius="xl" color="lime" variant="light">
                  <Code2 size={22} />
                </ThemeIcon>
              </Group>
            </Paper>
          </div>
        </section>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" className={styles.statsRow}>
          <Paper className={`${styles.bentoCard} ${styles.statCard}`}>
            <Text className={styles.statNumber}>10</Text>
            <Text className={styles.statLabel}>years staying curious</Text>
          </Paper>
          <Paper className={`${styles.bentoCard} ${styles.statCard}`}>
            <GraduationCap size={26} className={styles.statIcon} />
            <Text className={styles.statNumber}>UCSC</Text>
            <Text className={styles.statLabel}>Computer Science · 2024</Text>
          </Paper>
          <Paper className={`${styles.bentoCard} ${styles.statCard}`}>
            <Languages size={26} className={styles.statIcon} />
            <Text className={styles.statNumber}>EN / ES</Text>
            <Text className={styles.statLabel}>ideas travel better in two languages</Text>
          </Paper>
        </SimpleGrid>

        <section className={styles.bentoGrid} aria-label="A snapshot of my work">
          <Paper className={`${styles.bentoCard} ${styles.currentBuild}`}>
            <Group justify="space-between" align="flex-start" mb="lg">
              <Box>
                <Badge color="violet" variant="light" mb="sm">Current build</Badge>
                <Title order={2} className={styles.cardTitle}>ContractorWorks</Title>
                <Text c="dimmed" maw={560}>
                  A mobile-first workspace for crews, contractors, job sites, and
                  timesheets—with every iteration getting clearer and faster.
                </Text>
              </Box>
              <ThemeIcon size={52} radius="xl" color="violet" variant="light">
                <WandSparkles size={25} />
              </ThemeIcon>
            </Group>

            <SegmentedControl
              value={version}
              onChange={(value) => setVersion(value as "v1" | "v2")}
              data={[
                { label: "First pass", value: "v1" },
                { label: "Latest pass", value: "v2" },
              ]}
              color="violet"
              radius="xl"
              className={styles.versionControl}
            />

            <div className={styles.projectPreview}>
              <Image
                key={version}
                src={projectImages[version].src}
                alt={projectImages[version].alt}
                width={1100}
                height={660}
                className={styles.projectImage}
              />
            </div>
          </Paper>

          <Paper className={`${styles.bentoCard} ${styles.homelabCard}`}>
            <Group justify="space-between" align="center" mb="md">
              <Box>
                <Text className={styles.eyebrow}>The homelab</Text>
                <Title order={2} className={styles.cardTitle}>Home server,<br />family-sized ideas.</Title>
              </Box>
              <ThemeIcon size={54} radius="xl" color="cyan" variant="light">
                <Server size={26} />
              </ThemeIcon>
            </Group>

            <Stack gap="sm" mt="xl">
              {homelabProjects.map(({ name, note, icon: Icon }) => (
                <Group key={name} className={styles.labProject} wrap="nowrap">
                  <ThemeIcon variant="light" color="cyan" radius="md">
                    <Icon size={16} />
                  </ThemeIcon>
                  <Box className={styles.labProjectCopy}>
                    <Text fw={800}>{name}</Text>
                    <Text size="xs" c="dimmed">{note}</Text>
                  </Box>
                  <ArrowUpRight size={15} className={styles.miniArrow} />
                </Group>
              ))}
            </Stack>

            <Button
              component={Link}
              href="/projects#homelab-projects"
              variant="subtle"
              color="cyan"
              mt="lg"
              px={0}
              rightSection={<ArrowUpRight size={16} />}
            >
              Visit the lab
            </Button>
          </Paper>

          <Paper className={`${styles.bentoCard} ${styles.toolboxCard}`}>
            <Group justify="space-between" mb="lg">
              <Box>
                <Text className={styles.eyebrow}>My toolbox</Text>
                <Title order={2} className={styles.cardTitle}>Tools change.<br />Curiosity sticks.</Title>
              </Box>
              <ThemeIcon size={50} radius="xl" color="orange" variant="light">
                <Code2 size={24} />
              </ThemeIcon>
            </Group>
            <Group gap="sm">
              {tools.map((tool, index) => (
                <Badge
                  key={tool}
                  size="lg"
                  radius="md"
                  variant={index % 3 === 0 ? "filled" : "light"}
                  color={["orange", "violet", "cyan", "pink"][index % 4]}
                  className={styles.toolBadge}
                >
                  {tool}
                </Badge>
              ))}
            </Group>
          </Paper>

          <Paper className={`${styles.bentoCard} ${styles.processCard}`}>
            <div className={styles.doodleArrow} aria-hidden="true">↝</div>
            <ThemeIcon size={50} radius="xl" color="lime" variant="light" mb="lg">
              <Sparkles size={24} />
            </ThemeIcon>
            <Text className={styles.eyebrow}>How I build</Text>
            <Title order={2} className={styles.cardTitle}>Vibe first.<br />Then make it real.</Title>
            <Text c="dimmed" mt="md" className={styles.processText}>
              I use AI to prototype quickly, then I slow down: test the edges,
              understand the code, protect the data, and own what ships.
            </Text>
          </Paper>

          <Paper className={`${styles.bentoCard} ${styles.timelineCard}`}>
            <Group justify="space-between" align="flex-start">
              <Box>
                <Text className={styles.eyebrow}>A tiny timeline</Text>
                <Title order={2} className={styles.cardTitle}>Still becoming.</Title>
              </Box>
              <ThemeIcon size={50} radius="xl" color="pink" variant="light">
                <Rocket size={24} />
              </ThemeIcon>
            </Group>
            <div className={styles.timelineList}>
              <div><strong>2016</strong><span>started learning to code</span></div>
              <div><strong>2024</strong><span>graduated from UC Santa Cruz</span></div>
              <div><strong>Now</strong><span>shipping, self-hosting, experimenting</span></div>
            </div>
            <Button
              component={Link}
              href="/timeline"
              variant="white"
              color="dark"
              radius="xl"
              rightSection={<ArrowUpRight size={16} />}
              className={styles.timelineButton}
            >
              See the whole story
            </Button>
          </Paper>
        </section>

        <Paper className={styles.closingCard}>
          <div>
            <Text className={styles.closingKicker}>Have a problem worth untangling?</Text>
            <Title order={2} className={styles.closingTitle}>Let&apos;s make something useful—and a little delightful.</Title>
          </div>
          <Button
            component={Link}
            href="/contact"
            size="lg"
            radius="xl"
            color="dark"
            rightSection={<ArrowUpRight size={18} />}
          >
            Say hello
          </Button>
        </Paper>
      </Container>
    </main>
  );
}
