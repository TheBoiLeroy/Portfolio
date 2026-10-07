"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Badge,
  Box,
  Button,
  Group,
  Paper,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { ArrowUpRight, Check, ImageIcon, Sparkles } from "lucide-react";
import type { Project } from "@/app/(Portfolio)/data/projects";
import { toolMetadata } from "@/app/(Portfolio)/data/toolMetadata";
import styles from "./project-showcase.module.css";

export default function ProjectShowcase({
  title,
  description,
  images,
  tools,
  linkToProject,
  tdl,
  status,
  vibeCoded,
}: Project) {
  const [activeImage, setActiveImage] = useState(0);
  const active = images[activeImage];
  const externalLink = linkToProject?.startsWith("http") ? linkToProject : undefined;

  return (
    <Paper component="article" radius="xl" className={styles.card}>
      <div className={styles.copy}>
        <Group gap="xs">
          {status && (
            <Badge color="lime" variant="light" leftSection={<Sparkles size={12} />}>
              {status}
            </Badge>
          )}
          {vibeCoded && <Badge color="grape" variant="light">Vibe-coded</Badge>}
        </Group>

        <Title order={2} className={styles.title}>{title}</Title>
        <Text className={styles.description}>{description}</Text>

        {!!tools.length && (
          <Box mt="xl">
            <Text className={styles.label}>Built with</Text>
            <Group gap="xs" mt="sm">
              {tools.map((tool) => {
                const meta = toolMetadata[tool];
                return (
                  <Badge
                    key={tool}
                    size="lg"
                    variant="light"
                    color={meta ? undefined : "violet"}
                    leftSection={meta?.icon}
                    styles={meta ? { root: { color: meta.color, background: `${meta.color}18` } } : undefined}
                  >
                    {tool}
                  </Badge>
                );
              })}
            </Group>
          </Box>
        )}

        {!!tdl?.length && (
          <Box mt="xl">
            <Text className={styles.label}>Development roadmap</Text>
            <div className={styles.roadmap}>
              {tdl.map((raw) => {
                const checked = raw.trim().startsWith("[x]");
                const item = raw.replace(/^\[(x| )\]\s*/i, "");
                return (
                  <div key={raw} className={`${styles.roadmapItem} ${checked ? styles.checked : ""}`}>
                    <ThemeIcon
                      size="sm"
                      radius="sm"
                      color={checked ? "violet" : "gray"}
                      variant={checked ? "filled" : "outline"}
                    >
                      {checked && <Check size={12} />}
                    </ThemeIcon>
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </Box>
        )}

        {externalLink && (
          <Button
            component={Link}
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            radius="xl"
            color="violet"
            rightSection={<ArrowUpRight size={17} />}
            className={styles.projectLink}
          >
            View project
          </Button>
        )}
      </div>

      <div className={styles.visual}>
        <div className={styles.imageStage}>
          {active ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={active.src}
                initial={{ opacity: 0, scale: 0.975 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.22 }}
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={1200}
                  height={800}
                  className={styles.image}
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className={styles.emptyStage}>
              <ImageIcon size={42} />
              <Text size="sm" mt="sm">Build notes coming soon</Text>
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className={styles.thumbnails}>
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show image ${index + 1} for ${title}`}
                onClick={() => setActiveImage(index)}
                className={`${styles.thumbnail} ${activeImage === index ? styles.activeThumbnail : ""}`}
              >
                <Image src={image.src} alt="" fill sizes="74px" className={styles.image} />
              </button>
            ))}
          </div>
        )}
      </div>
    </Paper>
  );
}
