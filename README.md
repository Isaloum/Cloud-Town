# Cloud Town

Kid cartoons that teach every AWS SAA-C03 service. Sammy is S3. Eddie is EC2. Lulu is Lambda.

**Agents:** start at HANDOFF.md, then SERIES.md.

**Status:** Episodes 1–11 built (helpers → RDS). Next is Episode 12 — Aurora.

## Prompt

You are continuing Cloud Town, a kid cartoon series for every in-scope AWS SAA-C03 service.

Read SERIES.md first, then AGENTS.project.md, then src/lib/series.ts and src/lib/lesson.ts.

Rules:
- Next cartoon is the first series.ts stop with no episodeId. That is Episode 12 — Aurora.
- New episodes are 1 minute. Bake a kids voice into the mp4.
- Do not put a storyteller kid in the corner of the video. Voice only.
- Keep Sammy, Eddie, Lulu, Vivi. Do not redesign the town.
- Do not rebuild episodes 1–11 unless I say they are broken.
- After The vaults, each database gets its own cartoon: RDS (done), then Aurora, DynamoDB, ElastiCache, DocumentDB, Neptune, Keyspaces.

Build Episode 12 as specified in SERIES.md.
