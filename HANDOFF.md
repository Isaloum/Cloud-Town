# Cloud Town — start here (for Claude, Gemini, or another Grok)

You are continuing **Cloud Town**, a kid cartoon series that teaches every in-scope **AWS SAA-C03** service.

This Grok chat’s files live in an isolated sandbox. **Other models cannot see that sandbox.** They only know what you give them: this repo, or a paste of these files.

## Do this first

1. Read [`SERIES.md`](SERIES.md) — the series bible. **§6 is the only character source of truth.**
2. Read [`AGENTS.project.md`](AGENTS.project.md) — short rules that override guesswork.
3. Then open [`src/lib/scripts.ts`](src/lib/scripts.ts) — the live episode list (voice-over, video path, PDF pages).

There is **no** `src/lib/series.ts` and **no** `src/lib/lesson.ts`. Do not create them. The real file is **`src/lib/scripts.ts`**.

If those files disagree, **SERIES.md + the user’s last message win.** Update `scripts.ts` to match.

## Where we are

| Done | Next |
|---|---|
| Episodes **1–19** (helpers → Keyspaces) | **ECS, EKS, Fargate** — toy boxes that run many Eddies |

New cartoons: **60 seconds**, **native 9:16 1080×1920** (no letterbox, no blurred bars), **kids voice baked into the mp4**, **no talking kid overlay**, **no mouth animation**.

If a service is not in SERIES.md §6: invent name + kid metaphor + one object-with-a-face, **add the row and push SERIES.md before generating the video.** Never change an existing character.

Locked friends: Sammy (S3), Eddie (EC2), Lulu (Lambda), Maya, Dot, Vivi, Iggie, Albie, Nat, and every other row in SERIES.md §6.

## Prompt you can paste into Claude / Gemini

```
Continue Cloud Town, a kid cartoon series that covers every AWS SAA-C03 service.

Read SERIES.md first (especially §6), then AGENTS.project.md, then src/lib/scripts.ts.
There is no series.ts or lesson.ts. The episode list is src/lib/scripts.ts.

Rules:
- §6 of SERIES.md is the only character bible. Never redesign a locked friend.
- If a service has no row, add the character to SERIES.md and push BEFORE shooting.
- Next cartoon after episode 19 is ECS / EKS / Fargate.
- New episodes are 1 minute, native 9:16 1080x1920, no letterbox, no blurred bars.
- Bake a kids voice into the mp4. Characters never speak on camera (body reactions only).
- Do not put a storyteller kid in the corner of the video.
- Do not rebuild episodes 1–19 unless I say they are broken.

Build the next episode as specified in SERIES.md.
```

## What this repo includes

`src/`, `public/` (mp4, posters, script PDFs), `package.json`, `vite.config.ts`, `tsconfig.json`. There is no `.env` and no `.env.example`.
