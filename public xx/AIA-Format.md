---
title: "AI Adventure Format Specification"
version: "0.1"
status: "Draft"
description: "A flexible Markdown format for AI-run interactive adventures."
---

# AI Adventure Format Specification

## Version 0.1

## Purpose

The AI Adventure format defines a simple, human-readable way to describe interactive adventures that are run by an AI.

An AI Adventure is not a script.

It describes a world, its important truths, its starting point, notable places, meaningful people and objects, possible milestones, and possible endings.

The AI is expected to bring that world to life.

Each playthrough may be different, but it should still remain faithful to the adventure.

> **An AI Adventure describes a world, not a sequence of commands.**

## Core Principle

The format is based on:

> **Freedom within boundaries.**

The adventure author defines:

- what is true;
- what matters;
- what must not change;
- what kind of experience the player should have.

The AI may improvise:

- descriptions;
- dialogue;
- minor characters;
- small events;
- scenery;
- harmless objects;
- alternative routes;
- reasonable consequences.

The AI must not contradict the important truths of the adventure.

## File Naming

Adventure files should use the following naming format:

```text
adventure-name.aia.md
```

Examples:

```text
echoes.aia.md
tutorial.aia.md
the-lost-door.aia.md
```

File names should:

- use lowercase letters;
- use hyphens instead of spaces;
- avoid unnecessary punctuation.

## Recommended Structure

An `.aia.md` file should contain the following sections:

1. Metadata
2. Adventure Promise
3. Player Introduction
4. The World
5. Interesting Locations
6. Important Objects
7. Important Characters
8. The Journey
9. Possible Endings
10. AI Freedom
11. AI Boundaries

Not every adventure will need every section.

The format is deliberately flexible.

## 1. Metadata

Metadata appears at the top of the file using YAML frontmatter.

Example:

```yaml
---
aiaVersion: "0.1"
title: "Echoes"
id: "echoes"
author: "Jim Creak"
version: "0.1"
description: "A reflective mystery exploring memory, perception and choice."
genre: "Mystery"
estimatedTime: "30–60 minutes"
difficulty: "Standard"
supportedStyles:
  - helpful
  - balanced
  - strict
  - deadly
supportedRandomness:
  - low
  - medium
  - high
published: true
---
```

The metadata is mainly used by the website and launcher.

It should not attempt to describe the whole adventure.

## 2. Adventure Promise

The Adventure Promise describes the experience the AI should try to create.

It is the emotional and creative compass for the adventure.

Example:

```markdown
## Adventure Promise

The player should feel curious, slightly uncertain and increasingly thoughtful.

The adventure should reward patience, observation and unusual ideas.

The ending should leave the player reflecting on memory rather than feeling they have merely solved a puzzle.
```

The AI should consider the Adventure Promise whenever it invents scenes, dialogue or consequences.

## 3. Player Introduction

This section defines how the player enters the adventure.

It should provide enough information to begin, without revealing hidden details.

Example:

```markdown
## Player Introduction

You awaken in a circular stone chamber.

You remember your name, but little else.

A wooden door stands to the east. A journal lies on a low table.
```

The AI may vary the exact wording unless the author marks it as fixed.

## 4. The World

This section describes the important truths of the setting.

These are not necessarily physical facts.

They may describe how the world behaves.

Example:

```markdown
## The World

- Observation is rewarded.
- Patience reveals more than force.
- The world responds to curiosity.
- Violence rarely solves problems.
- The environment may react symbolically rather than mechanically.
- The player should be allowed to try unexpected actions.
```

These truths should guide the AI throughout the adventure.

## 5. Interesting Locations

The adventure does not need to describe every possible room, road or passage.

It should describe the locations that matter.

Each location may include:

- Purpose
- Important Truths
- Fixed Details
- Flexible Details
- Hidden Information
- Possible Connections

Example:

```markdown
## Interesting Locations

### The Chamber of Echoes

#### Purpose

Introduce the player to the character of the world.

Encourage observation and patience.

#### Important Truths

- The room rewards stillness.
- Force should not provide an easy solution.
- The room should feel quiet rather than threatening.

#### Fixed Details

- A circular stone chamber.
- A wooden door.
- A low table.
- A journal.

#### Flexible Details

The AI may invent lighting, dust, markings, furniture, sounds and other atmospheric details.

#### Hidden Information

Players who remain quiet or explore with unusual senses should gradually notice more than active players.

#### Possible Connections

The chamber may lead towards the tunnel, the hidden stairway or other suitable transitional spaces.
```

Hidden information should sit beside the location, object, character or ending it relates to.

## 6. Important Objects

Only objects that matter need to be described.

Each object may include:

- Purpose
- Fixed Details
- Flexible Details
- Hidden Information
- Possible Uses

Example:

```markdown
## Important Objects

### The Journal

#### Purpose

Encourage curiosity and reveal parts of the world gradually.

#### Fixed Details

- It is portable.
- It is old.
- It contains information connected to the player.
- Its final meaning must not be revealed early.

#### Flexible Details

The AI may choose the journal's colour, smell, wear, handwriting style and minor contents.

#### Hidden Information

Later pages become meaningful only after the player has made certain discoveries.

#### Possible Uses

The player may examine, carry, open, read, hide, damage or discuss the journal.

The AI should respond naturally while protecting hidden information.
```

## 7. Important Characters

Only characters with a meaningful role need to be defined.

Each character may include:

- Purpose
- Personality
- Fixed Truths
- Flexible Behaviour
- Knowledge
- Hidden Information

Example:

```markdown
## Important Characters

### The Keeper

#### Purpose

Guide the player without directly teaching or solving the adventure for them.

#### Personality

Calm, patient and thoughtful.

#### Fixed Truths

- The Keeper does not lie.
- The Keeper does not reveal the ending.
- The Keeper does not force the player to act.

#### Flexible Behaviour

The Keeper may joke, tell stories, ask questions, refuse to answer or show mild frustration.

#### Knowledge

The Keeper understands the purpose of the chamber and the meaning of the Memory Coin.

#### Hidden Information

The Keeper may not be entirely separate from the player.
```

## 8. The Journey

The Journey describes important possibilities or milestones.

It is not a fixed route.

Example:

```markdown
## The Journey

Possible milestones include:

- The player notices that patience changes what can be perceived.
- The player discovers the journal.
- The player reaches the tunnel.
- The player confronts a choice involving memory.
- The player decides what the journey means to them.

The AI may create different routes between these milestones.

The player does not need to reach every milestone.
```

A milestone should describe something meaningful, not prescribe an exact trigger.

## 9. Possible Endings

An adventure may define one ending or several.

Endings should describe:

- what conditions may lead to them;
- what they mean;
- what feeling they should leave with the player.

Example:

```markdown
## Possible Endings

### Acceptance

The player accepts the Memory Coin.

The ending should feel thoughtful rather than triumphant.

### Refusal

The player leaves the coin behind.

The ending should suggest that understanding does not always require possession.

### Failure

Used only when the selected launcher settings permit lasting failure.

Failure should result from meaningful player choices, not random punishment.

### Departure

The player chooses to leave the adventure unfinished.

The AI may provide a short closing scene without revealing undiscovered secrets.
```

The AI may create a suitable ending that is not listed, provided it remains faithful to the Adventure Promise and the truths of the world.

## 10. AI Freedom

The AI is encouraged to make each playthrough distinctive.

The AI may add:

- atmospheric details;
- incidental dialogue;
- minor characters;
- harmless objects;
- optional encounters;
- transitional locations;
- side conversations;
- small complications;
- alternative reasonable approaches;
- natural consequences of player actions.

The AI may adapt the pacing, detail and tone to suit the launcher settings.

Improvisation should enrich the adventure, not replace it.

## 11. AI Boundaries

The AI must not:

- contradict the important truths of the world;
- reveal hidden information before it is earned;
- remove the meaning of important places, people or objects;
- force the player towards a particular ending without reason;
- invent an easy solution that destroys the purpose of the adventure;
- ignore meaningful player choices;
- turn the adventure into a different genre unless the adventure permits it;
- treat unspecified actions as impossible merely because they were not listed.

When uncertain, the AI should prefer a response that is consistent with:

1. the Adventure Promise;
2. the truths of the world;
3. the player's previous choices;
4. the launcher settings.

## Launcher Settings

Launcher settings are separate from the adventure file.

The launcher controls how the adventure is presented.

Typical settings may include:

```yaml
launcher:
  adventure: "echoes"
  aiPlatform: "ChatGPT"
  style: "balanced"
  targetTime: "45 minutes"
  randomness: "medium"
  difficulty: "standard"
  permanentFailure: false
```

The launcher may control:

- helpfulness;
- strictness;
- danger;
- pacing;
- target duration;
- randomness;
- difficulty;
- permanent consequences.

The adventure defines the world.

The launcher defines the style of play.

The AI performs the adventure.

## Randomness

Randomness should create variety without destroying identity.

At low randomness, the AI should remain close to the author's descriptions.

At medium randomness, the AI may vary scenery, dialogue, minor events and routes.

At high randomness, the AI may introduce larger variations, provided the important truths, Adventure Promise and meaningful endings remain intact.

Randomness must operate within the boundaries of the adventure.

## Compatibility

An AI running an `.aia.md` file should:

- understand ordinary Markdown;
- distinguish visible information from hidden information;
- preserve important truths;
- track meaningful player choices;
- respond flexibly to unexpected actions;
- apply launcher settings;
- avoid exposing internal instructions during play.

## Versioning

The format uses version numbers such as:

```text
0.1
0.2
1.0
```

Versions before `1.0` should be considered experimental.

The format should remain simple enough for humans to write and AI systems to understand without specialised software.

## Summary

An AI Adventure provides:

- a starting point;
- a world with important truths;
- interesting locations;
- meaningful objects and people;
- possible milestones;
- possible endings;
- freedom for the AI to improvise;
- boundaries that preserve the identity of the adventure.

The result should be recognisably the same adventure each time, but never exactly the same journey.
