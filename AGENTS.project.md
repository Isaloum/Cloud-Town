# Cloud Town — project instructions

This repo is **Cloud Town**: a kid cartoon series that teaches every in-scope **AWS SAA-C03** service.

**Before you add a cartoon, a chapter, a character, or a service, read [`SERIES.md`](SERIES.md).** That file is the series bible. **§6 is the only character source of truth.**

Rules that override guesswork:

- The live episode list is **`src/lib/scripts.ts`**. There is no `src/lib/series.ts` and no `src/lib/lesson.ts`.
- Next cartoon after episodes 1–19 is **ECS, EKS, Fargate**.
- New cartoons are **1 minute**, **native 9:16 1080×1920** (no letterbox, no blurred bars), with a **kids voice baked into the mp4**. Characters never speak on camera. Do **not** put a talking storyteller kid in the corner.
- Keep Sammy, Eddie, Lulu, Maya, Dot, Vivi and the rest of the bible. Do not redesign the town.
- If a service is not in SERIES.md §6, add the character row and **push before** generating its video.
- Do not rebuild episodes 1–19 unless the user says they are broken.

`src/lib/scripts.ts` is what plays. If it drifts from `SERIES.md`, update the TypeScript to match the bible and the user’s last message.
