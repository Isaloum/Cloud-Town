Cloud Town video production. Read this before every episode. It replaces all earlier instructions.

SOURCE OF TRUTH
- repo/SERIES.md section 6 is the character bible. Every character has a locked row with a shape line.
- repo/refs/ holds one locked reference PNG per character (54 files, numbered). The image outranks the text if they ever disagree.
- The book images (made by GPT) are the official look. The videos must match them.

THE 3 PILLARS (an episode ships only if all 3 pass)
1. ONE VOICE. The narrator is the same AnaNeural kid voice as episodes 1-38, in every episode, same speed, same tone. Smooth, even pace, short natural pauses. 58 seconds of speech, then 2 seconds silent. Never an adult voice. Never a different voice.
2. FLAWLESS PICTURES AND STORY. One place and one time of day per episode (sunset). The main character is in every shot, waist-up or full body, face never cropped. No empty shots, no jump cuts to new places, no day-to-night switches, no random props, no shapes that could look strange or inappropriate. Every character looks exactly like its refs/ image in every clip, start to end. Characters never merge into one another.
3. EASY FOR A 5-YEAR-OLD. Every sentence of the voice-over matches what is on screen at that moment. The problem is shown in the first 3 seconds, before any greeting. One idea per episode. Adults learn the AWS concept, real kids can follow it.

RULES
1. Never invent a character. If a service has no section 6 row, stop and ask for one to be locked first.
2. Never put a character name inside an image or video prompt. Copy its shape line from section 6.
3. Attach the refs/ image of every character that appears. If the reference image and the text disagree, follow the image.
4. No text, letters, numbers, signs, labels, posters or logos anywhere in frame. No bags, cards, boxes or signs with writing.
5. Humans: Maya, Theo and Remy only, and only the ones the episode names. Theo appears from EP40 on. No extras, no background people, no second child. Named friends are always their object (Kira is a box in a hat, never a girl).
6. Render native 9:16, 1080x1920, 24 fps, 60 seconds exactly, full frame. No letterbox, no blurred bars, no 16:9 strip in the middle.
7. Palette: sunset sky, cream + coral + teal, cobblestone. No white rooms, no clay look.
8. No lip-sync, no mouth animation. Body reactions only. Narrator is off-screen.
9. At most 7 clips. Regenerate a clip at most once. If it is still wrong, reuse an earlier clean clip. Never substitute a different object or character.
10. Never patch a broken episode clip by clip more than once. If the second try fails, re-render the whole episode from the full prompt in a fresh chat.
11. Export: public/NN-Slug.mp4 + public/NN-Slug.vtt (one cue per sentence) + public/posters/NN-Slug.jpg. Commit with the message "Add episode NN Title" or "Redo episode NN Title".
12. Your own report is not proof. Nothing is final until Claude's QA passes (voice pitch, picture sheet, end frame, text scan) and Ihab watches and approves. Only then is it uploaded or scheduled.

NEW DISTRICTS
Districts 20-32 in docs/SERIES_PLAN.md still need characters. For each new one: name it under the naming rule in section 3, write a shape line, get Ihab's approval, add the row to section 6, generate its reference image into refs/, then shoot.

WHY THESE RULES EXIST (do not repeat)
- EP39-41 and EP57-92 shipped with an adult voice because the prompt said "narrator voice" instead of the kid voice.
- EP38 had a pipe shape that read as inappropriate. EP37 drew a heart that was not a heart.
- EP39 redo 1 added a second child and turned the computer into a white robot. Redo 2 added gibberish signs and a suitcase. Redo 3 merged the chest and the computer into one body. Redo 4 (with the reference image) finally kept them separate.
- EP53-61 jumped between day and night, empty streets and new places.
- EP10-19 rendered as a 16:9 strip with blurred bars.
