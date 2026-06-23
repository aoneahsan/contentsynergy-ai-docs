---
id: fine-tuning
title: Fine-tuning (LoRA)
description: Train lightweight LoRA adapters on your own examples to steer tone and vocabulary, then apply a brand-voice adapter to text generation.
sidebar_label: Fine-tuning
keywords:
  - lora fine-tuning
  - brand voice adapter
  - steer tone and vocabulary
  - train on your examples
  - lightweight adapter tuning
  - zero-cost ai
---

# Fine-tuning (LoRA)

Fine-tuning in ContentSynergy AI is the process of training a small LoRA adapter on your own examples so that text generation leans toward a tone and vocabulary you choose — your brand voice. LoRA, short for Low-Rank Adaptation, is a lightweight technique that adjusts a base model's behavior through a compact add-on rather than retraining the whole model. You pick a base model, configure an adapter, feed it examples, watch the training progress in the app, and then apply the finished adapter to your text generations. The adapters you train are stored under your account.

## What it does

Fine-tuning gives your content a consistent voice. Out of the box, the [text post generator](/content/text-posts) writes in the tone you select per draft. With a trained adapter applied, generation is nudged further toward the style of the examples you provided, so posts read more like you across many drafts without re-explaining your voice each time.

You provide the examples — sample posts, copy, or phrasing that represents how you want to sound — and the adapter learns the patterns in them. Once trained, the adapter becomes a reusable style filter you can switch on for future generations.

## The controls and options

The fine-tuning workflow gives you these choices:

- **Base model (10 options)** — choose one of ten base models to adapt. The base model is the foundation the adapter steers.
- **LoRA adapter configuration** — set up the adapter that will sit on top of the base model.
- **Training examples** — supply your own examples that demonstrate the tone and vocabulary you want.
- **Training progress tracking** — follow the adapter's training as it runs, tracked in the app so you can see it advance.
- **Apply the adapter** — once trained, apply the adapter to text generation to steer the output toward your brand voice.

Because the adapter is reusable, you can train it once and apply it across many posts, and you can keep more than one adapter for different voices or campaigns.

## How it works: steering, not retraining

When you train an adapter, the app keeps the chosen base model fixed and learns a small set of adjustments — the LoRA adapter — from your examples. Those adjustments capture the patterns in your phrasing. Applying the adapter at generation time biases the model toward that style. This is why it is fast and lightweight compared with training a model from scratch: you are teaching a compact add-on, not rebuilding a foundation model.

Training progress is tracked in-app so the process is visible rather than a black box. When it finishes, the adapter is ready to apply to text generation. This fits the broader [how the AI works](/ai/how-ai-works) contract — open, client-oriented models with no paid cloud inference — and the [zero-cost model](/concepts/zero-cost-model) that keeps the whole app free.

## An honest note on scope

This is lightweight, client-oriented adapter tuning for steering style — tone and vocabulary — not training a large foundation model. A LoRA adapter shifts how an existing base model expresses itself; it does not give a small model the raw capability of a data-center system, and it will not turn a browser model into a frontier LLM. The value is a consistent, personal voice at zero cost, learned from your own examples. Set expectations there: you are guiding style, not buying a bigger brain.

## Where the data lives

The adapters you train are stored under your account, on Firebase's free tier, alongside your other content. There is no paid storage and no Firebase Cloud Functions involved. Your training examples are your own material, used to shape your adapter. For how the rest of the stack stays free, read [the zero-cost model](/concepts/zero-cost-model).

Fine-tuning is most useful in tandem with the rest of the studio. Apply your adapter when generating in the [text post generator](/content/text-posts), then carry the result into [scheduling](/publishing/scheduling) and publish to your [connected platforms](/publishing/social-platforms). New here? Start with the [introduction](/intro), the [quick start](/getting-started/quick-start), and the [tools overview](/tools/overview).

## Frequently asked questions

**What is a LoRA adapter?**
A small, lightweight add-on that adjusts a base model's behavior. Here it captures the tone and vocabulary from your examples so generation leans toward your brand voice.

**How many base models can I choose from?**
Ten. You pick one as the foundation, then configure and train a LoRA adapter on top of it.

**Is this the same as training my own large AI model?**
No. It is lightweight adapter tuning that steers style. It does not retrain a foundation model or give a small model frontier-scale capability.

**Can I see the training happen?**
Yes. Training progress is tracked in the app, so you can follow the adapter as it learns rather than waiting blindly.

**Where are my trained adapters kept?**
Under your account on Firebase's free tier. There is no paid storage and no Cloud Functions. See [how the AI works](/ai/how-ai-works) for the underlying model approach.
