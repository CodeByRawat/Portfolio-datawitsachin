---
title: "What Is Reinforcement Learning (RL)? How It Works, Examples and RLHF Explained"
description: "A clear guide to reinforcement learning: agents, environments, rewards and policies, how RL works, key algorithms (Q-learning, policy gradients, PPO), famous examples (AlphaGo), RLHF and RL for reasoning in ChatGPT and Claude, business uses, and limitations."
date: 2026-11-12
cluster: ai-basics
order: 56
---

<p class="lede"><strong>Reinforcement learning (RL)</strong> is a type of machine learning in which an <strong>agent</strong> learns to make decisions by <strong>trial and error</strong>: it takes actions in an <strong>environment</strong>, receives <strong>rewards</strong> or penalties, and gradually learns a strategy (a <strong>policy</strong>) that maximises its total reward over time. It's how AI learned to beat world champions at Go, how robots learn to walk, and a key ingredient in training modern AI assistants like ChatGPT and Claude to be helpful and to reason.</p>

If you've searched "what is an RL", this is it: RL is the branch of machine learning concerned with learning from **consequences** rather than from labelled examples. This guide explains how reinforcement learning works, the key concepts and algorithms, famous examples, how RL is used to train large language models (RLHF and RL for reasoning), business applications, and its limitations.

## Reinforcement learning in plain English

Think about how you'd train a dog to sit. You don't show it a million labelled examples of "sitting". You wait for it to try things, and when it sits, you give it a treat. Over time, it learns that sitting when you say "sit" leads to rewards.

Reinforcement learning works the same way:
- The **agent** (the dog / the AI) tries **actions**
- The **environment** (the world / the game / the system) responds
- The agent receives a **reward** (treat / points / success) or penalty
- Over many attempts, the agent learns which actions lead to the most reward

## How RL differs from other machine learning

| | Supervised learning | Unsupervised learning | Reinforcement learning |
|---|---|---|---|
| **Learns from** | Labelled examples (input → correct answer) | Unlabelled data | Rewards from interacting with an environment |
| **Feedback** | The right answer for every example | None | A reward signal, often delayed |
| **Goal** | Predict labels | Find structure | Maximise long-term reward |
| **Example** | Spam classification | Customer segmentation | Playing a game, controlling a robot |

(Overview of all types: [What is machine learning?](/blog/what-is-machine-learning/))

## Key concepts

- **Agent:** the learner and decision-maker.
- **Environment:** everything the agent interacts with.
- **State (s):** the current situation (the board position, the robot's sensor readings).
- **Action (a):** what the agent can do.
- **Reward (r):** the feedback signal after an action (+1 for winning, -1 for crashing).
- **Policy (π):** the agent's strategy, a mapping from states to actions.
- **Value function:** how much total future reward the agent can expect from a state (or state-action pair).
- **Episode:** one complete run (one game, one attempt).
- **Discount factor (γ):** how much the agent values future rewards versus immediate ones.
- **Exploration vs exploitation:** the core dilemma of trying new actions to discover better strategies (exploration) versus using what already works (exploitation).

## How reinforcement learning works, step by step

1. The agent observes the current **state**.
2. It chooses an **action** according to its policy (sometimes exploring randomly).
3. The environment transitions to a **new state** and returns a **reward**.
4. The agent **updates** its policy or value estimates based on what happened.
5. Repeat for thousands or millions of steps.

The hardest part is often **credit assignment**: when a reward comes after a long sequence of actions (winning a game after 200 moves), which actions deserve the credit? RL algorithms are largely different solutions to this problem.

## Main types of RL algorithms

### Value-based methods
Learn how good each action is in each state, then pick the best.
- **Q-learning:** learns a "Q-value" for each state-action pair.
- **Deep Q-Networks (DQN):** use a neural network to estimate Q-values. DeepMind's DQN learned to play dozens of Atari games from pixels in 2013–2015.

### Policy-based methods
Learn the policy directly, adjusting it to make rewarding actions more likely.
- **Policy gradients (e.g., REINFORCE)**

### Actor-critic methods
Combine both: an **actor** chooses actions and a **critic** evaluates them.
- **PPO (Proximal Policy Optimization):** a stable, widely used algorithm, including in training language models.
- **A3C/A2C, SAC** and others.

### Model-based methods
Learn a model of how the environment works, then plan using it (used in AlphaZero and MuZero).

## Famous examples of reinforcement learning

- **AlphaGo (2016):** DeepMind's system defeated world champion Lee Sedol at Go, a game long thought too complex for computers, combining deep learning, self-play RL and search. Its successor **AlphaZero** learned chess, shogi and Go from scratch through self-play alone.
- **Atari games (DQN):** learning many games from raw pixels and scores.
- **OpenAI Five and AlphaStar:** beating top human players in Dota 2 and StarCraft II.
- **Robotics:** learning locomotion and manipulation, often in simulation before transferring to real robots.
- **Data centre cooling:** DeepMind reported significant energy savings in Google data centre cooling using RL-based control.
- **Chip design and algorithm discovery:** RL used to optimise chip layouts and discover faster algorithms (e.g., AlphaDev for sorting).

## Reinforcement learning and large language models

RL is now a central part of how AI assistants are built:

### RLHF (reinforcement learning from human feedback)
1. A pre-trained language model generates several responses to a prompt.
2. Humans rank which responses are better.
3. A **reward model** is trained to predict human preferences.
4. The language model is fine-tuned with RL (often PPO or related methods) to produce responses the reward model scores highly.

RLHF made models like ChatGPT dramatically more helpful and better at following instructions. Variants include **RLAIF** (AI feedback) and principle-based approaches such as Anthropic's **Constitutional AI**, where a model critiques responses against written principles. Simpler alternatives such as **DPO (Direct Preference Optimization)** achieve similar goals without a separate RL loop.

### RL for reasoning
Since 2024, **reinforcement learning on verifiable tasks** (maths problems with checkable answers, code that must pass tests) has driven big improvements in "reasoning models" that think step by step before answering. The model is rewarded for reaching correct answers, and learns longer, more careful chains of reasoning. Researchers continue to debate exactly how much RL teaches models new capabilities versus drawing out abilities already learned in pre-training.

### RL for agents
RL is also used to train AI agents to use tools, navigate software and complete multi-step tasks more reliably. (See [What is an AI agent?](/blog/what-is-an-ai-agent/))

(How models are built end to end: [How is AI created?](/blog/how-is-ai-created/))

## Business applications of reinforcement learning

| Area | Example |
|---|---|
| **Recommendations and personalisation** | Optimising which content or offers to show over time (often with "bandit" algorithms, a simple form of RL) |
| **Pricing and revenue management** | Dynamic pricing for airlines, hotels, ride-hailing |
| **Advertising** | Bidding strategies and budget allocation |
| **Supply chain and logistics** | Inventory policies, routing, warehouse robotics (see [What is supply chain automation?](/blog/what-is-supply-chain-automation/)) |
| **Energy** | Data centre cooling, grid management, battery optimisation |
| **Finance** | Trading strategies and portfolio optimisation (with great caution) |
| **Manufacturing and robotics** | Robot control, process optimisation (see [Automation and robotics](/blog/automation-and-robotics/)) |
| **Healthcare research** | Treatment strategy research (highly regulated and experimental) |

**Practical note:** for many business problems, simpler approaches (supervised learning, A/B testing, multi-armed bandits, optimisation) are easier and safer than full RL. RL shines when decisions are sequential, the environment can be simulated, and outcomes are measurable.

## Limitations and challenges

- **Data and compute hungry:** RL often needs millions of trials, which is easy in games and simulations and hard in the real world.
- **Reward design is tricky:** agents exploit poorly designed rewards in unexpected ways ("reward hacking"), achieving the metric but not the intent.
- **Safety in the real world:** trial and error isn't acceptable when errors are dangerous or expensive.
- **Sim-to-real gap:** behaviour learned in simulation may not transfer to reality.
- **Instability and reproducibility:** training can be unstable and sensitive to settings.
- **Interpretability:** it can be hard to understand why an agent behaves as it does.

## Frequently asked questions

### What is reinforcement learning in simple terms?
Reinforcement learning is a way for AI to learn by trial and error: an agent tries actions, receives rewards or penalties, and gradually learns which actions lead to the best long-term results.

### What does RL stand for in machine learning?
RL stands for reinforcement learning, a type of machine learning where an agent learns to make decisions by interacting with an environment and receiving rewards.

### What is an example of reinforcement learning?
DeepMind's AlphaGo learning to beat the world Go champion through self-play, robots learning to walk, recommendation systems optimising what to show users, and AI assistants being refined with human feedback.

### What is RLHF?
RLHF (reinforcement learning from human feedback) trains a reward model from human preference rankings of AI responses, then uses reinforcement learning to fine-tune a language model to produce responses people prefer. It's a key step in making assistants like ChatGPT and Claude helpful.

### What is the difference between reinforcement learning and supervised learning?
Supervised learning learns from labelled examples with correct answers. Reinforcement learning learns from rewards received after taking actions, often delayed, without being told the correct action directly.

### Does reinforcement learning really make language models better at reasoning?
RL on verifiable tasks such as maths and coding has clearly improved reasoning model performance. Researchers debate whether RL teaches fundamentally new abilities or mainly elicits and sharpens capabilities already learned during pre-training. Both effects likely play a role.
