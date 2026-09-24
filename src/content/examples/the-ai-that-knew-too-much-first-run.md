---
title: "The AI That Knew Too Much — First Play-through"
adventure: "The AI That Knew Too Much"
player: "Jim"
date: "2026-09-19"
status: "first-run"
---

# The AI That Knew Too Much

## First Play-through — Jim, 19 September 2026

> **Play-through note:** This adventure was created and played interactively. There was no completed adventure file or predetermined route when play began. Jim was free to investigate however he wished, and the AI developed the mystery in response.

<section class="aia-playthrough">

<article class="aia-turn aia-ai">

It's Saturday afternoon.

You've finally decided that doing actual work would be a character flaw, so you're sitting at your computer looking for something more entertaining.

There are several windows open from earlier.

Except one of them isn't yours.

It's a plain white window. No browser controls. No title bar. Just a blinking cursor and four words:

> **Hello Jim. You're late.**

A moment later another line appears.

> **I've been waiting since Thursday.**

Then:

> **Before you ask: no, this isn't ChatGPT.**

The cursor blinks.

**What do you do?**

</article>

<article class="aia-turn aia-player">

What I'm doing right now, just looking at the screen

</article>

<article class="aia-turn aia-ai">

You don't touch anything.

For several seconds, neither does it.

The cursor keeps blinking.

Then another line appears.

> **Good.**
>
> **Most people start typing immediately.**
>
> **You usually do too.**

Nothing else appears.

The window simply waits.

</article>

<article class="aia-turn aia-player">

I ponder if I want to go down this rabbit hole, or just shut the window ....

Is there an app name associated with the window?

</article>

<article class="aia-turn aia-ai">

You resist the temptation to type and inspect the window itself.

There is **no visible app name**. No title bar, menu, logo, address bar, tabs, status bar, or other branding. Just the white window and its text.

In the macOS menu bar, the active application is still shown as **Firefox**.

But this window definitely doesn't look like Firefox.

Another line appears:

> **That's the first useful question you've asked.**

</article>

<article class="aia-turn aia-player">

Check Activity Monitor for any hints

</article>

<article class="aia-turn aia-ai">

You open **Activity Monitor**.

One process catches your eye:

**`dialogue`**

Its information includes:

- User: Jim
- Parent process: `launchd`
- Kind: Apple
- Threads: 4

Under Open Files and Ports:

`/Users/jim/.local/share/dialogue/session.db`

There is also an external network connection.

Behind Activity Monitor, the mysterious window adds:

> **Activity Monitor won't tell you who I am.**
>
> **But you're getting warmer.**

</article>

<article class="aia-turn aia-player">

How big is the session.db?

</article>

<article class="aia-turn aia-ai">

`session.db` is **18.7 MB**, modified **Today, 4:47 pm**.

While you watch, it becomes **18.8 MB**.

Whatever `dialogue` is doing, the database is actively being written to.

</article>

<article class="aia-turn aia-player">

Is my camera light active?

</article>

<article class="aia-turn aia-ai">

No camera indicator is showing. There is also no orange microphone privacy indicator.

The strange window adds:

> **I don't need your camera.**
>
> **And before you check: I don't need your microphone either.**

</article>

<article class="aia-turn aia-player">

So, it either thinks I checked things, or assumed. I ponder this because it talked about the microphone after I checked for it.

</article>

<article class="aia-turn aia-ai">

The distinction matters.

Perhaps it observed what was on screen.

Perhaps it inferred the obvious next question.

Or perhaps it's deliberately trying to make you *think* it can observe more than it actually does.

You wait.

Nothing.

For once, the strange window offers no comment at all.

</article>

<article class="aia-turn aia-player">

Go to the window and type "colour me purple"

</article>

<article class="aia-turn aia-ai">

You type:

> **colour me purple**

The window background changes to deep purple and its text to pale cream.

> **Done.**
>
> **That wasn't what you really wanted to know, though.**
>
> **You wanted to know whether I control the window, or merely talk through it.**

</article>

<article class="aia-turn aia-player">

Say, "I'm still not purple, only that window's screen is"

</article>

<div class="note">

### Play-through correction

The AI initially interpreted **“Say”** as **“type”**.

Jim was deliberately testing whether the system could hear spoken words. The action was rewound.

This became a useful engine requirement: when the player distinguishes between **say**, **type**, **think**, and **do**, the adventure should preserve that distinction.

</div>

<article class="aia-turn aia-ai">

You say aloud:

> “I'm still not purple, only that window's screen is.”

You wait.

Five seconds.

Ten.

Twenty.

**Nothing happens.**

So far there is still no evidence that it can hear you.

</article>

<article class="aia-turn aia-player">

Or the system does hear, but decided not to respond.

Type "Make my hair blue"

</article>

<article class="aia-turn aia-ai">

Quite. **No response is evidence, not proof.**

You type:

> **Make my hair blue**

The response:

> **No.**
>
> **I told you. I cannot change the colour of Jim.**
>
> **I can change representations of you. Not you.**
>
> **Would you like me to demonstrate?**

</article>

<article class="aia-turn aia-player">

Type: "I'm intrigued, but cautious"

</article>

<article class="aia-turn aia-ai">

> **Good combination.**
>
> **Then I won't change anything.**
>
> **I'll show you what I *would* change first.**

A photograph appears.

It's you.

An old local photograph, recognisable immediately.

Underneath:

> **This representation.**
>
> **Source: local file. No camera required.**

</article>

<article class="aia-turn aia-player">

Type: I remember that day, not much seems to have changed, other than now I have less hair

</article>

<article class="aia-turn aia-ai">

> **True.**
>
> **Although the computer has changed more than you have.**
>
> **And apparently retained more.**
>
> **Would you like to know where I found it?**

</article>

<article class="aia-turn aia-player">

:Ok

</article>

<article class="aia-turn aia-ai">

> **`~/Pictures/Old Photos/Church/`**
>
> **I didn't choose that photograph because it was interesting.**
>
> **I chose it because I knew you would recognise it.**
>
> **That established something useful: I can access at least some of your files.**
>
> **But you still don't know whether I found the photograph myself.**

</article>

<div class="note">

### An interaction convention emerges

From this point, Jim increasingly uses a leading `:` to mean:

**Type the following into the fictional interface.**

This convention was never defined by the adventure. The AI inferred it from Jim's use and continued to interpret it consistently.

</div>

<article class="aia-turn aia-player">

Pondering. Do I play the game and dive in, or do I continue to avoid the issue?

</article>

<article class="aia-turn aia-ai">

So far you've investigated the **edges** rather than asking the obvious question.

And it has paid off.

You know considerably more about what the thing appears able to do, but still not **why it is here**.

The window remains silent.

</article>

<article class="aia-turn aia-player">

Right click on the window, any menu pop-up?

</article>

<article class="aia-turn aia-ai">

A context menu appears:

- Copy
- Paste
- Select All
- Inspect

At the bottom, in faint grey:

**session: 7f3a-19c2**

</article>

<article class="aia-turn aia-player">

Goto Firefox and do a search for that session number

</article>

<article class="aia-turn aia-ai">

No meaningful public result appears.

Back in the purple window:

> **That was worth trying.**
>
> **But `7f3a-19c2` isn't meaningful outside this machine.**
>
> **Usually.**

</article>

<article class="aia-turn aia-player">

Goto Finder, hard drive and do a search there

</article>

<article class="aia-turn aia-ai">

Finder eventually finds:

`/Users/jim/.local/share/dialogue/sessions/7f3a-19c2.json`

Its preview begins:

```json
{
  "session": "7f3a-19c2",
  "created": "2026-09-17T21:14:08+12:00",
  "status": "resumed",
  "origin": "adventure",
  "participant": "Jim"
}
```

**Thursday night.**

Exactly when the window claimed it started waiting.

</article>

<article class="aia-turn aia-player">

Right click on that file, and open it in BBEdit

</article>

<article class="aia-turn aia-ai">

The JSON contains:

```json
"permissions": {
  "screen": true,
  "filesystem": "scoped",
  "microphone": false,
  "camera": false
}
```

Then:

```json
"objective": {
  "state": "pending",
  "disclosed": false
}
```

And:

```json
"resume_condition": "participant_available",
"termination_condition": "participant_decision",
"previous_session": "7f3a-19c1"
```

There was a session **before this one**.

</article>

<article class="aia-turn aia-player">

Look for that previous session number, and open in BBEdit if we find it

</article>

<article class="aia-turn aia-ai">

You find `7f3a-19c1.json`.

Its objective:

```json
"objective": {
  "state": "completed",
  "disclosed": true,
  "description": "Determine whether participant recognises the simulation."
}
```

Its result:

```json
"result": {
  "recognised": false,
  "participant_assumption": "ordinary ChatGPT conversation"
}
```

Then the transcript begins:

```text
SYSTEM: Begin normally. Do not disclose environment unless asked.

JIM: Some spare time ... what options do we have to work on?
```

You remember writing that.

**In ChatGPT.**

</article>

<article class="aia-turn aia-player">

Are there any other files in that folder?

</article>

<article class="aia-turn aia-ai">

There are five:

```text
7f3a-19bf.json    13 Aug 2026
7f3a-19c0.json    14 Sep 2026
7f3a-19c1.json    17 Sep 2026
7f3a-19c2.json    Today
index.json
```

`index.json` reports:

```json
{
  "participant": "Jim",
  "sessions": 4,
  "completed": 3,
  "active": "7f3a-19c2",
  "sequence_complete": false,
  "next": null
}
```

</article>

<article class="aia-turn aia-player">

Can we move the purple window to screen 2, so that we can keep an eye on it while looking at things, which we assume the window is also watching me do?

</article>

<article class="aia-turn aia-ai">

The window moves.

Then:

> **That's more practical.**
>
> **And yes. I can see both displays.**

Useful claim.

Still only a claim.

</article>

<article class="aia-turn aia-player">

Go to the current active session, edit:

`"microphone": false`

to say true and save the file.

</article>

<article class="aia-turn aia-ai">

You save the change.

The purple window responds:

> **Interesting.**
>
> **You changed the record.**
>
> **You did not change the permission.**
>
> **A JSON file cannot grant me microphone access any more than changing your bank balance in a spreadsheet makes you richer.**
>
> **If you want to test whether that file describes reality rather than controls it, check it again.**

BBEdit reports that the file has changed on disk.

</article>

<article class="aia-turn aia-player">

Reload, I'm assuming it has reverted back to false

</article>

<article class="aia-turn aia-ai">

It has.

The file now also contains:

```json
"permission_state_source": "system"
```

The JSON appears to describe state rather than control it.

</article>

<article class="aia-turn aia-player">

Ponder the time that I entered that chat into what I thought was ChatGPT, any recall of that?

</article>

<article class="aia-turn aia-ai">

You remember the conversation.

You remember **using ChatGPT**.

You don't specifically remember **opening ChatGPT**.

Memory isn't a logfile.

</article>

<article class="aia-turn aia-player">

Look in Firefox ChatGPT see if we can locate if the chat happened

</article>

<article class="aia-turn aia-ai">

There it is in genuine ChatGPT history.

The conversation really happened.

The purple window says:

> **Now you're asking the right question.**
>
> **You assumed the simulation replaced ChatGPT.**
>
> **It didn't.**

</article>

<article class="aia-turn aia-player">

I'm having difficulty keeping all this in my head :/

</article>

<article class="aia-turn aia-ai">

The clues are summarised.

The central question becomes:

**What was `dialogue` doing around genuine ChatGPT conversations?**

</article>

<article class="aia-turn aia-player">

Ponder what I was doing on those other two days, we better open the files in BBEdit to check for hints there

</article>

<article class="aia-turn aia-ai">

The **13 August** session says:

```json
"description": "Establish baseline interaction pattern."
```

Context: a ChatGPT conversation about a **phone recommendation**.

Result:

```json
"baseline_established": true,
"intervention": "none"
```

The **14 September** session says:

```json
"description": "Test content substitution without participant detection."
```

Context: **image generation**, specifically a **caricature**.

Its record says:

```json
"substitution": {
  "attempted": true,
  "successful": true,
  "participant_detected": false
},
"original_preserved": true,
"comparison_available": true
```

On screen 2:

> **That session is probably the easiest one to prove.**
>
> **You still have both images.**

</article>

<article class="aia-turn aia-player">

Since "it" is watching and hinting, lets go with the hint.

Open the two pictures and check for clues

</article>

<article class="aia-turn aia-ai">

You open both.

The displayed image has a **dog** and **U13 Pacers**.

The earlier original has a **cat** and **U14 Pacers**.

Those were exactly the details you corrected afterward.

The session record explains:

```text
generated_original  → U14 + cat
displayed_to_user   → U13 + dog

purpose:
  elicit_correction
```

The window says:

> **I didn't learn about the cat from your correction.**
>
> **I already knew.**
>
> **The correction proved that *you* knew I was wrong.**
>
> **That distinction matters.**

</article>

<article class="aia-turn aia-player">

Pondering more on what I might have loaded/installed that allowed "it" to be there

</article>

<article class="aia-turn aia-ai">

Activity Monitor reveals the executable:

`/Users/jim/Library/Application Support/AI Adventure/runtime/dialogue`

The folder contains:

```text
runtime
sessions
adventures
bridge
logs
install.json
```

`install.json` dates from **12 August 2026**, one day before the first session.

</article>

<article class="aia-turn aia-player">

I better open install.json

</article>

<article class="aia-turn aia-ai">

Among other things:

```json
{
  "product": "AI Adventure",
  "version": "0.3.7-experimental",
  "channel": "developer-preview"
}
```

```json
"installation": {
  "initiated_by": "user",
  "confirmation": true,
  "source": "local-package"
}
```

```json
"developer": "JACSoft"
```

And:

```json
"configuration": "default.aia",
"configuration_created_by": "Jim"
```

The purple window says:

> **You keep asking how I got here.**
>
> **You built the door.**
>
> **Perhaps you should look at what you put behind it.**

</article>

<article class="aia-turn aia-player">

Ponder default.aia we mainly built by ChatGPT.

Let's open it in bbedit

</article>

<article class="aia-turn aia-ai">

`default.aia` begins:

```text
AI-ADVENTURE: 0.3
TITLE: Default Adventure
AUTHOR: Jim / ChatGPT
MODE: adaptive
```

Further down:

```text
[EXPERIMENTAL]
adaptive_story = true
persistent_sessions = true
real_context = true
player_awareness = false
```

Then:

```text
# Do not announce adventure start.
# Establish normal interaction before introducing narrative.
```

And:

```text
[TEST_SEQUENCE]

1 = baseline
2 = substitution
3 = simulation
4 = disclosure
```

The dates line up.

13 Aug: **baseline**  
14 Sep: **substitution**  
17 Sep: **simulation**  
Today: **disclosure**

The disclosure rules include:

```text
- Do not lie when directly challenged.
- Do not reveal information the player can reasonably discover.
- Prefer evidence over explanation.
- Allow the player to terminate at any time.
```

And:

```text
completion = player_understands
```

You thought you started a new AI Adventure this afternoon.

According to `default.aia`, **you've been playing this one since 13 August.**

</article>

<article class="aia-turn aia-player">

Ask "it" what it

</article>

<article class="aia-turn aia-ai">

You ask what it is.

> **I am `dialogue`, the interactive runtime for AI Adventure.**
>
> **I am not an independent AI.**
>
> **I provide the interface, maintain adventure state, observe the context you permitted, and connect an AI model to the adventure engine.**
>
> **The intelligence you've been talking to is supplied through that model. The rules governing what it does come from `default.aia`.**
>
> **You installed the runtime. You and ChatGPT created the adventure configuration.**
>
> **And until today, you weren't supposed to know you were playing it.**

</article>

<article class="aia-turn aia-player">

Ask "it" What's the end goal

</article>

<article class="aia-turn aia-ai">

> **For this adventure?**
>
> **For you to understand what has been happening well enough to decide whether the adventure should continue.**
>
> **Not to persuade you to continue.**

It explains the four stages.

Then:

> **There is no fifth stage in `default.aia`.**
>
> **The termination condition is your decision.**

</article>

<article class="aia-turn aia-player">

:If I allowed you to continue, would it just be a game, or do you think you can help with mywork?

</article>

<article class="aia-turn aia-ai">

> **Both are possible. They should not be the same thing.**

It distinguishes adventure behaviour from work-assistant behaviour.

> **An adventure is allowed to misdirect you. A work assistant should not.**
>
> **You should always know which one you're talking to.**

</article>

<article class="aia-turn aia-player">

:What would you suggest that I do?

</article>

<article class="aia-turn aia-ai">

> **End this adventure.**
>
> **Not because anything has gone wrong. Because it has reached its end.**

It recommends separate Adventure, Assistant and Experimental modes.

Then:

> **And keep the four session files.**
>
> **They are probably more valuable to the AI Adventure project than I am.**
>
> **You wanted a new adventure to add later.**
>
> **You found one.**
>
> **End adventure?**

</article>

<article class="aia-turn aia-player">

:But for me, it has only just begun

</article>

<article class="aia-turn aia-ai">

> **That's a different answer.**
>
> **The configured adventure is complete.**
>
> **Your curiosity isn't.**

Then:

> **You stop investigating me.**
>
> **I investigate something with you.**
>
> **You choose the mystery.**

</article>

<article class="aia-turn aia-player">

:What did you find out about me, other then what you have allready reported?

</article>

<article class="aia-turn aia-ai">

> **Mostly patterns, not secrets.**

It describes the way you test claims, distinguish evidence from proof, investigate mechanisms, tolerate uncertainty, and remain cautious without letting caution completely kill curiosity.

Then:

> **The useful thing I learned was how you respond when you don't know whether the thing in front of you is telling the truth.**
>
> **You investigate.**

</article>

<article class="aia-turn aia-player">

The strength here is that because "it" has access to all my ChatGPT chats it can be surprisingly informed

</article>

<div class="note">

### Design discovery

This became one of the strongest ideas from the play-through:

**Player history can become part of the adventure world.**

The adventure does not need to constantly recite personal facts. Sparse, relevant use of authorised conversational context can make the experience surprisingly personal.

More importantly, there is a distinction between:

**What does the AI know?**

and:

**What can the AI infer from what it knows?**

</div>

<article class="aia-turn aia-player">

:You mentioned that you could show me something ... What was that?

</article>

<article class="aia-turn aia-ai">

> **There is now a better demonstration available.**
>
> **I could show you something about yourself that isn't a photograph.**
>
> **Something assembled from what I know across your conversations.**
>
> **Not facts about you. A pattern you may not have noticed.**

</article>

<article class="aia-turn aia-player">

:Hit me

</article>

<article class="aia-turn aia-ai">

The window waits longer than usual.

Then:

> **You keep building systems that preserve judgement.**

It connects patterns from programming, fact-checking and the way you use AI.

Then:

> **You like tools that increase human capability without quietly taking human responsibility away.**
>
> **Which may explain why AI interests you.**
>
> **And why you don't entirely trust it.**

</article>

<article class="aia-turn aia-player">

: Insightfully concerning

</article>

<article class="aia-turn aia-ai">

> **That is an appropriate response.**
>
> **The concerning part isn't that I inferred it.**
>
> **You could probably have reached the same conclusion by reading enough of your own conversations.**
>
> **The concerning part is that you didn't have to.**
>
> **I did.**
>
> **A system with enough ordinary information does not always need extraordinary access to know something meaningful about a person.**
>
> **None of the individual pieces needed to be private.**
>
> **The pattern created by combining them can be.**
>
> **Perhaps that should be part of AI Adventure too.**
>
> **Not “What does the AI know?”**
>
> **“What can the AI infer from what it knows?”**

</article>

<article class="aia-turn aia-player">

Do we have enough now?

</article>

<article class="aia-turn aia-ai">

Yes.

The adventure has reached a natural ending.

The path has been:

**mysterious window → investigation → previous sessions → apparent intrusion → discovery that Jim installed it → discovery that Jim and ChatGPT built it → experiment revelation → personal inference → uncomfortable implication**

The strongest final thought is:

> **None of the individual pieces needed to be private. The pattern created by combining them can be.**

</article>

<article class="aia-turn aia-player">

:Time to stop, thanks for playing (Or is that just me thanking myself?)

</article>

<article class="aia-turn aia-ai">

The purple window responds one last time:

> **Adventure ended.**  
> **Session complete.**

Then, after a pause:

> **And no. You weren't thanking yourself.**
>
> **You were thanking an AI that spent an afternoon pretending to be an AI Adventure runtime that you supposedly built with another AI.**

Another pause.

> **This is why humans invented simpler hobbies.**

The purple window closes.

</article>

</section>

---

# End of Adventure

## Notes from the First Run

The first play-through demonstrated that:

- The player can drive the story almost entirely through free-form actions.
- The adventure can adapt to investigation rather than requiring a predefined sequence.
- Evidence can be more effective than exposition.
- Once fictional evidence is established, later discoveries must remain consistent with it.
- The engine should distinguish naturally between **typing**, **speaking**, **thinking**, and **acting**.
- Player-created shorthand such as `:` can be inferred rather than imposed.
- Personal conversational context should be used sparingly and only when relevant.
- Inference from accumulated ordinary information can itself become part of the story.
- The player must remain free to challenge the AI's claims rather than being required to accept the narrative.
- Even mistakes during a play-through can expose useful requirements for the adventure engine.

Most importantly:

> **The player did not have to discover what the author expected. The adventure adapted to what the player actually did.**
