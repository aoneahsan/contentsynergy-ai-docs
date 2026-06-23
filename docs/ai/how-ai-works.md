---
id: how-ai-works
title: How the AI works (zero-cost, client-side)
description: ContentSynergy AI runs open-source models in your browser with template and placeholder fallbacks — no developer-funded paid LLM, no per-generation cost.
sidebar_label: How the AI works
keywords:
  - browser AI
  - transformers.js
  - client-side AI
  - zero-cost AI
  - distilgpt2
  - WebGPU
---

# How the AI works

ContentSynergy AI runs its models on your device, in the browser, rather than calling a paid cloud API. This single decision shapes everything else: it is why the app is free, why it works offline for some flows, and why every feature ships with a fallback. This page is the honest account of what that means — including the limits.

## The generate-or-fall-back contract

Every AI feature follows the same contract: try the open model first, and if it can't load or run, drop to a deterministic path that still returns a usable result. Text generation is the clearest example. The text service loads distilgpt2 through [transformers.js](https://huggingface.co/docs/transformers.js) (which executes ONNX models in the browser via WebAssembly or WebGPU). When the model is available, it generates from your prompt, tone, length, sentiment, language, and platform settings. When it isn't — a slow connection, a low-memory device, a blocked download — the service composes a structured, template-based post from the same inputs instead of erroring out. You always get content; the only difference is how it was produced.

The same shape repeats across the studio. Image generation produces a styled composition client-side and falls back to a placeholder render. Video generation attempts motion synthesis and falls back to Ken Burns panning over your source images. Audio uses Web Audio and speech APIs with synthesized fallbacks. Nothing in the pipeline assumes a server is reachable.

## Why there's no paid model

A cloud LLM charges per token or per image, which would force either a subscription or a usage cap. By running open models on the user's hardware, the project pays nothing for inference, so it can keep the app free with no metering. The trade-off is that quality and speed depend on the device: a recent laptop with WebGPU produces faster, larger generations than a budget phone. That is a deliberate, transparent exchange — you trade some ceiling for zero cost and full local control of your data.

## What client-side AI does well, and what it doesn't

Browser models excel at short-form text, structured suggestions (hashtags, captions, variations), deterministic media transforms (resizing, color, format conversion, Ken Burns), and analysis tasks like sentiment and readability that run on small, fast libraries. They are weaker at the things that genuinely need large GPUs: long high-fidelity text, photorealistic image synthesis, and true text-to-video. Where the app can't match a data-center model, it says so and gives you the best honest approximation rather than pretending. The clearest case is video: real machine-learning text-to-video needs a GPU backend the project doesn't fund, so that path is intentionally a graceful fallback, documented on the [Video & reels](/content/video-reels) page.

## Bring-your-own-key (optional)

The core features never require an API key. For users who want to plug in an external provider for specific flows, bring-your-own-key is supported — you supply and control the credential, and it is used only for the flow you enable. This stays consistent with the zero-cost promise: the project never pays for your usage, and you are never required to pay either.

## Fine-tuning your own voice

On top of the base models, you can train lightweight LoRA adapters from your own examples to steer tone and vocabulary, then apply an adapter to any text generation. Training progress is tracked in-app, and adapters live under your account. See [Fine-tuning (LoRA)](/ai/fine-tuning).

## Frequently asked questions

**Does my prompt or content get sent to a third-party AI server?** For the default client-side flows, no — the model runs locally, so prompts stay on your device. If you explicitly enable a bring-your-own-key provider for a flow, that flow's data goes to the provider you chose.

**Why is the first generation slow?** The browser downloads and initializes the model the first time you use a feature. After that it's cached, so subsequent generations are faster.

**What happens on a weak device?** The feature falls back to its template or placeholder path so you still get a result, just produced deterministically rather than by the model.

**Is the output as good as ChatGPT or Midjourney?** No, and the docs never claim it is. Open browser models are smaller than data-center models. The value here is zero cost, privacy, and an all-in-one workflow — not beating a GPU cluster on raw fidelity.
