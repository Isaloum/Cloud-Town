# Cloud Town — series bible for the next agent

Read this **before** adding a cartoon, a chapter, or a service.

**If you are Claude, Gemini, or a new Grok session:** you cannot see the old Grok sandbox. Use this file plus [`HANDOFF.md`](HANDOFF.md). The live Grok app may still hold the mp4s.

This file is the plan. [`src/lib/series.ts`](src/lib/series.ts) is the live checklist. [`src/lib/lesson.ts`](src/lib/lesson.ts) is the playable episodes. If they disagree, **this file plus the user’s last message win**, then update the two TypeScript files.

---

## 1. Target (what we are building)

**Cloud Town** is a **kid cartoon series** that teaches **every in-scope service on the AWS Solutions Architect Associate exam (SAA-C03)** — currently **121 official names** on the trail.

It is **not**:

- a dump of AWS docs
- a clip farm with no app around it
- a 30-second joke per service
- Glacier-only S3
- an adult architecture diagram with a cartoon skin

It **is**:

- one **neighborhood story** kids can follow
- one **1-minute cartoon per chapter** (new episodes)
- the same friends coming back (Sammy, Eddie, Lulu, Vivi…)
- a **stamp checklist** so a parent / learner can see exam coverage
- an **interactive lesson** after each cartoon (cards + quiz, plus a map when the chapter is about streets)

The user (ihab) wants kids to **learn AWS in an interesting way**, and later agents to **keep going on the same trail** until SAA is complete.

---

## 2. Purpose (why this shape)

| Goal | How we do it |
|---|---|
| Cover the SAA exam | Official service names stay official. Features (S3 Standard, IAM user, SCP, STS…) are extra rows with `official: false` so the 121 count stays honest. |
| Make it stick for kids | One metaphor per service. Friends **work together**. Recap line at the end of every cartoon. |
| Make it a series, not a one-off | Locked character bible. Locked art style. Locked length / voice / captions. Trail map + stamps. |
| Make the next agent fast | This file. Next chapter is always **the first `SERIES` stop with no `episodeId`**. |

Exam domains the finale must land on:

1. **Secure** — keys, fences, locks, guards
2. **Resilient** — two yards, spare copies, a doorman who skips a sick Eddie
3. **High-performing** — fast road, right vault, extra Eddies, a river that never jams
4. **Cost-optimized** — right-size piggy, freezer for old drawings, Lulu instead of an always-on Eddie

---

## 3. Audience and tone

- **Kids ~6–10**, with a parent who may be studying SAA.
- Narrator is a **fun kids voice**, excited, short sentences, names the AWS word **and** the kid word in the same breath: *“Sammy is S3.”*
- No fear, no breaches-as-horror. Foxes, storms, strangers at the gate — that’s enough.
- **No text, letters, logos, or watermarks in generated stills or video.** Captions live in the player, not in the picture.
- Grown-up detail belongs on the **helper cards** (`detail` field), not in the 60-second script.

---

## 4. Product the user actually sees

Single page. Order from the top:

1. Title **Cloud Town**
2. **Episode tabs** (sticky) — only chapters that have a cartoon
3. **Theater** — Play cartoon, captions, chapters, mute, fullscreen
4. **Neighborhood map** — only for the VPC episode
5. **Meet the neighbors** helper cards
6. **What did you learn?** quiz (perfect score → stamp in `localStorage` key `cloudtown-stamps`)
7. **The Cloud Town trail** — all chapters, checklist, A–Z of 121 official names

---

## 5. Status (do not redo these unless the user says they are broken)

| Ch | Id | Cartoon | Length | Voice in the file | Notes |
|---|---|---|---|---|---|
| 1 | `helpers` | Episode 1 *The helpers* | 30s | yes | Sammy / Eddie / Lulu intro. Grandfathered at 30s. |
| 2 | `s3` | Episode 2 *Sammy’s closet* | 60s | yes | Buckets + storage classes + Glacier family. |
| 3 | `s3locks` | Episode 3 *Copies and locks* | 60s | yes | Versioning, lifecycle, replication, encryption, BPA, Object Lock. |
| 4 | `neighborhood` | Episode 4 *The neighborhood* | 30s | yes | VPC, public/private, IGW, NAT/egress, ALB, EC2, DB, peering, VPN. Has interactive packet map. Grandfathered at 30s. |
| 5 | `closets` | Episode 5 *The other boxes* | 60s | yes | EBS, EFS, FSx, Glacier recap, Storage Gateway, Backup. |
| 6 | `keys` | Episode 6 *The key keepers* | 60s | yes | IAM, Identity Center, Cognito, Directory Service, RAM. |
| 7 | `keyring` | Episode 7 *The key ring* | 60s | yes | IAM deep: user, role, policy, SCP, STS. |
| 8 | `idcenter` | Episode 8 *The school badge* | 60s | yes | Identity Center: source, permission sets, vs IAM user vs Cognito. |
| 9 | `cognito` | Episode 9 *The guest sticker* | 60s | yes | Cognito: user pool, identity pool, STS, vs IAM vs Identity Center. |
| 10 | `vaults` | Episode 10 *The vaults* | 60s | yes | RDS, Aurora, Serverless, DynamoDB, ElastiCache, DocumentDB, Neptune, Keyspaces. No storyteller overlay. |
| 11 | `rds` | Episode 11 *The tidy notebook* | 60s | yes | RDS deep: engines, private subnet, Multi-AZ, replica, backups. Voice only. |
| 12–17 | db deep | **not built** | 60s | must bake in | Aurora, DynamoDB, ElastiCache, DocumentDB, Neptune, Keyspaces — one cartoon each. |
| 18–29 | remaining | **not built** | 60s | must bake in | Next built cartoon after RDS is **Chapter 12 — The super notebook (Aurora)**. |

`episodeId` is how the UI knows a chapter is playable. Never mark a stop open until the mp4 plays with **real audio**.

---

## 6. Character bible (locked — do not redesign)

| Friend | AWS | Look | Lives |
|---|---|---|---|
| **Sammy** | S3 | Cream round storage box, coral lid, button eyes, coral smile, short arms. | Closet / bucket |
| **Eddie** | EC2 | Cream CRT computer, teal screen face, chunky cream arms and teal boots. | Private backyard (shop) |
| **Lulu** | Lambda | Small cream fox-creature, huge ears, coral nose, teal cape, always mid-poof. | Appears for one job |
| **Vivi** | VPC | Long cream fence, arched gateway, coral tiled roof, teal gem. | Around the whole town |
| **Iggie** | Internet Gateway | Big front gate on the public street. | Only door to the internet |
| **Albie** | ALB / ELB | Doorman on the **public** street. Visitors meet him first. | Public subnet |
| **Nat** | NAT Gateway | Mail window on the public street. Letters go **out**. Strangers cannot come in. That is egress. | Public subnet |
| **Dot** | Database | Vault. Visitors never meet her. | Private backyard |
| **Home** | VPN / Direct Connect | House on the ground. Secret tunnel or private cable. | On-premises |

Art style: Pixar / Bluey 3D cartoon, Cloud Town, warm sunset pastel clouds, cobblestone, cream-and-coral houses, teal accents, no text, no letters, no logos, no watermarks.

When a character already exists, animate the existing portrait. Do not generate a second Sammy.

---

## 7. Episode contract (every new cartoon)

New episodes are **60 seconds**, not 30.

- Video: `public/<id>.mp4` — 1280×720, H.264 Main, yuv420p, 24 fps, AAC stereo 96–128 kb/s, `+faststart`, about 6–12 MB.
- Audio: **Kids voice baked into the mp4.** `hasAudio: true`.
- Voice: kids voice (AnaNeural / luna). Loudness around −16 LUFS.
- Captions: `public/<id>.vtt` and matching `captions[]` in `lesson.ts`.
- Script: ~130–160 spoken words. End with “Now you know …!”
- Helpers: 3–6 cards. Quiz: 3–4 questions.
- **No storyteller kid in the corner of the picture — voice only.**
- **Working together** is mandatory.

Code checklist when a chapter opens:

1. Add the id to `EpisodeId` / `HelperId` in `lesson.ts`.
2. Add `EPISODES.<id>` (video, captions, helpers, quiz).
3. Set `episodeId` on that stop in `series.ts`.
4. Append the id to `EPISODE_ORDER` in `src/routes/index.tsx`.
5. Put files in `public/` (mp4, vtt, poster, character jpgs).
6. Typecheck, smoke the play button, leave the app running.

---

## 8. Remaining beat sheets (build in this order)

### Chapter 12 — The super notebook  ← **NEXT**
Aurora, Aurora Serverless, Aurora replicas. Super notebook that shares one pile of pages. Naps when nobody writes.

### Chapter 13 — The labeled cubbies
DynamoDB keys, streams, GSI. Grab by name.

### Chapter 14 — The unwrapped snack
ElastiCache Redis/Memcached vs the real vault.

### Chapter 15 — The story vault
DocumentDB / JSON stories.

### Chapter 16 — The family tree
Neptune graphs.

### Chapter 17 — The wide cubbies
Keyspaces / Cassandra.

### Chapter 18 — The front door
Route 53, CloudFront, Global Accelerator, ACM, API Gateway, Amplify, Device Farm.

### Chapter 19 — The post office
SQS, SNS, EventBridge, Step Functions, AppFlow, AppSync, MQ.

### Chapter 20 — The watchtower
CloudWatch, CloudTrail, Config, X-Ray, Health Dashboard, Grafana, Prometheus.

### Chapter 21 — The builder crew
Auto Scaling, Beanstalk, Batch, ECR, ECS, EKS, Fargate.

### Chapter 22 — The safety net
KMS, Secrets Manager, WAF, Shield, GuardDuty, Inspector, Macie, Security Hub.

### Chapter 23 — The town hall
CloudFormation, Organizations, Control Tower, Systems Manager, CLI, Console, Trusted Advisor.

### Chapter 24 — The movers
MGN, DMS, DataSync, Snow Family, Transfer Family.

### Chapter 25 — The library
Athena, Redshift, EMR, Glue, Kinesis, OpenSearch, QuickSight.

### Chapter 26 — The talking friends
SageMaker, Rekognition, Comprehend, Polly, Transcribe, Translate, Textract, Lex, Kendra.

### Chapter 27 — The picture shop
Elastic Transcoder, Kinesis Video Streams.

### Chapter 28 — The piggy bank
Budgets, Cost Explorer, Cost and Usage Report, Savings Plans, Compute Optimizer.

### Chapter 29 — The whole town
The four SAA promises. Lemonade-stand website using friends from earlier chapters. Series finale.

---

## 9. What to do on the next turn

1. Build **Chapter 12 — The super notebook (Aurora)** as Episode 12, 60s, kids voice, captions, helpers, quiz. No storyteller overlay — voice only.
2. Then DynamoDB, ElastiCache, DocumentDB, Neptune, Keyspaces — one cartoon each.
3. Do not rebuild episodes 1–11 unless the user says they are broken.

If the user asks for a different next chapter, obey the user, then come back to this order.
