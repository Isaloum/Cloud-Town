# Cloud Town — series bible for the next agent

Read this **before** adding a cartoon, a chapter, or a service.

**If you are Claude, Gemini, or a new Grok session:** you cannot see the old Grok sandbox. Use this file plus [`HANDOFF.md`](HANDOFF.md).

This file is the plan. The **character bible in §6 is the only source of truth** for names and shapes. Never redesign a row that already exists.

---

## 1. Target (what we are building)

**Cloud Town** is a **kid cartoon series** that teaches **every in-scope service on the AWS Solutions Architect Associate exam (SAA-C03)**.

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

The user (ihab) wants kids to **learn AWS in an interesting way**, and later agents to **keep going on the same trail** until SAA is complete.

---

## 2. Purpose (why this shape)

| Goal | How we do it |
|---|---|
| Cover the SAA exam | Official service names stay official. |
| Make it stick for kids | One metaphor per service. Friends **work together**. Recap line at the end of every cartoon. |
| Make it a series, not a one-off | Locked character bible. Locked art style. Locked length / voice. |
| Make the next agent fast | This file. Next chapter is the first unbuilt stop on the remaining trail. |

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
- **No text, letters, logos, or watermarks in generated stills or video.**
- Grown-up detail belongs on helper cards / PDF scripts, not in the 60-second voice.

---

## 4. Product the user actually sees

Single page. Order from the top:

1. Title **Cloud Town**
2. **Episode tabs**
3. **Theater** — 9:16 cartoon, play, voice baked in
4. Voice-over script (copy box) + PDF pages
5. Trail / checklist of remaining SAA services

---

## 5. Status (do not redo these unless the user says they are broken)

| Ep | Title | AWS | Length | Notes |
|---|---|---|---|---|
| 1 | The helpers | S3, EC2, Lambda | 30s | Sammy / Eddie / Lulu intro. Grandfathered at 30s. |
| 2 | Sammy’s closet | S3 classes + Glacier family | 60s | |
| 3 | Copies and locks | Versioning, CRR, encryption, BPA, Object Lock | 60s | |
| 4 | The neighborhood | VPC, IGW, NAT, ALB, peering, VPN | 60s | Kid voice (Ana). |
| 5 | The other boxes | EBS, EFS, FSx, Glacier, Storage Gateway, Backup | 60s | Kid voice (Ana). |
| 6 | The key keepers | IAM, Identity Center, Cognito, Directory Service, RAM | 60s | |
| 7 | The key ring | IAM user, role, policy, SCP, STS | 60s | |
| 8 | The school badge | IAM Identity Center | 60s | |
| 9 | The guest sticker | Cognito | 60s | |
| 10 | The vaults | RDS, Aurora, DynamoDB, ElastiCache, DocumentDB, Neptune, Keyspaces | 60s | |
| 11 | The tidy notebook | RDS | 60s | |
| 12 | The super notebook | Aurora | 60s | |
| 13 | The nap | Aurora Serverless | 60s | |
| 14 | The labeled cubbies | DynamoDB | 60s | |
| 15 | The cubby extras | DAX, Global Tables, on-demand, strong/eventual | 60s | |
| 16 | The unwrapped snack | ElastiCache | 60s | |
| 17 | The story vault | DocumentDB | 60s | |
| 18 | The family tree | Neptune | 60s | |
| 19 | The wide cubbies | Keyspaces | 60s | |

**Next built cartoon:** compute friends — **ECS, EKS, Fargate** (toy boxes that run many Eddies).

Voice: 58 seconds talking + **2 seconds empty** at the end. Closer: *See you next time in Cloud Town, high up in the sky!*

---

## 6. Character bible (locked — only source of truth)

**Never change an existing character.** Do not redesign a name, a job, or a shape that already has a row. When a character already exists, animate that shape. Do not generate a second Sammy.

### Art rules (locked)

- 3D Pixar-style, warm sunset, cobblestone, cream + teal, cute faces on objects.
- **No AWS logos, no letters, no words** on the picture.
- **No narrator kid in the corner** — voice is off-screen only.
- **Characters never speak on camera.** Body reactions only (blink, nod, wiggle, wave). **No mouth animation. No lip-sync.**
- Render **native 9:16, 1080×1920**. Full-frame cartoon. **No letterbox. No blurred bars. No 16:9 strip in the middle.**
- Cloud Town floats in the sky.

### Stars (they come back every episode)

| Name | AWS | Shape |
|---|---|---|
| **Sammy** | **S3** | Cream treasure **chest** with gold clasps, round friendly face, short arms/legs. His house is a **closet / bucket**. |
| **Eddie** | **EC2** | Cream **retro CRT computer**. Teal screen. Chunk of a body, round face on the monitor, arms and legs. Never sleeps. Lives in the **backyard** (private subnet). |
| **Lulu** | **Lambda** | Small round **yellow-gold spark / orb** with a face. Pops in, does one job, **poofs away**. |
| **Maya** | (kid, not a service) | Little girl. Brown hair, **pink/coral dress**. Lives in Cloud Town. Friends with Eddie and Lulu. |
| **Dot** | **the vaults** (RDS family) | Cream **notebook / vault** with a face. Hides in the backyard. “Dot” is the whole database family; each vault has its own shape below. |

### The neighborhood (Episode 4)

| Name | AWS | Shape |
|---|---|---|
| **Vivi** | **VPC** | Wooden **picket fence** with a face. Our private neighborhood. |
| **Front street** | Public subnet | Sunny cobblestone street **outside** the backyard. |
| **Backyard** | Private subnet | Quiet yard **behind** the fence. Eddie and Dot hide here. |
| **Iggie** | **Internet Gateway** | Big wooden **front gate / arch**. |
| **Albie** | **ALB** | **Doorman** on the public street. Greets visitors. |
| **Nat** | **NAT Gateway** | **Mail window**. Eddie can send mail out. Strangers cannot come in. Egress. |
| **Sky bridge** | VPC peering | Bridge of clouds to **another Cloud Town**. |
| **Secret tunnel** | VPN / Direct Connect | Tunnel down to a **house on the ground** (on-prem). |

### Sammy’s other boxes (Episode 5)

| Name | AWS | Shape |
|---|---|---|
| **Backpack disk** | **EBS** | A **backpack** on Eddie. One Eddie only. Travels with him. |
| **Shared fridge** | **EFS** | A **fridge** many Eddies open together. |
| **Fancy cupboards** | **FSx** | Fancy wooden **cupboards**. |
| **Deep freezer** | **S3 Glacier** | Icy **freezer** in the back. Cheap. Slow to open. |
| **Little door at home** | **Storage Gateway** | A small **door** between the ground house and Sammy. |
| **Spare-copy machine** | **AWS Backup** | A machine that makes **spare copies**. |

### Key keepers (Episodes 6–9)

| Name | AWS | Shape |
|---|---|---|
| **Key ring** | **IAM** | A **ring of keys**. |
| **Name tag** | IAM **user** | A kid’s **name tag**. Lives in town. One house only. |
| **Class** | IAM **group** | A whole class of name tags. |
| **Borrowed badge** | IAM **role** | A **badge you borrow** for one job, then give back. |
| **Door list** | IAM **policy** | A list of **may / may-not** on the door. |
| **Principal’s rule** | **SCP** | The **principal’s** rule. No classroom may break it. |
| **Sunset pass** | **STS** | A **visitor pass that peels off at sunset**. |
| **School badge** | **IAM Identity Center** | **One badge, many classrooms**. Not a name tag. Not a guest sticker. |
| **Guest sticker** | **Cognito** | A **sticker** for lemonade guests. Not town workers. |
| **Lemonade club list** | Cognito **user pool** | Sign-up list for guests. |
| **Tray of sunset passes** | Cognito **identity pool** | Tray of short STS passes. |
| **Old class list** | **Directory Service** | The old school’s list, brought into the sky. |
| **Shared swing** | **RAM** | A **swing** you share. Not the house key. |

### Vaults (Episodes 10–19)

| Name | AWS | Shape |
|---|---|---|
| **Tidy notebook** | **RDS** | Cream **lined notebook** with a face. Rows and columns. AWS turns the pages. Lives in the backyard. |
| **Super notebook** | **Aurora** | A **bigger, glowing** notebook. Extra copies. Extra fast. Still MySQL / PostgreSQL. |
| **Nap notebook** | **Aurora Serverless** | The same super notebook **asleep** when empty. Wakes and grows for a crowd. |
| **Labeled cubbies** | **DynamoDB** | Wooden **cubby mascot** with round holes. One toy per cubby. Grab **by name**. |
| **Cubby extras** | DAX, Global Tables, on-demand, strong/eventual | **Snack shelf** on the cubbies (DAX). Twin cubbies in another town. |
| **Unwrapped snack** | **ElastiCache** | An **open snack tray**. Redis = a list. Memcached = a simple tray. **Not the vault.** |
| **Story vault** | **DocumentDB** | A **leather storybook**. Whole tale in one pile of pages. Talks like MongoDB. |
| **Family tree** | **Neptune** | A smiling **oak tree** with **glowing yarn** between friends. Who is related to who. A graph. |
| **Wide cubbies** | **Keyspaces** | A **much wider** wooden cubby. One name, then a **long row of slots**. Cassandra talk. |

### Setting

**Cloud Town** = a cute cobblestone town in the clouds at sunset. Cream houses, teal lamps, no logos.

**Narrator** = off-screen kid voice (AnaNeural). Never a face overlay. Characters do not mouth the words.

---

## 6.1 New characters (required before any new cartoon)

For any **SAA-C03 service not already in this bible**:

1. Invent **name**, **kid metaphor**, and **shape**.
2. Shape rules: **one object with a face**, cream + teal, **one job**, **one sentence a 6-year-old can repeat**.
3. **Add the row to this file (§6)** and **push to GitHub BEFORE generating its video**.
4. **Never change an existing character.**

Template row:

| Name | AWS | Shape |
|---|---|---|
| **(name)** | **(service)** | **(one object with a face). (one job). (one kid sentence).** |

---

## 7. Episode contract (every new cartoon)

New episodes are **60 seconds**.

- Video: `public/<nn>-<Title>.mp4` — **native 1080×1920 (9:16)**, H.264, yuv420p, 24 fps, AAC stereo, `+faststart`. **No letterbox. No blurred bars.**
- Audio: **Kids voice baked into the mp4.** AnaNeural, about −16 LUFS. Talk for **58s**, last **2s** empty.
- Voice: kids voice only. **No on-camera talking mouths.**
- Captions: `public/<nn>-<Title>.vtt` when available.
- Script PDF: every episode. End with “Now you know …! See you next time in Cloud Town, high up in the sky!”
- **No storyteller kid in the corner.**
- **Working together** is mandatory.

Code checklist when a chapter opens:

1. Add the episode to `src/lib/scripts.ts`.
2. Put files in `public/` (mp4, vtt, poster).
3. Add any **new** character row to **this file** and push **before** the video.
4. Typecheck, smoke play, leave the app running.

---

## 8. Remaining beat sheets (build in this order)

### Next — The toy boxes (compute)
ECS, EKS, Fargate. Boxes that run many Eddies.

### Then — The front door
Route 53, CloudFront, Global Accelerator, ACM, API Gateway, Amplify.

### Then — The post office
SQS, SNS, EventBridge, Step Functions, AppFlow, AppSync, MQ.

### Then — The watchtower
CloudWatch, CloudTrail, Config, X-Ray, Health Dashboard.

### Then — The builder crew
Auto Scaling, Beanstalk, Batch, ECR.

### Then — The safety net
KMS, Secrets Manager, WAF, Shield, GuardDuty, Inspector, Macie, Security Hub.

### Then — The town hall
CloudFormation, Organizations, Control Tower, Systems Manager, CLI, Console, Trusted Advisor.

### Then — The movers
MGN, DMS, DataSync, Snow Family, Transfer Family.

### Then — The library
Athena, Redshift, EMR, Glue, Kinesis, OpenSearch, QuickSight.

### Then — The talking friends
SageMaker, Rekognition, Comprehend, Polly, Transcribe, Translate, Textract, Lex, Kendra.

### Then — The picture shop
Elastic Transcoder, Kinesis Video Streams.

### Then — The piggy bank
Budgets, Cost Explorer, Cost and Usage Report, Savings Plans, Compute Optimizer.

### Then — The whole town
The four SAA promises. Series finale.

---

## 9. What to do on the next turn

1. If the next service is **not** in §6, invent the character, **add the row, push SERIES.md**, then shoot the cartoon.
2. Build native **9:16 1080×1920** (no blurred bars), 60s, kids voice, 58+2, no mouth animation, no kid overlay.
3. Do not rebuild episodes 1–19 unless the user says they are broken.
4. Do not change Sammy, Eddie, Lulu, Maya, Dot, Vivi, Iggie, Albie, Nat, or any other locked row.

If the user asks for a different next chapter, obey the user, then come back to this order.
