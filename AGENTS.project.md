# Cloud Town project notes

This project is a one-page learning product. It shows episode tabs, a 1-minute theater player, helper cards, a quiz with perfect-score stamps, and a trail checklist.

## Required story facts

- Episode 12 is the next stop because it is the first record in `src/lib/series.ts` without an `episodeId`.
- The project keeps the town design locked and familiar.
- The voice is only audio; no visible storyteller kid is added in the video.
- There are no text, letters, logos, or watermarks in generated pictures.
- Official AWS service names remain official. Feature names set `official: false` so the exam count stays honest.

## Episode flow

- Episodes 1–11 are stable.
- Episode 12 teaches Aurora as a “super notebook.”
- After the database arc begins, every database gets its own cartoon in order: RDS, Aurora, DynamoDB, ElastiCache, DocumentDB, Neptune, Keyspaces.

## Implementation guardrails

- Work in the series and lesson data modules.
- Do not redesign the entire application.
- Keep the tone fun and short for kids while remaining accurate for parents studying SAA-C03.
