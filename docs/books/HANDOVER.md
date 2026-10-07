# Cloud Town — Handover

**Read this first in any new session.** It says where the project stands, what happens next, and how the work gets done. Last updated 2026-10-06.

---

## 1. What Cloud Town is

A kids' franchise that explains cloud computing as if the reader is five. Every AWS service is an object with a face living in a town that floats above the clouds.

| Surface | What | Status |
|---|---|---|
| YouTube — Like I'm Five | `@likeiamfiveyearsold`. Free shorts. Top of funnel. | Episodes posting |
| Books — Amazon KDP | Paid. Built from the episodes. | Book 1 live Sept 16, 2026. Book 2 live Sept 26, 2026 |
| CertiPrepAI.com | The product people pay for. AWS cert prep SaaS. | Live |

The books and videos exist to bring people to CertiPrepAI. Every book carries both links in the back matter.

---

## 2. Where we are right now

**Book 1 — *Cloud Town: Up in the Sky*.** Live. ISBN 9798174935617, ASIN B0HKD98Y4Z. 40 pages, 8.5×8.5, $12.99, episodes 1–9.

**Book 2 — *Cloud Town: The Vaults*.** Live. ISBN 9798176658507, ASIN B0HKWV76Y4. 40 pages, 8.5×8.5, $12.99, print cost $4.20, royalty $3.59. Episodes 10–19.

**2026-10-05/06 — discovery work:**
- New adult-first Amazon descriptions submitted for Book 1 and Book 2 (in KDP review up to 72h).
- Review-request message drafted for ~10 people.
- Reddit: post in r/aws awaiting moderator approval; modmail drafted. r/booksuggestions not allowed (no self-promo, no links).
- Decision: do not edit Books 1–2 interiors until there are sales. Add a "Grown-up corner" (character ↔ AWS service map) to Book 3 from the start.

**Book 3 — next.** Scope in §4b. Start in a fresh session.

**KDP series "Cloud Town"** (id RE1DS0632RC): Book 1 = #1, The Vaults = #2.

**Next, in order:**

1. Book 3, step 3: write the 30 pages + Grown-up corner page.
2. Order author copies of both books.
3. Collect reviews.

**Open question:** Book 2's cover back panel is cream; Book 1 used a continuous wrap.

---

## 3. Decisions made

| Decision | Status |
|---|---|
| A boy joins Maya, as a **friend**, not a brother | **Locked 2026-09-20.** |
| He is **Theo**, a Black boy — dark brown skin, close-cropped coily hair, mustard-yellow hoodie | **Locked 2026-09-20.** Separate character from Remy (the visiting kid). |
| He enters in Book 2 and in the videos from the next episode on | **Locked.** |
| Names for the 9 vault characters | **Locked 2026-09-20.** Dot, Rory, Sevi, Dibby, Dash, Ellie, Minty, Tuni, Kasey. |
| Books stay classified as children's picture books, with one adult category | **Locked 2026-09-23.** Reach adults through keywords and the description. |
| Every book in the series is $12.99 | **Locked 2026-09-23.** |
| Book 3 = districts 20 + 21, nine services | **Locked 2026-09-24.** See §4b. |
| Books 1–2 interiors unchanged until sales exist; Book 3 gets a Grown-up corner | **Locked 2026-10-05.** |
| Six books is the complete core series | **Working assumption 2026-09-23.** |

**Naming rule:** one or two syllables, soft ending; echoes the service without spelling it (Dot/RDS, Vivi/VPC, Iggie/IGW); no two names rhyme or share a first syllable; never a real brand name.

---

## 4. Book 2 scope (shipped)

| Kid word | AWS | Name |
|---|---|---|
| Tidy notebook | RDS | Dot |
| Super notebook | Aurora | Rory |
| Nap notebook | Aurora Serverless | Sevi |
| Labeled cubbies | DynamoDB | Dibby |
| Snack shelf | DAX | Dash |
| Unwrapped snack | ElastiCache | Ellie |
| Story vault | DocumentDB | Minty |
| Family tree | Neptune | Tuni |
| Wide cubbies | Keyspaces | Kasey |
| The boy — Maya's friend | — | Theo |

---

## 4b. Book 3 scope — approved 2026-09-24

`SERIES_PLAN.md` numbers 20–32 as **districts**, not episodes. Every book takes its scope from the district table.

Book 3 = districts 20 (the toy boxes) + 21 (the front door). Nine services, ~3 pages each, 40 pages.

| Kid word | AWS | Name | Bible row |
|---|---|---|---|
| Toy box | ECS | Boxy | locked |
| Box with a hat | EKS | Kira | locked |
| Flying box | Fargate | Fay | locked |
| Signpost | Route 53 | Mapi | locked |
| Fast road + edge stall | CloudFront | Zip | locked |
| Front-door arch | Global Accelerator | Boost | locked |
| Padlock sticker | ACM | Seal | locked |
| Ticket window | API Gateway | Winn | locked |
| Lemonade booth kit | Amplify | Poppy | locked |

Step 2 is done (rows in `SERIES.md` §6). Start at step 3. Add a Grown-up corner back-matter page.

Still open: a title covering both districts.

Watch for: Kira is a box with a hat, never a person (EP22 drew her as a girl). Boxy, Kira and Fay were teased on Book 2's last page.

---

## 5. The pipeline, A to Z

1. **Scope** from the district table.
2. **Characters** as shape lines, approved, added to `SERIES.md` §6 before art.
3. **Write all 30 pages**, 2–3 lines each + a scene prompt. Approve before art.
3b. **Proofread as prose**: pronouns, no gendering of ungendered characters, zero em dashes.
4. **Lock the master reference** image.
5. **Generate art** in ChatGPT, one prompt at a time, master reference on the first prompt only, every prompt self-contained, "keep all characters well inside the frame".
6. **QA every image**: floating on clouds; every shape matches; no letters/numbers; every character 50 px clear of edges at 2625×2625.
7. **Upscale** 1254 → 2625 with Lanczos.
8. **Interior PDF**: text over art, never baked in. 8.75×8.75 in. 300 DPI JPEG q92.
9. **Cover wrap**: 8.5 + 8.5 + spine + 0.25. Spine = pages × 0.002252 in. Under 79 pages no spine text. White 2×1.2 in barcode box bottom right of back.
10. **KDP upload**: free ISBN, 8.5×8.5, bleed, premium color, white, matte. Add to series first. AI disclosure: text = Claude, images = ChatGPT, both extensive editing.
11. **Print previewer with Guides on**, every page. If processing hangs >10 min, reload.
12. **Publish** at $12.99, Expanded Distribution off.
13. **Log it**: PROJECT_LOG, DECISIONS, LESSONS_LEARNED, this file.

---

## 6. Canon rules — never break

1. Never rename a locked character.
2. Never redraw a locked shape.
3. Never use a character name in an image prompt; describe the shape.
4. Never draw a named friend as a human.
5. Maya and Theo are the only humans unless an extra has a locked row.
6. No text, letters, numbers or logos inside any illustration.
7. Palette: sunset sky, cream + coral + teal, cobblestone. No white rooms.
8. New character = new bible row first, then the art.
9. Names follow the naming rule.
10. Never buy or upgrade anything.
11. Page text is never baked into the artwork.

---

## 7. Hard-won lessons

| Lesson | Rule |
|---|---|
| Characters drifted | Name drift-prone details in every prompt |
| Wide shots dropped details | Restate every character's defining detail in full |
| Repeat characters cloned | Say how they differ; size is safest |
| Unrequested prop characters | Props: "plain object, no face" |
| Text overflow / clipped characters | Previewer with Guides on; 50 px edge margin |
| Long image threads drift | Every prompt self-contained; new chat after an image is shown |
| Capes drawn onto holders | Never have a character hold a caped character |
| 532 MB PNG interior | Use 300 DPI JPEG q92 |
| Shape lines contradicted footage | Open the poster before writing a shape line |
| Pronouns/em dashes reached print | Run step 3b as its own pass |
| Scope carried as EP20–28 | Take scope from the district table |
| Books shipped with no audience | Audience is the constraint, not catalogue (`GROWTH_PLAN.md`) |
| Sandbox git commit failed | Run git commits for `repo/` in Terminal on the Mac |
| Reddit post held / wrong sub | Read sub rules first; new accounts with links get held |
| Long sessions burned tokens | One session per book or episode; paste only the section that changed |

---

## 8. Where the files live

```
~/Desktop/Projects/Cloud Town/
  HANDOVER.md      this file
  APP_BIBLE.md, PROJECT_LOG.md, DECISIONS.md, LESSONS_LEARNED.md
  docs/            CHARACTER_BIBLE.md, SERIES_PLAN.md, POSTING_KIT.md
  repo/            SERIES.md (locked characters), posters, site source
  book/            Book 1 PDFs, MASTER-REFERENCE.png
  book2/           Book 2 PDFs, build scripts, fonts, images
```

Project docs on claude.ai mirror this file as `claude/HANDOVER.md`.

---

## 9. Session rule

One session per book. Start fresh and read this file first.

---

## 10. Where this is going

| Phase | Scope |
|---|---|
| 1 | AWS, ~120 services across 13 districts |
| 1b | One episode per notable AWS launch |
| 2 | Azure |
| 3 | Google Cloud |
| 4 | AI / ML / LLM |

AWS is where the reusable machine gets built. If a decision makes AWS faster but phases 2–4 harder, it is the wrong decision.
