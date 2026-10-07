"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  Paper,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from "@mantine/core";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Sparkles,
  Wrench,
} from "lucide-react";
import { timelineData } from "@/app/(Portfolio)/data/timeline";
import styles from "./timeline.module.css";

type TimelineEvent = {
  title: string;
  description: string;
  tools?: string;
};

type TimelineStep = {
  year: string;
  title?: string;
  description?: string;
  tools?: string;
  events?: TimelineEvent[];
};

const steps = timelineData as TimelineStep[];

function splitTools(value?: string) {
  return value
    ?.split(",")
    .map((tool) => tool.trim())
    .filter(Boolean) ?? [];
}

export default function InteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeStep = steps[activeIndex];

  const navigate = (index: number) => {
    if (index < 0 || index >= steps.length || index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const unlockedTools = useMemo(() => {
    const tools = new Set<string>();
    steps.slice(0, activeIndex + 1).forEach((step) => {
      splitTools(step.tools).forEach((tool) => tools.add(tool));
      step.events?.forEach((event) => {
        splitTools(event.tools).forEach((tool) => tools.add(tool));
      });
    });
    return [...tools];
  }, [activeIndex]);

  const progress = ((activeIndex + 1) / steps.length) * 100;

  return (
    <>
      <div className={styles.mobileRail}>
        {steps.map((step, index) => (
          <Button
            key={`${step.year}-${index}`}
            size="compact-md"
            radius="xl"
            variant={index === activeIndex ? "filled" : "light"}
            color={index === activeIndex ? "violet" : "gray"}
            onClick={() => navigate(index)}
            className={styles.mobileStep}
          >
            {step.year}
          </Button>
        ))}
      </div>

      <div className={styles.timelineGrid}>
        <Paper radius="xl" className={styles.rail}>
          <Group justify="space-between" px="sm" mb="sm">
            <Text size="xs" fw={900} tt="uppercase" c="dimmed" lts="0.12em">
              Chapters
            </Text>
            <Badge color="violet" variant="light">{activeIndex + 1}/{steps.length}</Badge>
          </Group>
          <Stack gap={3}>
            {steps.map((step, index) => (
              <UnstyledButton
                key={`${step.year}-${index}`}
                onClick={() => navigate(index)}
                className={`${styles.stepButton} ${index === activeIndex ? styles.activeStep : ""}`}
              >
                <Group gap="sm" wrap="nowrap">
                  <span className={styles.stepYear}>{step.year}</span>
                  <span className={styles.stepTitle}>
                    {step.title ?? step.events?.map((event) => event.title).join(" + ")}
                  </span>
                </Group>
              </UnstyledButton>
            ))}
          </Stack>
        </Paper>

        <div className={styles.storyColumn}>
          <Paper radius="xl" className={styles.storyCard}>
            <span className={styles.yearGhost} aria-hidden="true">{activeStep.year}</span>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 35 : -35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -35 : 35 }}
                transition={{ duration: 0.24 }}
                className={styles.storyContent}
              >
                <Group>
                  <ThemeIcon radius="xl" color="violet" variant="light">
                    <CalendarDays size={17} />
                  </ThemeIcon>
                  <Badge color="violet" variant="light">Chapter {activeIndex + 1}</Badge>
                </Group>

                {activeStep.events ? (
                  <>
                    <Title order={2} className={styles.storyTitle}>
                      Two projects.<br />One big year.
                    </Title>
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" className={styles.eventGrid}>
                      {activeStep.events.map((event) => (
                        <Paper key={event.title} radius="lg" className={styles.eventCard}>
                          <Text size="xs" c="violet.3" fw={900} tt="uppercase" lts="0.12em">
                            Project
                          </Text>
                          <Title order={3} mt="xs">{event.title}</Title>
                          <Text c="dimmed" size="sm" mt="sm">{event.description}</Text>
                          <Group gap="xs" mt="lg">
                            {splitTools(event.tools).map((tool) => (
                              <Badge key={tool} color="cyan" variant="light">{tool}</Badge>
                            ))}
                          </Group>
                        </Paper>
                      ))}
                    </SimpleGrid>
                  </>
                ) : (
                  <>
                    <Title order={2} className={styles.storyTitle}>{activeStep.title}</Title>
                    <Text className={styles.storyDescription}>{activeStep.description}</Text>
                    <Group gap="xs" className={styles.toolRow}>
                      {splitTools(activeStep.tools).map((tool) => (
                        <Badge key={tool} color="cyan" variant="light" size="lg">{tool}</Badge>
                      ))}
                    </Group>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <Group justify="space-between" className={styles.storyFooter}>
              <Button
                variant="subtle"
                color="gray"
                leftSection={<ArrowLeft size={17} />}
                disabled={activeIndex === 0}
                onClick={() => navigate(activeIndex - 1)}
              >
                Previous
              </Button>
              <ActionIcon
                size="xl"
                radius="xl"
                color="lime"
                variant="filled"
                aria-label="Next chapter"
                disabled={activeIndex === steps.length - 1}
                onClick={() => navigate(activeIndex + 1)}
              >
                <ArrowRight size={19} />
              </ActionIcon>
            </Group>
          </Paper>

          <Paper radius="xl" className={styles.toolCard}>
            <Group justify="space-between">
              <Group>
                <ThemeIcon color="orange" variant="light" radius="xl">
                  <Wrench size={17} />
                </ThemeIcon>
                <Box>
                  <Text fw={850}>Stack collected along the way</Text>
                  <Text size="xs" c="dimmed">{unlockedTools.length} tools unlocked</Text>
                </Box>
              </Group>
              <Sparkles size={20} color="#c084fc" />
            </Group>
            <Progress value={progress} color="violet" size="sm" radius="xl" mt="lg" />
            <Group gap="xs" className={styles.toolCloud}>
              {unlockedTools.length ? (
                unlockedTools.map((tool) => (
                  <Badge key={tool} variant="outline" color="grape">{tool}</Badge>
                ))
              ) : (
                <Text size="sm" c="dimmed">The toolbox starts in the next chapter.</Text>
              )}
            </Group>
          </Paper>
        </div>
      </div>
    </>
  );
}
