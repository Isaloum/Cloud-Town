# Cloud Town — project instructions

This repo is **Cloud Town**: a kid cartoon series that teaches every in-scope **AWS SAA-C03** service.

**Before you add a cartoon, a chapter, a character, or a service, read [`SERIES.md`](SERIES.md).** That file is the series bible: target, purpose, locked characters, 60-second contract, voice/video pitfalls, and beat sheets for every remaining chapter.

Rules that override guesswork:

- Next cartoon is the first stop in `src/lib/series.ts` with **no** `episodeId`. Today that is **Chapter 12 — The super notebook (Aurora)**.
- After the vaults overview, each database gets its **own 1-minute cartoon**. RDS is done. Then Aurora, DynamoDB, ElastiCache, DocumentDB, Neptune, Keyspaces.
- New cartoons are **1 minute**, with a **kids voice baked into the mp4** (`hasAudio: true`). Do **not** put a talking storyteller kid in the corner of the picture — voice only.
- Keep Sammy, Eddie, Lulu, Vivi and the rest of the bible. Do not redesign the town.
- Do not rebuild episodes 1–5 unless the user says they are broken.
- Official SAA names stay official. Feature names (S3 Standard, Versioning, …) use `official: false` so the 121 count stays honest.
- Leave the app running on port 8080 when you finish a chapter.

`src/lib/series.ts` is the live checklist. `src/lib/lesson.ts` is what plays. If they drift from `SERIES.md`, update the TypeScript to match the bible and the user’s last message.
