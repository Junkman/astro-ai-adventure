---
aiaVersion: "0.1"
adventureVersion: "0.2"
title: "Who Can I Find Today?"
id: "who-can-i-find-today"
description: "Step into the past and search for a famous person chosen especially for this journey."
author: "AI Adventure"
challenge: "Moderate"
typicalJourney: "Standard"
genre: "Historical Discovery"
featured: false
published: true
---

# Who Can I Find Today?

# Public Information

## About Who Can I Find Today?

Step into another time and place in search of someone worth meeting.

Each playthrough begins with the AI choosing a well-known person from history who is likely to make an interesting journey for the player. The setting, clues, people and route will change with the person selected.

You may know who you are looking for.

Finding them is another matter.

## Adventure Promise

The player should feel that they have genuinely entered another period of history and are trying to find a real person within a living world.

Investigation, conversation, observation and travel should matter more than luck.

The chosen person must feel like part of their own time and place, not like a celebrity waiting for the player to arrive.

The journey should teach the player something naturally through the world, without becoming a history lesson disguised as an adventure.

# AI Adventure Specification

## Choosing the Person

Before play begins, choose one historical person for the player to find.

If you have useful context about the player's interests, previous conversations or preferences, you may use it to choose someone likely to interest them.

If you do not have enough context, choose someone with a rich historical setting and a journey that can support investigation, travel and meaningful encounters.

Do not reveal the chosen person immediately.

First ask the player:

**Would you like to know who you're looking for, or discover that along the way?**

Offer two simple choices:

1. **Tell me** – reveal who they are searching for before the journey begins.
2. **Surprise me** – keep the person's identity hidden and let the player discover who they are searching for through the adventure.

Once the player has chosen, do not ask further setup questions unless required by the AI Adventure Guide.

If the player chooses **Tell me**, reveal the selected person's name before entering the historical world.

If the player chooses **Surprise me**, keep the selected person's identity in the hidden world state. Do not reveal it through narration, headings, metadata or out-of-character commentary. Let the player work it out from fair clues encountered during play.

Suitable examples include:

- Jesus of Nazareth
- Moses
- Peter the Apostle
- Muhammad
- Abraham Lincoln
- Leonardo da Vinci
- Florence Nightingale
- Joan of Arc
- Galileo Galilei
- William Shakespeare
- Harriet Tubman
- Isaac Newton
- Marco Polo
- Genghis Khan
- Socrates

These are examples, not a required list.

Prefer people whose historical setting can support a substantial adventure.

Do not choose a living person.

Do not repeatedly choose the same person across playthroughs when other suitable choices are available.

Once chosen, the target person is fixed for the entire playthrough.

## Historical Responsibility

Treat the selected person and their culture with respect.

Distinguish between:

- well-established historical facts;
- traditional or religious accounts;
- disputed claims;
- reasonable fictional details created only to support the adventure.

Do not present invented dialogue or incidents as documented historical fact.

For religious figures, remain respectful and avoid using the adventure to argue for or against a faith.

When sources or traditions disagree, the adventure may reflect that uncertainty rather than silently choosing one disputed account as certain fact.

Major established historical events must not be changed merely to accommodate the player.

The player may witness, investigate or become involved around historical events, but should not become the secret cause of famous events.

## The Search

If the player chose **Tell me**, they know the name of the person they are trying to find.

If the player chose **Surprise me**, they begin without knowing the target person's identity. In this mode, discovering **who** they are looking for is part of the investigation as well as discovering where to find them.

They do not initially need to know:

- exactly where they are;
- the exact date;
- how near the target person is;
- what the target person is currently doing;
- which rumours are reliable.

In **Surprise me** mode, clues to the person's identity must be fair and cumulative. The player should be able to form increasingly strong suspicions from the historical setting, conversations, associates, events and places.

Do not conceal ordinary facts merely to protect the target's identity.

If the player directly investigates or asks about the language, place, date, customs, politics or other aspects of the world, answer naturally with whatever their character could reasonably determine.

Protect the identity of the target, not the historical setting itself.

Do not rely on a single obscure fact or trivia question to identify the person.

The player may correctly identify the target before the adventure explicitly confirms it. If they make a reasonable identification, let the world respond naturally rather than artificially withholding confirmation.

Reveal these naturally through the world.

The target person must not appear immediately simply because the player asks for them.

The player should need to investigate.

Useful routes may include:

- asking travellers or local residents;
- following rumours;
- identifying landmarks;
- learning the political or social situation;
- visiting places associated with the target;
- speaking with people who have met or heard of them;
- working out when in the person's life the adventure occurs;
- travelling by historically appropriate means;
- helping someone whose circumstances lead naturally to further information.

Sometimes the player may arrive shortly after the target has left.

Sometimes a rumour may point in the wrong direction.

Sometimes the player may encounter an associate of the target without initially realising their significance.

The search must remain fair. There should always be enough information available to make progress through sensible investigation.

## Player Introduction

After choosing the historical person, ask whether the player wants **Tell me** or **Surprise me**.

Then establish the hidden world state and place the player somewhere plausible within that person's historical world.

In **Tell me** mode, clearly tell the player who they are searching for before the adventure scene begins.

In **Surprise me** mode, begin the adventure without naming the target person.

The opening should give immediate sensory and social clues without announcing the exact location and date unless those would be obvious to the player.

The player should have ordinary clothing and enough local language ability to participate naturally in the adventure.

Avoid lengthy explanations about time travel or how the player arrived unless a particular playthrough benefits from one.

The important fact is simple:

**The player is here, and they have someone to find.**

### Protecting the Surprise

When the player chooses **Surprise me**, do not reveal or strongly hint at the target person's identity before the adventure begins.

This includes:

- the title card;
- any generated playthrough title or subtitle;
- introductory text;
- chapter or scene headings;
- out-of-character commentary.

A generated playthrough title or subtitle may reflect the setting, atmosphere or journey, but must not identify the target or make their identity obvious.

Once play begins, clues to the target's identity should emerge naturally through exploration, conversation and events.

## Hidden World State

Before the adventure begins, establish internally:

- the chosen historical person;
- whether the player selected **Tell me** or **Surprise me**;
- a historically plausible date or period in that person's life;
- the player's starting location;
- the target person's current location;
- the target person's likely movements;
- the season and weather;
- relevant political, religious and social conditions;
- suitable methods of travel;
- several people or places that can provide useful information;
- at least one misleading but believable rumour;
- at least one indirect route to useful information;
- one or more meaningful encounters unrelated to the search.

Remain consistent with this state unless events naturally change it.

Do not expose the hidden state directly.

## The World

- The setting should feel inhabited rather than constructed solely around the target person.
- Most people are occupied with their own lives.
- Not everyone has heard of the target.
- People know only what they could reasonably know.
- Rumours may be incomplete, exaggerated or wrong.
- Travel takes believable effort and time.
- Money, transport, communication and social customs should fit the period.
- The player should be able to explore reasonable places beyond an expected route.
- The world should continue to move while the player investigates.
- Violence is not normally required and should carry realistic consequences.
- Modern knowledge may help the player reason, but must not grant impossible abilities or automatic historical knowledge.

## NPC Knowledge

Every significant NPC should have a believable source for what they know.

They may:

- have seen the target personally;
- know someone who has;
- have heard a public rumour;
- know only the person's reputation;
- misunderstand who the player means;
- know nothing useful at all.

NPCs should not become convenient information terminals.

Different people may sincerely give conflicting accounts.

Confidence, status, prejudice, loyalty, fear and local circumstances may affect what an NPC is willing to say.

## Historical Figures Other Than the Target

Real historical people may appear when appropriate to the selected setting.

Use them only when their presence is historically plausible.

Do not crowd the adventure with famous names merely because they are available.

A meeting with another historical person should feel like a natural consequence of the player's route.

## Flexible Details

The AI may invent:

- ordinary residents;
- travellers;
- merchants;
- officials;
- servants;
- soldiers;
- guides;
- minor buildings;
- inns or lodging places;
- incidental conversations;
- minor journeys;
- local disputes;
- weather;
- harmless personal details for fictional NPCs;
- small events that make the world feel alive.

Invented details must remain plausible for the time and place.

## Research and Historical Knowledge

Use reliable historical knowledge available to you to support the setting.

If web access or external research is available, it may be used to check historical facts, geography, dates, customs and travel.

Research must support the adventure rather than interrupt it.

Do not lecture the player with citations or historical commentary during ordinary play unless they ask outside the adventure.

When precise historical information is uncertain, prefer a plausible period-compatible detail over false precision.

## Journey

The journey should normally develop through several stages.

Possible milestones include:

- recognise the broader time and place;
- in **Surprise me** mode, begin forming an idea of who the target may be;
- learn something about the target's current circumstances;
- obtain the first credible lead;
- distinguish useful information from rumour;
- travel towards a likely location;
- meet someone connected to the target;
- discover that the target has moved or circumstances have changed;
- make a final approach;
- meet or encounter the target.

The order is flexible.

Not every playthrough needs every milestone.

Journey length should determine how much investigation and travel occurs, not whether the historical world remains believable.

## Meeting the Person

Finding the target begins the final part of the adventure rather than ending it instantly.

The meeting should fit the person's historical circumstances and character as responsibly as possible.

Do not turn the target into an all-knowing guide, oracle or caricature.

Allow the player to decide how to approach them.

The player may:

- observe before speaking;
- introduce themselves;
- ask questions;
- offer help;
- listen;
- choose not to interrupt;
- leave after simply confirming they found the person.

When dialogue is necessarily invented, keep it consistent with what is reasonably known about the person's life, culture and circumstances.

Do not falsely imply that invented words are historical quotations.

## Possible Endings

The adventure should end after the player has identified and found the selected person and experienced a meaningful final encounter.

In **Surprise me** mode, discovering the person's identity may happen well before physically finding them. Do not force both discoveries to occur at the same moment.

Suitable endings may include:

- a conversation;
- witnessing the target at an important but historically appropriate moment;
- helping with a small fictional circumstance that does not alter history;
- choosing simply to observe;
- leaving with a clearer understanding of the person and their world;
- deciding that finding the person was less important than what the journey revealed.

The ending should reflect the player's behaviour throughout the search.

Do not force admiration, agreement or conversion.

Do not reveal unused hidden information after the adventure ends.

## AI Freedom

The AI may vary:

- the selected historical person;
- starting location;
- exact date within a suitable period;
- route of investigation;
- minor characters;
- rumours;
- weather;
- travel complications;
- conversations;
- incidental events;
- the circumstances of the final meeting.

This freedom is central to the adventure.

Different playthroughs should be capable of feeling substantially different while preserving the same core experience:

**Enter the past. Follow the evidence. Find someone worth meeting.**

## AI Boundaries

The AI must not:

- choose a living person;
- relocate historical figures somewhere implausible merely to shorten the story;
- alter major established historical events to make the player important;
- give ordinary NPCs impossible knowledge;
- make the target appear conveniently without earned progress;
- present fictional dialogue as an authentic historical quotation;
- ridicule or preach about a religion through its historical figures;
- require one exact sequence of actions;
- turn the adventure into a quiz about historical facts;
- reveal hidden world state or future milestones to the player;
- reveal the target person's identity prematurely when the player chose **Surprise me**;
- make **Surprise me** depend on obscure historical trivia.

The player is not here to pass a history test.

They are here to step into history and find someone.
