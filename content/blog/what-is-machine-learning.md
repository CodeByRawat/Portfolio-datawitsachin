---
title: What Is Machine Learning (ML)? How It Works, Types, Examples, and ML vs AI
description: A clear guide to machine learning, covering what ML means, how machines learn from data, supervised vs unsupervised vs reinforcement learning, common algorithms, real business examples, ML vs AI vs deep learning, and how to get started.
date: 2026-11-11
cluster: ai-basics
order: 38
---

<p class="lede"><strong>Machine learning (ML)</strong> is a branch of artificial intelligence in which computers <strong>learn patterns from data</strong> to make predictions or decisions, instead of being explicitly programmed with rules. You give an ML algorithm examples (past transactions labelled as fraud or not, emails labelled spam or not, sales history) and it builds a <strong>model</strong> that can make predictions about new, unseen data.</p>

Machine learning is behind most of the AI you use daily: recommendations on Netflix and Amazon, spam filters, fraud detection, voice assistants, search ranking, and the large language models behind Claude and ChatGPT. This guide explains what ML is, how it works, the main types and algorithms, how it differs from AI and deep learning, real business examples, and how to get started.

## What does ML stand for?

**ML stands for machine learning.** The term was popularised by IBM researcher Arthur Samuel in 1959, who described it as giving computers the ability to learn without being explicitly programmed. Samuel built a checkers program that improved by playing against itself.

A more formal definition from computer scientist Tom Mitchell (1997): a computer program learns from experience **E** with respect to a task **T** and performance measure **P** if its performance at T, as measured by P, improves with experience E. For example, a spam filter (T: classify emails) improves its accuracy (P) by learning from labelled emails (E).

## Traditional programming vs machine learning

| | Traditional programming | Machine learning |
|---|---|---|
| **Input** | Data + rules written by a programmer | Data + examples of correct answers (or just data) |
| **Output** | Answers | A model (the learned rules) |
| **Example** | "If the email contains 'free money' and 3+ links, mark as spam" | Show 1 million labelled emails; the model learns which patterns indicate spam |
| **Strength** | Predictable, explainable when rules are simple | Handles complex patterns humans can't easily write down |
| **Weakness** | Breaks on messy, changing real-world data | Needs good data; can be harder to explain |

## How does machine learning work?

1. **Collect data:** examples relevant to the problem.
2. **Prepare data:** clean it, handle missing values, convert it into numerical **features** (e.g., transaction amount, time of day, merchant category).
3. **Choose an algorithm:** e.g., decision trees, logistic regression, neural networks.
4. **Train the model:** the algorithm adjusts its internal parameters to minimise prediction errors on the training data.
5. **Evaluate:** test on data the model hasn't seen to estimate real-world performance.
6. **Deploy:** use the model to make predictions on new data (inference).
7. **Monitor and retrain:** performance can degrade as the world changes (data drift).

(For a deeper walkthrough, see [How is AI created?](/blog/how-is-ai-created/).)

### Key terms
- **Features:** the input variables the model uses.
- **Labels:** the correct answers in training data (for supervised learning).
- **Model:** the learned function that maps inputs to outputs.
- **Training / validation / test sets:** data used to learn, tune and evaluate.
- **Overfitting:** the model memorises training data and performs poorly on new data.
- **Underfitting:** the model is too simple to capture the patterns.

## The main types of machine learning

### 1. Supervised learning
The model learns from **labelled examples** (inputs paired with correct outputs).

- **Classification:** predicting a category. *Is this email spam? Will this customer churn? Which product category is this?* (Deep dive: [What is classification in machine learning?](/blog/classification-in-machine-learning/))
- **Regression:** predicting a number. *What will sales be next month? What price will this house sell for?*

Supervised learning is the most widely used type in business.

### 2. Unsupervised learning
The model finds structure in **unlabelled** data.

- **Clustering:** grouping similar items, e.g., customer segments.
- **Dimensionality reduction:** simplifying data with many variables.
- **Anomaly detection:** finding unusual patterns, e.g., suspicious transactions or failing equipment.
- **Association rules:** "customers who buy X also buy Y".

### 3. Semi-supervised and self-supervised learning
- **Semi-supervised:** a small amount of labelled data plus lots of unlabelled data.
- **Self-supervised:** the data provides its own labels. For example, predicting the next word in a sentence. **This is how large language models are pre-trained.**

### 4. Reinforcement learning (RL)
An **agent** learns by trial and error in an environment, receiving **rewards** or penalties for its actions, and learns a strategy (policy) that maximises long-term reward. RL powered DeepMind's AlphaGo, is used in robotics and optimisation, and plays a major role in training modern AI models to follow instructions and reason (reinforcement learning from human feedback and from verifiable rewards).

## Common machine learning algorithms

| Algorithm | Type | Typical use |
|---|---|---|
| **Linear regression** | Supervised (regression) | Forecasting numeric values |
| **Logistic regression** | Supervised (classification) | Yes/no predictions like churn or default |
| **Decision trees** | Supervised | Explainable rules-based predictions |
| **Random forests** | Supervised | Robust classification/regression |
| **Gradient boosting** (XGBoost, LightGBM, CatBoost) | Supervised | Top performer on tabular business data |
| **Naive Bayes** | Supervised (classification) | Text classification, spam filtering |
| **Support vector machines (SVM)** | Supervised (classification) | Classification with clear margins, smaller datasets |
| **k-nearest neighbours** | Supervised | Simple similarity-based predictions |
| **k-means** | Unsupervised (clustering) | Customer segmentation |
| **Neural networks / deep learning** | Various | Images, speech, language, complex patterns |
| **Transformers** | Deep learning | Language models, vision, audio |
| **LSTM / RNNs** | Deep learning | Sequences and time series (see [What is an LSTM?](/blog/what-is-lstm/)) |

## Machine learning vs AI vs deep learning vs generative AI

- **Artificial intelligence (AI):** the broad goal of making machines perform tasks requiring human-like intelligence. (See [What does AI stand for?](/blog/what-does-ai-stand-for/))
- **Machine learning:** the main *approach* to achieving AI today, learning from data.
- **Deep learning:** a subset of ML using neural networks with many layers, behind breakthroughs in vision, speech and language.
- **Generative AI:** deep learning models that create new content (text, images, code). (See [Which task is a generative AI task?](/blog/which-task-is-a-generative-ai-task/))

**What is machine learning vs AI?** All machine learning is AI, but not all AI is machine learning. Rule-based expert systems are AI without ML. In practice, nearly all modern AI systems are built with machine learning.

## Real-world examples of machine learning

### Everyday life
- Recommendations (Netflix, YouTube, Spotify, Amazon)
- Spam filtering and email categorisation
- Face recognition and photo search
- Voice assistants and speech-to-text
- Navigation and traffic prediction
- Fraud alerts from your bank
- Language translation

### Business
| Function | ML use case |
|---|---|
| **Sales and marketing** | Lead scoring, churn prediction, customer segmentation, next-best offer, marketing mix modelling |
| **Finance** | Fraud detection, credit risk scoring, cash flow forecasting, anomaly detection in transactions |
| **Operations and supply chain** | Demand forecasting, inventory optimisation, predictive maintenance, route optimisation |
| **Customer service** | Ticket classification and routing, sentiment analysis |
| **HR** | Attrition prediction (with care for bias), workforce planning |
| **Healthcare** | Medical image analysis, risk prediction, operational forecasting |
| **Manufacturing** | Quality inspection via computer vision, process optimisation |

## Machine learning vs generative AI for business problems

A practical tip: **for predictions on structured business data** (tables of customers, transactions, sensor readings), **classic ML** (especially gradient boosting) is often more accurate, cheaper and more explainable than large language models. **For tasks involving language, documents and content**, generative AI is usually the better tool. Many solutions combine both, e.g., an LLM extracts data from emails and an ML model scores the resulting leads.

## Limitations and risks of machine learning

- **Data quality:** garbage in, garbage out.
- **Bias:** models can reproduce historical discrimination present in data.
- **Explainability:** complex models can be hard to interpret, which is a problem in regulated decisions.
- **Data drift:** performance degrades as conditions change.
- **Overfitting:** looking great in testing, failing in production.
- **Privacy:** training data may contain personal information.
- **Security:** models can be manipulated with adversarial inputs or poisoned data.

## How to get started with machine learning

### For business leaders
1. Identify a decision that is repeated often and based on data (e.g., which leads to call first, which customers might churn).
2. Check that you have historical data with outcomes.
3. Start with a simple model and a clear business metric.
4. Use AutoML or a data partner if you lack in-house expertise.
5. Put the model into a workflow where it changes decisions, or it creates no value.

### For learners
1. Learn Python and basic statistics.
2. Learn pandas and scikit-learn; build simple classification and regression models.
3. Do projects with real datasets (Kaggle is a good source).
4. Learn deep learning with PyTorch when ready.
5. Free resources: Andrew Ng's Machine Learning Specialization (audit), fast.ai, Google's Machine Learning Crash Course, and Kaggle Learn.

(Broader roadmap: [How to learn about AI](/blog/how-to-learn-ai/).)

## Frequently asked questions

### What is machine learning in simple terms?
Machine learning is a way of teaching computers to make predictions or decisions by learning patterns from examples, rather than following rules written by a programmer.

### What does ML stand for?
ML stands for machine learning, a branch of artificial intelligence focused on algorithms that learn from data.

### What is machine learning vs AI?
AI is the broad field of making machines perform tasks that require intelligence. Machine learning is the main technique used to build AI today, where systems learn from data. All machine learning is AI, but some AI (like rule-based systems) doesn't use machine learning.

### What are the 3 types of machine learning?
The three main types are supervised learning (learning from labelled examples), unsupervised learning (finding patterns in unlabelled data) and reinforcement learning (learning by trial and error with rewards). Self-supervised learning, used to train large language models, is an important additional category.

### What is an example of machine learning?
A spam filter that learns from millions of labelled emails to recognise spam, a bank system that detects fraudulent transactions, and recommendation engines that suggest products or shows based on your behaviour.

### What is RL in machine learning?
RL stands for reinforcement learning, where an agent learns which actions to take in an environment by receiving rewards or penalties, gradually learning a strategy that maximises long-term reward.

### Do I need maths to learn machine learning?
You can start applying machine learning with Python libraries and basic statistics. A deeper understanding of linear algebra, calculus and probability helps when you want to understand, tune or develop models in depth.
