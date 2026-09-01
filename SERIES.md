# Cloud Town Series

Cloud Town is one neighborhood story. Every cartoon teaches one AWS idea in a kid-safe way. The cast stays familiar. The town does not redesign. Each episode keeps the same tone: short sentences, big feelings, and a clean connection between the AWS service name and the kid word.

## Core rules

- Kids are the audience, but a parent may study the SAA exam beside them.
- Every service name stays official when it is an AWS exam service.
- Feature names are not counted as official services.
- Voice is baked into the video. No storyteller kid appears in the corner.
- Pictures are generated without text, letters, logos, or watermarks.
- New cartoons are 60 seconds.
- The next cartoon is the first item in `src/lib/series.ts` that has no `episodeId`.
- Right now, that is Episode 12: The super notebook (Aurora).
- Do not rebuild episodes 1–11 unless they are broken.
- After The vaults, each database gets its own cartoon: RDS (done), then Aurora, DynamoDB, ElastiCache, DocumentDB, Neptune, Keyspaces.

## Town cast guardrails

- Sammy = S3
- Eddie = EC2
- Lulu = Lambda
- Vivi = VPC
- Iggie, Albie, Nat, and Dot stay in the story as friends, not as redesigns.

## Voice pattern

Use the same pattern in every cartoon: “AWS service name is a kid word.”

Examples:

- “RDS is a tidy notebook.”
- “Aurora is a super notebook.”
- “DynamoDB is a bouncy backpack.”

The short sentence makes the idea easy to remember.
