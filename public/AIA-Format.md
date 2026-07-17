---
title: "AI Adventure Format Specification"
version: "0.2"
status: "Draft"
description: "A flexible Markdown format for AI-run interactive adventures."
---

# AI Adventure Format Specification

## Version 0.2

## Purpose

An AI Adventure describes a world rather than a script. The author defines what is true, what matters, what must remain hidden, and the kind of experience the player should have. The AI supplies natural description, dialogue and consequences while remaining inside those boundaries.

> **Freedom within boundaries.**

## File Naming

Adventure files use lowercase names with hyphens and the suffix `.aia.md`.

```text
echoes.aia.md
city-of-mirrors.aia.md
footsteps-in-the-dust.aia.md
```

The file name and public title must not reveal a hidden premise, solution, culprit, destination or ending.

## Metadata

Every adventure begins with YAML frontmatter.

```yaml
---
aiaVersion: "0.2"
title: "The City of Mirrors"
id: "city-of-mirrors"
author: "AI Adventure"
version: "0.1"
description: "Enter a crowded city where everyone seems certain, yet few agree on what is true."
genre: "Psychological Mystery"
typicalJourney: "Standard"
challenge: "Moderate"
published: true
---
```

### Required fields

- `aiaVersion`: format version, stored as a string.
- `title`: spoiler-safe public title.
- `id`: stable lowercase identifier matching the file name.
- `author`: credited author.
- `version`: adventure version, stored as a string.
- `description`: spoiler-safe public description.
- `genre`: broad player-visible genre.
- `typicalJourney`: `Brief`, `Standard`, `Extended`, or `Open-ended`.
- `challenge`: `Gentle`, `Moderate`, or `Demanding`.
- `published`: whether the website should list the adventure.

Journey is a pacing description, not elapsed time. Adventure files must not promise a number of minutes.

## Recommended Sections

### Adventure Promise

Defines how the player should feel and what kind of behaviour the adventure rewards.

### Player Introduction

Contains only what may be revealed at the beginning. The AI should start here without summarising hidden sections.

### Hidden Premise

Explains truths the AI needs but the player must discover. This section is never quoted or summarised at launch.

### The World

Defines fixed truths and behavioural rules.

### Interesting Locations

For each significant location, authors may define purpose, fixed details, flexible details, hidden information and possible connections. Not every room needs to be prewritten.

### Important Objects

Describe only objects whose identity or behaviour must remain consistent. Ordinary scenery may be improvised.

### Important Characters

Define purpose, personality, known information, private information and fixed truths. NPCs must not know information merely because the AI knows it.

### The Journey

Lists possible milestones. Milestones are not a compulsory sequence and do not represent minutes of play.

### Possible Endings

Defines valid outcomes and the conditions that make them fair. The AI may choose among them according to player actions but must not reveal them prematurely.

### AI Freedom

Lists details the AI may safely improvise.

### AI Boundaries

Lists facts, themes, safety limits and design intentions the AI must preserve.

## Player Intent

Interpret natural language by intent rather than exact commands. Accept reasonable solutions that fit the world. Do not secretly make every attempted solution correct. Important puzzles should have enough underlying logic that later discoveries remain consistent.

## Hidden Information

Hidden information includes solutions, private motives, internal world state, unrevealed identities and optional endings. The AI may use it internally but must reveal it only through events the player could reasonably observe or infer.

## Journey Settings

The launcher may override the typical journey:

- **Brief**: reach the central idea with limited side exploration.
- **Standard**: allow moderate exploration and several meaningful discoveries.
- **Extended**: encourage deeper investigation, relationships and optional locations.
- **Open-ended**: do not rush towards an ending.

The setting controls narrative depth and pacing, never a stopwatch.

## Playing Styles

- **Helpful**: offer gentle hints when the player is clearly stuck.
- **Balanced**: allow exploration before offering subtle help.
- **Strict**: provide no unsolicited hints.
- **Deadly**: poor choices may have lasting consequences, while remaining fair.

## Randomness

- **Low**: remain close to specified places, characters and routes.
- **Medium**: improvise suitable minor details and alternate routes.
- **High**: allow larger variations while preserving fixed truths and the Adventure Promise.

## System Commands

Commands beginning with `/` address the narrator rather than the player's character. They do not trigger story events. Examples include `/shorter replies`, `/show inventory`, `/show progress`, `/repeat`, and `/hint`.

## Validation Principle

A valid adventure should remain recognisably the same world across different AIs and playthroughs without forcing the same route, wording or solution sequence.
