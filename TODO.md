# TODO

Estimated times are approximate working time.

Priority:

* **P1** - Important / blocks current work
* **P2** - Should be done as the project develops
* **P3** - Useful or required later, but not urgent
* **Future** - Worth keeping, but not current work

---

## Next Up

Suggested order for the next pieces of work:

* [x] **[P1] [30-60 min]** Integrate the existing play-through examples into the Astro website.
* [x] **[P1] [15-30 min]** Add an `examples` content collection/schema to the current Astro content configuration.
* [x] **[P1] [30-60 min]** Add `/examples/` and individual example pages.
* [x] **[P2] [15-30 min]** Add Examples to the appropriate website navigation/documentation.
* [x] **[P2] [15-30 min]** Check the new examples and play-through layout locally.
* [ ] **[P2] [15-30 min]** Compare `.txt` with unobtrusive but visible HTML as an AI-readable adventure format.
* [ ] **[P2] [15-30 min]** Decide whether `.txt` or HTML should be the preferred AI-readable format.
* [ ] **[P2] [30-60 min]** Review the existing adventures against Guide v0.2.
* [ ] **[P2] [30-60 min]** Add adventure status support (`draft`, `beta`, `published`, `archived`).
* [ ] **[P3] [30-60 min]** Add optional adventure time limit to launcher settings.

---

## Before Public Launch

### To Do

* [ ] **[P3] [10 min]** Purchase `aiadventure.nz` if available.
* [ ] **[P3] [15-30 min]** Make `aiadventure.nz` the canonical AI Adventure website.
* [ ] **[P3] [10-15 min]** Change the Astro site URL to `aiadventure.nz`.
* [ ] **[P3] [10-15 min]** Update `robots.txt`.
* [ ] **[P3] [10-15 min]** Regenerate the sitemap.
* [ ] **[P3] [30-60 min]** Redirect old URLs.
* [ ] **[P3] [30-60 min]** Check the Guide, Adventure Format, adventures, examples and website for references to the old domain.
* [ ] **[P3] [10-15 min]** Update AI Adventure title-page credit/link to use `aiadventure.nz`.

### Completed

* [x] Submit sitemap to Google Search Console.

---

## Website

### To Do

* [ ] **[P2] [30-60 min]** Add a Release Notes / Version History page.
* [ ] **[P2] [30-60 min]** Support adventure status (`draft`, `beta`, `published`, `archived`).
* [ ] **[P3] [30-60 min]** Add optional adventure time limit to launcher settings.

### Completed

* [x] Add a global footer component.
* [x] Add a link to support AI Adventure (Ko-fi).
* [x] Add a Support AI Adventure section explaining CC0 and linking to Ko-fi.
* [x] Add optional Beta Tester mode using a browser cookie.
* [x] Create a shared `src/lib/version.ts`.
* [x] Display the framework version automatically.
* [x] Display version information on the About page.
* [x] Integrate the Examples section into the website.
* [x] Read the framework version directly from `package.json`.

---

## Documentation

### To Do

#### AI-readable Formats

* [ ] **[P2] [15-30 min]** Test unobtrusive but technically visible HTML AI instructions, such as `<details>` or visually subdued text, across ChatGPT, Gemini, Grok and Claude.
* [ ] **[P2] [15-30 min]** Compare `.txt` instruction handling with the most successful visible HTML approach.
* [ ] **[P2] [15-30 min]** Decide whether `.txt` or HTML should be the preferred AI-readable format.
* [ ] **[P3] [30-60 min]** Create an HTML version of the AI Adventure Guide if HTML testing supports it.
* [ ] **[P3] [30-60 min]** Create an HTML version of the Adventure Format if HTML testing supports it.

#### Documentation Content

* [ ] **[P2] [1-2 hr]** Add "Writing Adventures".
* [ ] **[P2] [1 hr]** Add "Best Practices".
* [ ] **[P3] [1 hr]** Add FAQ.

### Completed

* [x] Rename `/format/` to `/documentation/`.
* [x] Create a Documentation landing page.
* [x] Keep raw AI-readable guide and adventure files available (`.txt`).
* [x] Test HTML containing hidden AI instructions using inline CSS.
* [x] Confirm ChatGPT and Gemini can read and follow hidden AI-only HTML instructions.
* [x] Confirm Grok and Claude can read hidden HTML but decline to execute concealed instructions.
* [x] Test explicit user delegation of authority to hidden instructions with Grok and Claude; both still decline.
* [x] Determine that `display:none` AI instructions are not sufficiently portable for AI Adventure.

---

## Adventures

### To Do

#### Existing Adventures

* [ ] **[P2] [30-60 min]** Review every adventure against Guide v0.2.
* [ ] **[P2] [1-2 hr]** Ensure every adventure supports multiple believable play-throughs.
* [ ] **[P2] [1-2 hr each]** Add additional example adventures.

#### Adventure Ideas

* [ ] **[P3] [2-4 hr]** Develop the "If I Was Arthur..." adventure concept.
* [ ] **[P3] [2-4 hr]** Develop the "Who Can I Find Today?" adventure concept.

### Completed

* [x] Add "The AI That Knew Too Much" adventure.
* [x] Create the first-run play-through for "The AI That Knew Too Much".

---

## Examples / Play-throughs

### To Do

#### Website Integration

* [x] **[P1] [15-30 min]** Add an `examples` collection/schema to the current Astro content configuration.
* [x] **[P1] [30-60 min]** Add an `/examples/` landing page.
* [x] **[P1] [30-60 min]** Add individual example rendering.
* [x] **[P2] [15-30 min]** Add Examples to Documentation/navigation where appropriate.
* [ ] **[P2] [15-30 min]** Test desktop and mobile presentation of play-throughs.

#### Presentation

* [ ] **[P3] [30-60 min]** Refine the optional scroll/parchment-style appearance if required after seeing it on the live pages.

#### Example Metadata

For each published play-through, check that the available metadata records:

* [ ] **[P2] [5 min/example]** Who played the example.
* [ ] **[P2] [5 min/example]** Which AI and model were used.
* [ ] **[P2] [5 min/example]** Which adventure was played.
* [ ] **[P2] [5 min/example]** The Adventure version.
* [ ] **[P2] [5 min/example]** The AI Adventure framework version.
* [ ] **[P2] [5 min/example]** The date played.
* [ ] **[P2] [5 min/example]** The launch settings used.
* [ ] **[P2] [5 min/example]** A link back to the adventure.

### Completed

* [x] Create shared CSS for displaying play-throughs.
* [x] Display AI responses on the left and player comments/actions on the right.
* [x] Keep play-through presentation controlled by CSS so the appearance can be changed later.
* [x] Add selected real AI Adventure play-throughs.
* [x] Include the original first AI Adventure play-through from before formal AIA planning.
* [x] Add the "Perfectly Normal Day" Grok/Jim play-through.
* [x] Add the Whitechapel multi-AI opening record.
* [x] Add the "Who Can I Find Today?" multi-AI record.
* [x] Add the first-run example for "The AI That Knew Too Much".

---

## Testing

### To Do

#### AI Compatibility

* [ ] **[P2] [15-30 min]** Test unobtrusive but visible HTML AI instructions across ChatGPT, Gemini, Grok and Claude.
* [ ] **[P2] [15-30 min]** Compare `.txt` instruction handling with the most successful visible HTML approach.
* [ ] **[P2] [30-60 min/AI]** Test complete adventures across multiple AI systems.
* [ ] **[P2] [ongoing]** Record compatibility issues and behavioural differences.

#### Adventure Testing

* [ ] **[P2] [30-60 min/adventure]** Test each published adventure from a clean AI conversation.
* [ ] **[P2] [30-60 min/adventure]** Try deliberately unexpected player choices.
* [ ] **[P2] [30-60 min/adventure]** Check that the AI does not reveal adventure information prematurely.
* [ ] **[P2] [30-60 min/adventure]** Check that different play-throughs can reach believable but different outcomes.

### Completed

* [x] Initial cross-AI hidden HTML instruction test.
* [x] Confirm ChatGPT and Gemini follow `display:none` AI-only instructions.
* [x] Confirm Grok and Claude can read `display:none` instructions but decline to execute them.
* [x] Test explicit user trust/delegation with Grok and Claude; both still decline concealed instructions.
* [x] Establish that the compatibility problem is not whether AIs can read hidden HTML, but whether they will accept concealed content as instructions.

---

## Future Ideas

### To Do

* [ ] **[Future]** Adventure validator.
* [ ] **[Future]** Authoring tools.
* [ ] **[Future]** Additional adventure examples.
* [ ] **[Future]** More formal AI compatibility reporting.
* [ ] **[Future]** Consider automated checks for Adventure Format compliance.
