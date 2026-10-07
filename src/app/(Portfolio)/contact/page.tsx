"use client";

import type { FormEvent } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import PortfolioPageHero from "../components/PortfolioPageHero";
import pageStyles from "../components/portfolio-page.module.css";
import styles from "./contact.module.css";

const channels = [
  {
    label: "Email",
    value: "ian6502011@gmail.com",
    href: "mailto:ian6502011@gmail.com",
    icon: Mail,
    color: "lime",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/santosian",
    href: "https://www.linkedin.com/in/santosian/",
    icon: Linkedin,
    color: "cyan",
  },
  {
    label: "GitHub",
    value: "github.com/TheBoiLeroy",
    href: "https://github.com/TheBoiLeroy",
    icon: Github,
    color: "grape",
  },
];

export default function ContactPage() {
  const composeEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio hello from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:ian6502011@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className={pageStyles.page}>
      <div className={pageStyles.texture} aria-hidden="true" />
      <PortfolioPageHero
        eyebrow="Open a conversation"
        title="Bring the question."
        highlight="We’ll find the shape."
        description="Have an idea, an opportunity, or a stubborn technical problem? Send the useful context and I’ll meet you there."
        icon={<MessageCircle size="48%" />}
        color="lime"
      />

      <Container size="xl" className={pageStyles.content}>
        <div className={styles.grid}>
          <Paper radius="xl" className={styles.side}>
            <Badge color="cyan" variant="light">Choose your channel</Badge>
            <Title order={2} mt="lg">Low ceremony.<br />Real conversation.</Title>
            <Text c="dimmed" mt="md" lh={1.7}>
              Email is best for project details. LinkedIn works for professional
              hellos, and GitHub is where the code lives.
            </Text>

            <Stack gap="sm" mt="xl">
              {channels.map(({ label, value, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={styles.channel}
                >
                  <Group wrap="nowrap">
                    <ThemeIcon color={color} variant="light" radius="lg">
                      <Icon size={17} />
                    </ThemeIcon>
                    <Box className={styles.channelCopy}>
                      <Text fw={850}>{label}</Text>
                      <Text size="xs" className={styles.channelValue}>{value}</Text>
                    </Box>
                    <ArrowUpRight size={16} />
                  </Group>
                </a>
              ))}
            </Stack>
          </Paper>

          <Paper radius="xl" className={styles.formCard}>
            <Group justify="space-between" align="flex-start">
              <Box>
                <Text size="xs" c="lime.4" fw={900} tt="uppercase" lts="0.14em">
                  Compose a note
                </Text>
                <Title order={2} mt="xs">What are we untangling?</Title>
              </Box>
              <ThemeIcon size="xl" radius="xl" color="lime" variant="light">
                <Send size={21} />
              </ThemeIcon>
            </Group>

            <form className={styles.form} onSubmit={composeEmail}>
              <TextInput
                name="name"
                label="Your name"
                placeholder="Ada Lovelace"
                required
                size="lg"
                radius="lg"
                className={styles.input}
              />
              <TextInput
                name="email"
                type="email"
                label="Your email"
                placeholder="ada@example.com"
                required
                size="lg"
                radius="lg"
                className={styles.input}
              />
              <Textarea
                name="message"
                label="The useful context"
                placeholder="A little about the idea, problem, or opportunity..."
                required
                minRows={7}
                autosize
                size="lg"
                radius="lg"
                className={styles.input}
              />
              <Group justify="space-between" mt="sm">
                <Text size="xs" c="dimmed">Opens your default email app—no form data is stored here.</Text>
                <Button type="submit" size="lg" radius="xl" color="lime" c="dark" rightSection={<Send size={17} />}>
                  Draft email
                </Button>
              </Group>
            </form>
          </Paper>
        </div>
      </Container>
    </main>
  );
}
