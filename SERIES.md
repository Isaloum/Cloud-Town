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
| 0 | What is the cloud? | the idea of the cloud | 60s | Native 9:16. Maya on the ground. Helpers wave, no names yet. |
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

**Pattern for every remaining district:** one **overview** episode (the district title), then **one 60s cartoon per service** — same as Episode 10 (The vaults) plus 11–19. If a service cannot fill 60s honestly, **say so before shooting** and propose pairing. **Do not pair silently.**

**Next built cartoon:** Episode **26 — Zip (CloudFront)**.

Voice: 58 seconds talking + **2 seconds empty** at the end. Closer: *See you next time in Cloud Town, high up in the sky!*

Planned (not built unless noted):

| Ep | Title | AWS | Notes |
|---|---|---|---|
| 20 | The toy boxes | ECS, EKS, Fargate | **overview — built** |
| 21 | Boxy | ECS | **built** |
| 22 | Kira | EKS | **built** |
| 23 | Fay | Fargate | **built** |
| 24 | The front door | Route 53, CloudFront, Global Accelerator | **overview — built** |
| 25 | Mapi | Route 53 | **built** |
| 26 | CloudFront | CloudFront | |
| 27 | Global Accelerator | Global Accelerator | |
| 28 | The name tag on the door | ACM, API Gateway, Amplify | overview |
| 29 | ACM | ACM | |
| 30 | API Gateway | API Gateway | |
| 31 | Amplify | Amplify | |
| 32 | The post office | SQS, SNS, EventBridge | overview |
| 33 | SQS | SQS | |
| 34 | SNS | SNS | |
| 35 | EventBridge | EventBridge | |
| 36 | The recipe and the river | Step Functions, AppFlow, AppSync, MQ | overview |
| 37 | Step Functions | Step Functions | |
| 38 | AppFlow | AppFlow | |
| 39 | AppSync | AppSync | |
| 40 | MQ | Amazon MQ | |
| 41 | The watchtower | CloudWatch, CloudTrail, Config, X-Ray | overview |
| 42 | CloudWatch | CloudWatch | |
| 43 | CloudTrail | CloudTrail | |
| 44 | Config | Config | |
| 45 | X-Ray | X-Ray | |
| 46 | The builder crew | Auto Scaling, Beanstalk, Batch, ECR | overview |
| 47 | Auto Scaling | Auto Scaling | |
| 48 | Beanstalk | Elastic Beanstalk | |
| 49 | Batch | Batch | |
| 50 | ECR | ECR | |
| 51 | The safety net | KMS, Secrets Manager, WAF, Shield | overview |
| 52 | KMS | KMS | |
| 53 | Secrets Manager | Secrets Manager | |
| 54 | WAF | WAF | |
| 55 | Shield | Shield | |
| 56 | The night watch | GuardDuty, Inspector, Macie, Security Hub | overview |
| 57 | GuardDuty | GuardDuty | |
| 58 | Inspector | Inspector | |
| 59 | Macie | Macie | |
| 60 | Security Hub | Security Hub | |
| 61 | The town hall | CloudFormation, Organizations, Control Tower, Systems Manager | overview |
| 62 | CloudFormation | CloudFormation | |
| 63 | Organizations | Organizations | |
| 64 | Control Tower | Control Tower | |
| 65 | Systems Manager | Systems Manager | |
| 66 | The grown-up desk | CLI, Console, Trusted Advisor | overview |
| 67 | CLI | AWS CLI | |
| 68 | Console | AWS Console | |
| 69 | Trusted Advisor | Trusted Advisor | |
| 70 | The movers | MGN, DMS, DataSync, Snow Family, Transfer Family | overview |
| 71 | MGN | MGN | |
| 72 | DMS | DMS | |
| 73 | DataSync | DataSync | |
| 74 | Snow Family | Snow Family | |
| 75 | Transfer Family | Transfer Family | |
| 76 | The library | Athena, Redshift, Glue, Kinesis, OpenSearch, EMR, QuickSight | overview |
| 77 | Athena | Athena | |
| 78 | Redshift | Redshift | |
| 79 | Glue | Glue | |
| 80 | Kinesis | Kinesis | |
| 81 | OpenSearch | OpenSearch | |
| 82 | EMR | EMR | |
| 83 | QuickSight | QuickSight | |
| 84 | The talking friends | SageMaker, Rekognition, Comprehend, Polly, Transcribe, Translate, Textract, Lex, Kendra | overview |
| 85 | SageMaker | SageMaker | |
| 86 | Rekognition | Rekognition | |
| 87 | Comprehend | Comprehend | |
| 88 | Polly | Polly | |
| 89 | Transcribe | Transcribe | |
| 90 | Translate | Translate | |
| 91 | Textract | Textract | |
| 92 | Lex | Lex | |
| 93 | Kendra | Kendra | |
| 94 | The picture shop | Elastic Transcoder, Kinesis Video Streams | overview |
| 95 | Elastic Transcoder | Elastic Transcoder | |
| 96 | Kinesis Video Streams | Kinesis Video Streams | |
| 97 | The piggy bank | Budgets, Cost Explorer, CUR, Savings Plans, Compute Optimizer | overview |
| 98 | Budgets | Budgets | |
| 99 | Cost Explorer | Cost Explorer | |
| 100 | CUR | Cost and Usage Report | |
| 101 | Savings Plans | Savings Plans | |
| 102 | Compute Optimizer | Compute Optimizer | |
| 103 | The whole town | SAA four promises | finale |

---

## 6. Character bible (locked — only source of truth)

**Never change an existing character.** Do not redesign a name, a job, or a shape that already has a row. When a character already exists, animate that shape. Do not generate a second Sammy.

### Art rules (locked)

- 3D Pixar-style, warm sunset, cobblestone, cream + teal, cute faces on objects.
- **Every shot keeps the Cloud Town palette:** sunset sky, **cream + coral + teal**, cobblestone. **No flat white rooms. No clay-render look.**
- **No AWS logos, no letters, no words** on the picture.
- **No narrator kid in the corner** — voice is off-screen only.
- **Characters never speak on camera.** Body reactions only (blink, nod, wiggle, wave). **No mouth animation. No lip-sync.**
- **No humans on screen except Maya** unless they have a §6 row. If a story needs a second kid, **lock the row first.** Do not reuse unnamed extras.
- **Named friends are always their object.** Boxy, Kira, Fay, Eddie, Sammy, Lulu stay boxes / computers / sparks. **Never draw a friend as a human.** (Episode 22 briefly showed Kira as a girl in a hat — do not repeat.)
- **Remy is always a boy in a teal sweater.** Never a mouse. Never a girl.
- Render **native 9:16, 1080×1920**. Full-frame cartoon. **No letterbox. No blurred bars. No 16:9 strip in the middle.**
- Cloud Town floats in the sky.

### Stars (they come back every episode)

| Name | AWS | Shape |
|---|---|---|
| **Sammy** | **S3** | Cream treasure **chest** with gold clasps, round friendly face, short arms/legs. His house is a **closet / bucket**. |
| **Eddie** | **EC2** | Cream **retro CRT computer**. Teal screen. Chunk of a body, round face on the monitor, arms and legs. Never sleeps. Lives in the **backyard** (private subnet). |
| **Little Eddies** | **containers** (inside Boxy) | **Tiny copies of Eddie.** Cream mini CRT with a teal screen face, **palm-sized**. Never white robots. Never generic figures. |
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

### The toy boxes (Episodes 20–23)

| Name | AWS | Shape |
|---|---|---|
| **Boxy** | **ECS** | Cream **toy box** with a friendly face and a teal latch. Holds many little Eddie toys and runs them. *Boxy is a toy box that runs many Eddies.* |
| **Kira** | **EKS** | Cream **toy box with a teal captain’s hat**. Lines up many boxes the Kubernetes way. *Kira is the captain of the toy boxes.* |
| **Fay** | **Fargate** | Cream **toy box with tiny teal wings**, floating. **Wings are always teal, never white.** No Eddie holds her. *Fay flies. No Eddie has to hold the box.* |

### The front door (Episodes 24–27)

| Name | AWS | Shape |
|---|---|---|
| **Mapi** | **Route 53** | Cream wooden **signpost** with a friendly face and teal arrows. Points visitors to the right house. *Mapi is the town map. She points you to the right house.* |
| **Zip** | **CloudFront** | Cream **fast road** with a face, and a little stall at the **edge of town** holding copies of Sammy’s toys. *Zip is the fast road. Copies wait at the edge so you don’t walk all the way in.* |
| **Boost** | **Global Accelerator** | Cream **front-door arch** with a face and teal rocket streaks. One fixed door. Sends visitors down the fastest road. *Boost is the rocket path. One door. Always the fastest road.* |
| **Remy** | (kid, not a service) | Visiting **boy**. Curly dark hair, **teal sweater**, cream shorts. **Always a boy. Never a girl. Never a mouse or any animal.** *Remy is a visitor from far away.* |

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

**Story rule (every episode):**

- Open on a **problem within the first 10 seconds.** Someone needs something and it is not working.
- Every new friend does a **visible action on screen** that fixes part of the problem. Never “meet X” with a wave.
- End on the **payoff:** the thing works, a kid reacts.
- **Bright props** (toys, games, letters) in **red / yellow / blue** against the cream-and-teal town.
- **Camera moves** in at least 3 shots. **No shot held longer than 6 seconds.**
- **No text, letters, or logos** anywhere in the picture. Episode 20 had “CLOUD TOWN” on a classroom board — **do not repeat.**
- **Little Eddies** are tiny copies of Eddie (cream mini CRT, teal screen, palm-sized). Never white robots.
- **Only Maya** as a human unless the extra has a §6 row.
- **Never draw a named friend as a human.** Kira is a box with a hat, always.
- Palette: **sunset sky, cream + coral + teal, cobblestone.** No white rooms. No clay look.

**Prompt rule (every image and every video clip):**

- **Never use character names** in image or video prompts (no Maya, Eddie, Sammy, Lulu, Mapi, Boxy, Kira, Fay, Remy, Zip, Boost, …).
- **Always describe the shape from the bible row:** “cream treasure chest with gold clasps and a round smiling face”; “cream retro CRT computer with a teal screen face, arms and legs”; “small glowing yellow-gold orb with a face”; “girl with brown hair in a coral dress”; “cream wooden signpost with a face and teal arrows”.
- If a shot cannot be generated **on-model**, **drop the shot and reuse an approved still**. Never substitute an animal, a robot, a flame, or a different object.
- **Emotion beat:** the problem shot shows a **worried face for 2–4 seconds**, mild, **no tears**. The payoff shot shows the **same character happy**.

**Prompt rule (every still and every clip):**

- **Never use character names** in image or video prompts (not Sammy, Eddie, Lulu, Maya, Mapi, Boxy, Kira, Fay, Remy, or any other row).
- **Always describe the shape from the bible row instead**, e.g. “cream treasure chest with gold clasps and a round smiling face”; “cream retro CRT computer with a teal screen face, arms and legs”; “small glowing yellow-gold orb with a face”; “girl with brown hair in a coral dress”.
- If a shot **cannot be generated on-model**, **drop the shot and reuse an approved still**. **Never substitute an animal or a different object.**
- **Emotion beat:** the problem shot shows a **worried face for 2–4 seconds**, mild, **no tears**. The payoff shot shows the **same character happy**.

Code checklist when a chapter opens:

1. Add the episode to `src/lib/scripts.ts`.
2. Put files in `public/` (mp4, vtt, poster).
3. Add any **new** character row to **this file** and push **before** the video.
4. Typecheck, smoke play, leave the app running.

---

## 8. Remaining beat sheets (build in this order)

Vaults pattern: **overview, then one 60s per service.** If a service cannot fill 60s honestly, say so **before** shooting and propose pairing. Do not pair silently.

### 20 — The toy boxes (overview) — **built**
Class taps play. Eddie drops toys. Boxy pops helpers. Kira lines up five boxes. Fay flies with no Eddie under her. Maya cheers.

### 21 — Boxy (ECS only) — **built**
Many small jobs in one box. One little Eddie inside stops. That job goes dark. Boxy pops a new little Eddie in. The job lights up again.

### 22 — Kira (EKS only) — **built**
Five Boxys doing their own thing. Toys everywhere. Kira whistles, lines them up, replaces a box that tips, adds a box when the line gets long. The whole row works in step.

### 23 — Fay (Fargate only) — **built**
Every Eddie is busy. Nobody can carry the box. Boxy sits on Eddie's head (needs an Eddie). Fay flies the box with nobody underneath. Jobs done, she lands and rests. Nobody pays for an idle Eddie.

### 24 — The front door (overview) — **built**
Remy from far away wants Maya’s drawing. He gets lost, then arrives slow. Mapi points the way. Zip hands a copy at the edge. Boost is one rocket door, always the fastest road. Remy smiles at the drawing.

### 25 — Mapi (Route 53 only) — **built (reshot, bible shapes)**
Two same-color houses. Friends knock on the wrong door. Mapi names each house (emblem, no letters), points by name not color. Closed house → she points to the open twin (failover). All three at the right door. Maya waves.

### 26 — Zip ← **NEXT (CloudFront)**
### 27 — Boost (Global Accelerator)

### 28 — The name tag on the door (overview)
ACM, API Gateway, Amplify.

### 29 ACM · 30 API Gateway · 31 Amplify

### 32 — The post office (overview)
SQS, SNS, EventBridge.

### 33 SQS · 34 SNS · 35 EventBridge

### 36 — The recipe and the river (overview)
Step Functions, AppFlow, AppSync, MQ.

### 37 Step Functions · 38 AppFlow · 39 AppSync · 40 MQ

### 41 — The watchtower (overview)
CloudWatch, CloudTrail, Config, X-Ray.

### 42 CloudWatch · 43 CloudTrail · 44 Config · 45 X-Ray

### 46 — The builder crew (overview)
Auto Scaling, Beanstalk, Batch, ECR.

### 47 Auto Scaling · 48 Beanstalk · 49 Batch · 50 ECR

### 51 — The safety net (overview)
KMS, Secrets Manager, WAF, Shield.

### 52 KMS · 53 Secrets Manager · 54 WAF · 55 Shield

### 56 — The night watch (overview)
GuardDuty, Inspector, Macie, Security Hub.

### 57 GuardDuty · 58 Inspector · 59 Macie · 60 Security Hub

### 61 — The town hall (overview)
CloudFormation, Organizations, Control Tower, Systems Manager.

### 62 CloudFormation · 63 Organizations · 64 Control Tower · 65 Systems Manager

### 66 — The grown-up desk (overview)
CLI, Console, Trusted Advisor.

### 67 CLI · 68 Console · 69 Trusted Advisor

### 70 — The movers (overview)
MGN, DMS, DataSync, Snow Family, Transfer Family.

### 71 MGN · 72 DMS · 73 DataSync · 74 Snow Family · 75 Transfer Family

### 76 — The library (overview)
Athena, Redshift, Glue, Kinesis, OpenSearch, EMR, QuickSight.

### 77 Athena · 78 Redshift · 79 Glue · 80 Kinesis · 81 OpenSearch · 82 EMR · 83 QuickSight

### 84 — The talking friends (overview)
SageMaker, Rekognition, Comprehend, Polly, Transcribe, Translate, Textract, Lex, Kendra.

### 85 SageMaker · 86 Rekognition · 87 Comprehend · 88 Polly · 89 Transcribe · 90 Translate · 91 Textract · 92 Lex · 93 Kendra

### 94 — The picture shop (overview)
Elastic Transcoder, Kinesis Video Streams.

### 95 Elastic Transcoder · 96 Kinesis Video Streams

### 97 — The piggy bank (overview)
Budgets, Cost Explorer, CUR, Savings Plans, Compute Optimizer.

### 98 Budgets · 99 Cost Explorer · 100 CUR · 101 Savings Plans · 102 Compute Optimizer

### 103 — The whole town
The four SAA promises. Series finale. Everyone works together.

---

## 9. What to do on the next turn

1. If the next service is **not** in §6, invent the character, **add the row, push SERIES.md**, then shoot the cartoon.
2. Build native **9:16 1080×1920** (no blurred bars), 60s, kids voice, 58+2, no mouth animation, no kid overlay.
3. Overview first, then one cartoon per service. **Do not pair silently.**
4. Do not rebuild episodes 0–19 unless the user says they are broken.
5. Do not change Sammy, Eddie, Lulu, Maya, Dot, Vivi, Iggie, Albie, Nat, Boxy, Kira, Fay, or any other locked row.

If the user asks for a different next chapter, obey the user, then come back to this order.
