---
title: What Is an LSTM? Long Short-Term Memory Networks Explained Simply
description: What an LSTM (long short-term memory) network is, why it was invented, how its gates work, LSTM vs RNN vs GRU vs transformers, real uses like time-series forecasting, and when to still use LSTMs in 2026.
date: 2026-11-11
cluster: ai-basics
order: 40
---

<p class="lede">An <strong>LSTM (long short-term memory)</strong> network is a type of recurrent neural network (RNN) designed to learn from <strong>sequences</strong>, such as text, speech, sensor readings or stock prices, while remembering important information over long stretches of the sequence. It does this with a <strong>memory cell</strong> and three <strong>gates</strong> (forget, input and output) that learn what to keep, what to add and what to output at each step. LSTMs were introduced by Sepp Hochreiter and Jürgen Schmidhuber in 1997.</p>

For about two decades, LSTMs were the go-to model for sequential data: they powered major advances in speech recognition, machine translation and handwriting recognition. Today, transformers have taken over most language tasks, but LSTMs remain useful for time-series forecasting, streaming data and resource-constrained settings. This guide explains LSTMs in plain English, how they work, how they compare to RNNs, GRUs and transformers, and when to use them.

## Why LSTMs were invented: the memory problem

Many problems involve **sequences**, where order matters and earlier items affect later ones:

- Words in a sentence: *"The cat, which had been sleeping on the warm windowsill all afternoon, **was** hungry."* To choose "was" rather than "were", you need to remember "cat" from many words earlier.
- Daily sales, where last week's promotion affects this week.
- Sensor readings, where a pattern minutes ago signals an upcoming failure.

**Recurrent neural networks (RNNs)** were designed for sequences: they process one step at a time and pass a "hidden state" (a memory) to the next step. But basic RNNs struggle to remember things over long sequences because of the **vanishing gradient problem**: during training, the signal used to adjust the network shrinks as it flows back through many time steps, so the network can't learn long-range dependencies.

LSTMs solved this with a design that lets information (and training signals) flow across many steps largely unchanged.

## How an LSTM works

An LSTM processes a sequence step by step. At each step it maintains two things:

- **Cell state (C):** the long-term memory, like a conveyor belt running through the sequence. Information can travel along it with only small, controlled changes.
- **Hidden state (h):** the short-term output at each step, passed to the next step and used for predictions.

Three **gates** control the cell state. Each gate is a small neural network layer that outputs values between 0 ("block everything") and 1 ("let everything through").

### 1. Forget gate: what to throw away
Looks at the new input and the previous hidden state and decides which parts of the existing memory are no longer relevant. *Example:* when a new sentence starts with a different subject, forget the old subject.

### 2. Input gate: what new information to store
Decides which new information is worth adding to the memory, and creates candidate values to add. *Example:* store the new subject and whether it's singular or plural.

### 3. Output gate: what to output now
Decides which parts of the memory to expose as the hidden state at this step, used for the current prediction and passed forward. *Example:* output information relevant to predicting the next word (like the verb form).

### Putting it together
At every step:
1. **Forget** some of the old cell state.
2. **Add** selected new information.
3. **Output** a filtered version of the updated memory.

Because the cell state is updated mainly by addition and controlled forgetting (rather than being completely rewritten each step), useful information and gradients can persist across long sequences. The network *learns* when to remember and when to forget from training data.

## LSTM vs RNN vs GRU vs Transformer

| | Simple RNN | LSTM | GRU | Transformer |
|---|---|---|---|---|
| **Year** | 1980s | 1997 | 2014 | 2017 |
| **Processes sequence** | Step by step | Step by step | Step by step | All positions in parallel, with attention |
| **Long-range memory** | Poor | Good | Good | Excellent (within context window) |
| **Gates** | None | 3 (forget, input, output) + cell state | 2 (update, reset) | N/A: uses self-attention |
| **Training speed** | Fast per step, hard to train | Slower (sequential) | Faster than LSTM | Highly parallel; very fast on GPUs |
| **Parameters** | Fewest | More | Fewer than LSTM | Can be very large |
| **Typical use today** | Rarely | Time series, streaming, small/edge models | Similar to LSTM | Language, vision, audio, most large-scale AI |

### Why transformers replaced LSTMs for language
Transformers, introduced in the 2017 paper "Attention Is All You Need", use **self-attention** to let every position in a sequence directly look at every other position, instead of passing information step by step. This makes them:
- Better at capturing long-range relationships
- Massively parallelisable on GPUs, allowing training on far larger datasets
- The foundation of today's large language models (Claude, GPT, Gemini, Llama)

### What is a GRU?
A **gated recurrent unit** is a simplified LSTM with two gates (update and reset) and no separate cell state. GRUs often perform similarly to LSTMs with fewer parameters and faster training.

## Where LSTMs are used

### Historically (and still in some systems)
- **Speech recognition:** LSTMs powered major improvements in voice assistants and dictation in the 2010s.
- **Machine translation:** sequence-to-sequence LSTM models were the basis of neural machine translation before transformers (Google Translate adopted neural machine translation with LSTMs in 2016).
- **Handwriting recognition**
- **Text generation and autocomplete** on devices

### Today
- **Time-series forecasting:** sales, demand, energy load, traffic, financial series, especially with moderate data sizes.
- **Anomaly detection** in sensor and log data (predictive maintenance, fraud patterns, network monitoring).
- **Streaming and real-time applications** where data arrives one step at a time and a compact recurrent state is efficient.
- **Edge and embedded devices** with limited memory and compute.
- **Healthcare signals:** ECG, EEG and patient monitoring data.
- **Hybrid models** combining CNNs, LSTMs and attention.

**Practical note for forecasting:** for many business time series, gradient-boosted trees (with good features), classical statistical models, or modern transformer-based and foundation forecasting models can match or beat LSTMs. Always compare against simple baselines.

## A simple LSTM example (Python, Keras)

Predicting the next value in a time series from the previous 30 values:

```python
import numpy as np
from tensorflow import keras

# X shape: (samples, 30 timesteps, 1 feature); y shape: (samples,)
model = keras.Sequential([
    keras.layers.Input(shape=(30, 1)),
    keras.layers.LSTM(64),
    keras.layers.Dense(1)
])
model.compile(optimizer="adam", loss="mse")
model.fit(X_train, y_train, validation_split=0.2, epochs=20, batch_size=32)

next_value = model.predict(X_latest)  # shape (1, 30, 1)
```

PyTorch offers the equivalent `torch.nn.LSTM` layer.

### Tips for training LSTMs
- **Scale your data** (normalise or standardise).
- **Choose the sequence length** (lookback window) carefully: long enough to capture patterns.
- **Use dropout** to reduce overfitting.
- **Compare against baselines** (e.g., last value, moving average, gradient boosting).
- **Use bidirectional LSTMs** for tasks where the whole sequence is available (e.g., classifying a full sentence), but not for real-time forecasting.

## Limitations of LSTMs

- **Sequential processing** limits training speed and scale.
- **Very long dependencies** still challenge them compared with attention.
- **Tuning** can be finicky (learning rate, layers, units, sequence length).
- **Interpretability** is limited.

## Frequently asked questions

### What is an LSTM?
An LSTM (long short-term memory) is a recurrent neural network designed to learn from sequences such as text, speech and time series, using a memory cell and forget, input and output gates to keep important information over long sequences.

### What does LSTM stand for?
LSTM stands for long short-term memory. The name reflects its ability to maintain short-term memory (the network's state) over long periods in a sequence.

### What is the difference between LSTM and RNN?
A basic RNN passes a single hidden state from step to step and struggles to remember information over long sequences because of vanishing gradients. An LSTM adds a cell state and gates that control what is forgotten, stored and output, allowing it to learn long-range dependencies.

### Are LSTMs still used in 2026?
Yes, mainly for time-series forecasting, anomaly detection, streaming data and resource-constrained devices. For most language tasks, transformers have replaced LSTMs.

### LSTM vs transformer: which is better?
Transformers are generally better for language and large-scale tasks because self-attention captures long-range relationships and trains efficiently in parallel. LSTMs can be competitive and more efficient for smaller time-series problems, streaming data and edge devices.

### What is a GRU?
A GRU (gated recurrent unit) is a simplified variant of the LSTM with two gates and no separate cell state. It often performs similarly to an LSTM with fewer parameters and faster training.
