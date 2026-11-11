---
title: What Is Classification in Machine Learning? Types, Algorithms (Naive Bayes, SVM) and Examples
description: What classifying means in machine learning, the types of classification, how algorithms like logistic regression, naive Bayes, SVM, decision trees and neural networks work, how to evaluate classifiers, and business examples, including classification with LLMs.
date: 2026-11-11
cluster: ai-basics
order: 39
---

<p class="lede"><strong>Classification</strong> in machine learning is the task of predicting which <strong>category</strong> (class) something belongs to, based on its features. Is this email spam or not spam? Is this transaction fraudulent? Which department should this support ticket go to? Is this tumour benign or malignant? A classification model learns from labelled examples and then assigns labels to new, unseen data.</p>

Classification is the most common type of machine learning in business, and it's also one of the most common jobs given to AI today, from fraud detection models to large language models sorting emails in automation workflows. This guide explains what classifying means, the types of classification, the main algorithms (including naive Bayes and support vector machines), how to evaluate a classifier, and practical examples.

## What does "classifying" mean?

In everyday English, **to classify** means to arrange things into groups or categories based on shared characteristics. A librarian classifies books by subject; a doctor classifies a condition by its symptoms.

In machine learning, **classifying** means using a model to assign an input to one or more predefined categories. The categories are called **classes** or **labels**, and the input is described by **features**.

**Example:** classifying emails
- **Features:** words used, sender, number of links, time sent, whether the sender is in your contacts
- **Classes:** spam / not spam
- **Model:** learns from thousands of emails already labelled spam or not

## Classification vs regression

Both are **supervised learning** (learning from labelled examples), but:

| | Classification | Regression |
|---|---|---|
| **Predicts** | A category | A number |
| **Example** | Will this customer churn? (yes/no) | How much will this customer spend next year? |
| **Output** | Class label (often with a probability) | Continuous value |

(For the bigger picture, see [What is machine learning?](/blog/what-is-machine-learning/))

## Types of classification

### Binary classification
Two classes: spam/not spam, fraud/legitimate, churn/stay, pass/fail.

### Multi-class classification
More than two mutually exclusive classes: routing a support ticket to billing, technical, shipping or returns; recognising which digit (0–9) is in an image.

### Multi-label classification
Each item can belong to several classes at once: a news article tagged "politics", "economy" and "Europe"; a support ticket that's both "billing" and "urgent".

### Imbalanced classification
One class is much rarer than the other: fraud (maybe 0.1% of transactions), rare diseases, equipment failures. This needs special care in training and evaluation.

## Common classification algorithms

### Logistic regression
Despite the name, it's a classification algorithm. It estimates the probability that an input belongs to a class using a weighted combination of features passed through a sigmoid function. **Pros:** simple, fast, interpretable. **Use for:** baseline models, credit scoring, churn.

### Naive Bayes
**What is naive Bayes?** A family of probabilistic classifiers based on **Bayes' theorem**, which calculates the probability of a class given the features. It's called "naive" because it assumes features are independent of each other given the class (e.g., that each word in an email contributes independently to whether it's spam). That assumption is rarely true, yet naive Bayes often works surprisingly well, especially for text.

- **Pros:** very fast, works with small datasets, strong baseline for text classification
- **Cons:** independence assumption limits accuracy on complex problems
- **Classic use:** spam filtering, document categorisation, sentiment analysis

### Support vector machines (SVM)
**What is an SVM in machine learning?** A support vector machine finds the boundary (a **hyperplane**) that separates classes with the **widest possible margin**. The data points closest to the boundary are the **support vectors**: they "support" or define it. Using the **kernel trick**, SVMs can also find non-linear boundaries by implicitly mapping data into higher dimensions.

**How do support vector machines work?** In brief:
1. Plot training examples as points in a space defined by their features.
2. Find the line (2D), plane (3D) or hyperplane (higher dimensions) that separates the classes with the largest gap.
3. For non-linear data, apply a kernel (e.g., radial basis function) so a separating boundary can be found.
4. Classify new points by which side of the boundary they fall on.

- **Pros:** effective in high-dimensional spaces; strong with smaller datasets
- **Cons:** slow on very large datasets; less interpretable; requires tuning
- **Uses:** text classification, image classification (historically), bioinformatics

### Decision trees
Split data with a series of yes/no questions on features ("Is transaction amount > $1,000?"). **Pros:** easy to understand and explain. **Cons:** prone to overfitting alone.

### Random forests
Combine many decision trees trained on random subsets of data and features, and vote. **Pros:** robust, accurate, handles mixed data.

### Gradient boosting (XGBoost, LightGBM, CatBoost)
Build trees sequentially, each correcting the errors of the previous ones. **Often the best performer on tabular business data** (customer, transaction, sensor data).

### k-nearest neighbours (k-NN)
Classify an item by the majority class of its *k* most similar examples. Simple, but slow with large datasets.

### Neural networks and deep learning
Learn complex patterns in images, audio and text. Convolutional neural networks (CNNs) and transformers dominate image and language classification. (Related: [What is an LSTM?](/blog/what-is-lstm/))

### Large language models (zero-shot and few-shot classification)
Modern LLMs can classify text **without training a model**: you describe the categories in a prompt (zero-shot) or give a few examples (few-shot). This is extremely useful in business automation for classifying emails, tickets, reviews and documents. (See [How to automate tasks with AI](/blog/how-to-automate-tasks-with-ai/).)

```
Classify this support ticket into exactly one category:
billing, technical, shipping, returns, other.
Also rate urgency: low, normal, high.
Return JSON: {"category": "...", "urgency": "..."}

Ticket: "I was charged twice for my order #4412 and need a refund ASAP."
```

**When to use an LLM vs a trained classifier:** LLMs are fastest to set up, handle nuance and new categories easily, and need no training data. Trained classifiers are cheaper and faster per prediction at very high volume, and can be more consistent once trained on enough data. Many teams start with an LLM, collect labelled results, and later train a smaller model if volume justifies it.

## How to evaluate a classification model

Accuracy alone can be misleading, especially with imbalanced classes. (A model that says "not fraud" for every transaction is 99.9% accurate and useless.)

### The confusion matrix
| | Predicted positive | Predicted negative |
|---|---|---|
| **Actually positive** | True positive (TP) | False negative (FN) |
| **Actually negative** | False positive (FP) | True negative (TN) |

### Key metrics
- **Accuracy** = (TP + TN) / all. Overall correctness.
- **Precision** = TP / (TP + FP). Of the items flagged positive, how many were right? *(Important when false alarms are costly, e.g., blocking legitimate payments.)*
- **Recall (sensitivity)** = TP / (TP + FN). Of the actual positives, how many did we catch? *(Important when missing positives is costly, e.g., fraud, disease.)*
- **F1 score:** the harmonic mean of precision and recall.
- **ROC-AUC:** how well the model ranks positives above negatives across thresholds.

### Choosing a threshold
Classifiers usually output probabilities. The threshold you choose (e.g., flag as fraud if probability > 0.8) trades precision against recall. Choose it based on the business cost of each type of error.

## Business examples of classification

| Domain | Classification task |
|---|---|
| Email and support | Spam detection; ticket routing; intent detection; sentiment |
| Finance | Fraud detection; credit default; invoice categorisation; anomaly flags |
| Sales and marketing | Lead qualification; churn prediction; customer segment assignment |
| HR | CV categorisation (with human decisions and bias checks) |
| Healthcare | Medical image classification; risk flags (with clinical oversight) |
| Manufacturing | Defect detection from images |
| Legal and compliance | Document type classification; clause identification |
| Content moderation | Detecting harmful or policy-violating content |

## Common pitfalls

1. **Imbalanced classes:** use appropriate metrics, resampling or class weights.
2. **Data leakage:** features that wouldn't be available at prediction time inflate test results.
3. **Biased labels:** if historical decisions were biased, the model learns the bias.
4. **Unclear categories:** overlapping or poorly defined classes confuse both humans and models.
5. **Ignoring drift:** categories and data change over time; monitor and retrain.

## Frequently asked questions

### What is classification in machine learning?
Classification is a supervised machine learning task where a model learns from labelled examples to predict which category or class new data belongs to, such as spam or not spam, fraud or legitimate, or which department a support ticket should go to.

### What does classifying mean?
Classifying means arranging items into groups or categories based on shared characteristics. In machine learning, it means a model assigning an input to one or more predefined classes based on its features.

### What is naive Bayes?
Naive Bayes is a family of probabilistic classification algorithms based on Bayes' theorem that assumes features are independent given the class. It is fast, works well with small datasets and is a strong baseline for text classification such as spam filtering.

### What is SVM in machine learning?
A support vector machine (SVM) is a classification algorithm that finds the boundary separating classes with the widest possible margin. The closest data points to the boundary are called support vectors, and kernels allow SVMs to handle non-linear boundaries.

### What are examples of classification algorithms?
Logistic regression, naive Bayes, support vector machines, decision trees, random forests, gradient boosting (XGBoost, LightGBM), k-nearest neighbours, neural networks and, increasingly, large language models used for zero-shot or few-shot classification.

### Can ChatGPT or Claude be used for classification?
Yes. Large language models can classify text by following instructions that describe the categories, with or without a few examples, and return structured results. This is widely used in automation workflows for emails, support tickets, reviews and documents.
