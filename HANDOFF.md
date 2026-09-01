# Cloud Town — start here (for Claude, Gemini, or another Grok)

You are continuing **Cloud Town**, a kid cartoon series that teaches every in-scope **AWS SAA-C03** service.

This Grok chat’s files live in an isolated sandbox. **Other models cannot see that sandbox.** They only know what you give them: this repo, or a paste of these files.

## Do this first

1. Read [`SERIES.md`](SERIES.md) — the series bible (target, characters, 60s contract, pitfalls, remaining beat sheets).
2. Read [`AGENTS.project.md`](AGENTS.project.md) — short rules that override guesswork.
3. Then open:
   - [`src/lib/series.ts`](src/lib/series.ts) — live checklist (a chapter is open only if it has `episodeId`)
   - [`src/lib/lesson.ts`](src/lib/lesson.ts) — what actually plays

If those files disagree, **SERIES.md + the user’s last message win.** Update the TypeScript to match.

## Where we are

| Done | Next |
|---|---|
| Episodes **1–11** (helpers → RDS) | **Episode 12 — The super notebook (Aurora)** |

New cartoons: **60 seconds**, **kids voice baked into the mp4**, **no talking kid overlay** in the corner of the picture.

Locked friends: Sammy (S3), Eddie (EC2), Lulu (Lambda), Vivi (VPC), Iggie, Albie, Nat, Dot, Home.

## Prompt you can paste into Claude / Gemini

```
Continue Cloud Town, a kid cartoon series that covers every AWS SAA-C03 service.

Read SERIES.md first, then AGENTS.project.md, then src/lib/series.ts and src/lib/lesson.ts.

Rules:
- Next cartoon is the first series.ts stop with no episodeId. That is Chapter 12 — Aurora.
- New episodes are 1 minute. Bake a kids voice into the mp4. Do not put a storyteller kid in the corner of the video.
- Keep Sammy, Eddie, Lulu, Vivi and the rest of the character bible. Do not redesign the town.
- Do not rebuild episodes 1–11 unless I say they are broken.
- After the vaults overview, each database gets its own cartoon: RDS (done), then Aurora, DynamoDB, ElastiCache, DocumentDB, Neptune, Keyspaces.

Build Episode 12 as specified in SERIES.md.
```

## What this repo may not include

Cartoon **mp4 / vtt / posters** can be too large for a text push. If `public/*.mp4` is missing here, the plan and the app code are still the source of truth — regenerate media from the bible, or copy media from the Grok app sandbox.

## Product the kid sees

One page: episode tabs → theater (play + captions) → helper cards → quiz (stamp on a perfect score) → trail map of all chapters.
