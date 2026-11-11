---
title: How AI Impacts Skill Formation: What the Research Shows and How to Keep Learning
description: How AI assistance affects how people build skills, covering what Anthropic's 2026 randomised trial found, which ways of using AI help or hurt learning, the risk of de-skilling, and practical strategies for individuals, managers and educators.
date: 2026-11-11
cluster: careers
order: 28
---

<p class="lede">AI can either <strong>accelerate</strong> or <strong>undermine</strong> skill formation, depending on <em>how</em> people use it. When AI does the thinking (writing the code, drafting the answer, solving the problem) people finish tasks but learn much less. When AI is used to <strong>explain, question, give feedback and check understanding</strong>, people can learn as well or better. A 2026 randomised controlled trial from Anthropic found developers who learned a new programming library with AI help scored 17 percentage points lower on a follow-up skills quiz, with no significant time saving, but those who used AI to ask conceptual questions retained far more.</p>

This matters for everyone: students, early-career professionals, managers deciding how to roll out AI tools, and educators. If a generation of workers learns to produce output without building the underlying skills, who will be able to supervise, debug and improve the AI systems of the future? This guide explains what the research shows, why it happens, and practical strategies to use AI without losing (or failing to build) your own capabilities.

## What is skill formation?

**Skill formation** is how people develop capabilities over time: from understanding concepts, to being able to apply them, to performing them fluently and adapting them to new situations. Cognitive science shows that durable learning usually requires **effortful processing**: retrieving information from memory, struggling productively with problems, making and correcting mistakes, and explaining ideas in your own words. Psychologists call some of these beneficial difficulties "desirable difficulties".

AI tools are designed to remove friction. That's great for productivity, but some of that friction is exactly what builds skill.

## What the research shows

### Anthropic's 2026 randomised controlled trial
In January 2026, Anthropic researchers Judy Hanwen Shen and Alex Tamkin published a randomised controlled trial on how AI assistance affects learning ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)).

**Design**
- **52 mostly junior software engineers**, all experienced Python users, none familiar with **Trio** (a Python library for asynchronous programming).
- Participants completed two coding tasks using Trio in 35 minutes. Half could use an AI assistant; half could not.
- Afterwards, all took a quiz (without AI) covering debugging, code reading, code writing and conceptual understanding.

**Results**
- **Learning:** the AI group averaged about **50%** on the quiz versus about **67%** for the no-AI group, a gap of roughly 17 percentage points and a statistically significant, moderately large effect.
- **Debugging** showed the largest gap, which is notable because debugging is precisely the skill needed to supervise AI-written code.
- **Speed:** the AI group finished only about two minutes faster on average, and the difference wasn't statistically significant. Some participants spent a large share of their time writing prompts.

**How people used AI made the difference.** The researchers identified distinct interaction patterns:

| Pattern | Description | Quiz score (approx.) |
|---|---|---|
| **AI delegation** | Let AI write all the code | ~39% |
| **Progressive reliance** | Started asking questions, then handed everything to AI | ~35% |
| **Iterative AI debugging** | Used AI to fix and verify code without understanding it | ~24% |
| **Conceptual inquiry** | Asked AI only conceptual questions; fixed errors themselves | ~65% |
| **Hybrid code + explanation** | Asked for code *with* explanations | ~68% |
| **Generation then comprehension** | Generated code, then asked follow-up questions to understand it | ~86% |

The lesson is not "AI is bad for learning". It's that **delegating the thinking is bad for learning, while using AI to deepen understanding can be very effective.**

**Limitations:** small sample, short-term measurement, one domain (coding), and no test of fully agentic coding tools. The authors expect agentic tools, which do even more of the work autonomously, could have larger effects.

### Other evidence pointing the same way
- **Cognitive offloading:** decades of research show that when we rely on external aids (GPS for navigation, search engines for facts), we invest less effort in remembering and building internal models. AI is a far more powerful offloading tool.
- **Education studies** of AI tutors versus AI answer-givers have generally found that tools that give answers can boost immediate performance but reduce learning when removed, while tools designed to guide (hints, questions, feedback) better preserve learning.
- **Experienced vs novice users:** experts often benefit more from AI because they can evaluate its output; novices may accept flawed output without noticing, and miss the chance to build the expertise needed to evaluate it.

## Why AI can undermine skill formation

1. **It removes productive struggle.** The effort of working out a solution is where much learning happens.
2. **It creates an illusion of competence.** Reading a correct solution feels like understanding it, but recognition isn't the same as being able to produce or debug it.
3. **It reduces retrieval practice.** If you never have to recall or reconstruct knowledge, it doesn't stick.
4. **It hides errors.** When AI fixes your mistakes silently, you don't learn from them.
5. **It shifts attention to prompting.** Time spent managing the AI isn't time spent understanding the domain.

## The bigger risk: a broken apprenticeship model

Many professions build expertise through years of junior-level work: junior developers fixing bugs, junior analysts building models, junior lawyers doing research, junior marketers writing drafts. AI now does much of that work. Companies are hiring fewer juniors in some fields (see [Will AI replace software engineers?](/blog/will-ai-replace-software-engineers/)), and juniors who are hired may delegate their learning tasks to AI.

If the path from novice to expert erodes, organisations risk a future shortage of people who can **design, supervise, debug and take responsibility** for AI-assisted work. This is one of the most important, and least discussed, long-term risks of workplace AI.

## How to use AI and still build skills: strategies for individuals

### 1. Decide: am I trying to learn, or trying to get it done?
Both are legitimate. When the goal is output and you already have the skill, delegate freely and verify. When the goal is to learn, use AI differently.

### 2. Attempt first, then ask
Spend a few minutes trying on your own before asking AI. Even unsuccessful attempts prime your brain to understand the answer.

### 3. Ask for explanations, not just answers
- "Explain the concept behind this before showing any code."
- "Give me a hint, not the solution."
- "Why does this approach work better than the alternative?"

### 4. Use generate-then-understand
If AI writes something, interrogate it: ask what each part does, why it's designed that way, what would break it, and how you'd modify it. This was the highest-scoring pattern in the Anthropic study.

### 5. Debug yourself
When something breaks, try to diagnose it before asking AI to fix it. Debugging is where understanding is tested and built.

### 6. Make AI quiz you
"Ask me five questions to test whether I understand async programming in Trio. Don't give me the answers until I've tried."

### 7. Explain it back
Explain the concept or solution in your own words (to AI, a colleague or in writing) and ask AI to critique your explanation.

### 8. Use learning modes
Several AI tools now offer learning or tutoring modes (Claude and ChatGPT both offer learning-oriented modes) designed to guide rather than give answers.

### 9. Do some work without AI
Periodically complete tasks unaided to check what you can really do on your own.

For a structured learning path, see [How to learn about AI](/blog/how-to-learn-ai/).

## Strategies for managers and organisations

1. **Deploy AI deliberately.** Productivity gains today shouldn't come at the expense of the expertise you'll need tomorrow.
2. **Protect learning time for juniors.** Design some tasks as learning assignments where AI is used as a tutor, not a ghostwriter.
3. **Pair AI with mentorship.** Code reviews, case reviews and draft reviews where juniors explain their reasoning, including AI-generated parts.
4. **Assess understanding, not just output.** Ask people to walk through how their work works.
5. **Build verification skills explicitly.** Train people to test, critique and debug AI output: the key supervisory skill.
6. **Keep the apprenticeship pipeline.** If AI reduces junior workloads, redesign junior roles around learning, supervision and judgement rather than eliminating them.
7. **Measure long-term capability**, not just short-term throughput.

## Strategies for educators

- **Design assignments that require process, not just product:** drafts, reflections, oral explanations, in-class work.
- **Teach AI literacy:** how models work, where they fail, how to verify, and how to use AI for learning.
- **Use AI as a tutor:** Socratic questioning, hints, feedback on drafts.
- **Assess understanding in AI-free settings** periodically.
- **Be explicit about when AI is allowed and how,** and why.

## Does AI ever help skill formation?

Yes, when used well, AI can be a powerful learning tool:

- **Personalised tutoring** at any hour, at the learner's pace
- **Instant feedback** on writing, code and problem solving
- **Explanations at multiple levels** until a concept clicks
- **Practice generation:** unlimited exercises and quizzes
- **Lowering barriers** to entering new fields, languages and technical topics

The difference lies in whether the learner stays cognitively engaged. AI that does the thinking for you weakens learning; AI that makes you think more strengthens it.

## Frequently asked questions

### How does AI impact skill formation?
AI can weaken skill formation when people use it to do the thinking for them, by delegating tasks, accepting answers without understanding or letting it fix errors silently. It can strengthen learning when used to explain concepts, give hints and feedback, quiz the learner and deepen understanding.

### What did Anthropic's study on AI and coding skills find?
In a randomised trial with 52 developers learning a new Python library, those who used AI scored about 17 percentage points lower on a follow-up skills quiz (about 50% versus 67%), with no statistically significant time saving. Developers who used AI for conceptual questions or to understand generated code scored much higher than those who fully delegated.

### Does using AI make you less skilled?
Not necessarily. Relying on AI for tasks you already master usually doesn't reduce your skill. But using AI to bypass learning new skills can prevent those skills from forming, and over-reliance over time can let existing skills fade.

### How can I use AI without losing my skills?
Attempt tasks first, ask AI for explanations and hints rather than answers, interrogate any code or text it generates, debug problems yourself, have AI quiz you, explain concepts back in your own words, and periodically work without AI.

### Should companies limit AI use for junior employees?
Rather than banning AI, companies should design learning-focused tasks, pair AI with mentorship and reviews, assess understanding rather than just output, and train juniors to verify and debug AI work, so they build the expertise needed to supervise AI in the future.
