---
id: text-posts
title: AI Text Post Generator
description: Generate social and platform-ready text posts in the browser with tone, length, sentiment, language, and platform controls.
sidebar_label: Text Posts
keywords:
  - ai text post generator
  - browser content writing
  - distilgpt2
  - tone and sentiment controls
  - hashtag suggestions
  - multilingual posts
  - zero-cost ai
---

# AI Text Post Generator

The AI Text Post Generator is a browser-based writing tool that turns a short prompt into a finished text post using an open-source language model that runs locally on your device. It loads the `distilgpt2` model through [`@xenova/transformers`](/ai/how-ai-works) and produces a draft without sending your prompt to a paid API. When the model cannot load on a given device, the generator falls back to a structured, template-based draft so you always get usable output. There is no API key and no cost.

## What it does

The generator takes your topic or idea and shapes it into a post that fits where you want to publish. You describe the subject, choose how it should sound and how long it should be, and the tool assembles a draft you can copy, refine, or send onward. Because the model runs client-side, generation happens on your machine rather than on a remote server. This keeps the workflow aligned with the [zero-cost model](/concepts/zero-cost-model) that the whole app is built around.

The output is plain text intended for social posts, captions, and short-form updates. You can regenerate as many times as you like, since each run uses your own device rather than a metered service.

## The options and controls

You can shape every draft with the following controls:

- **Tone (7 options):** professional, casual, friendly, humorous, inspirational, urgent, and informative. The tone guides word choice and rhythm so the same topic can read as a calm explainer or an energetic announcement.
- **Length (3 options):** short, medium, or long. This sets the rough size of the draft so it matches the format you are writing for.
- **Sentiment (3 options):** positive, neutral, or negative. Sentiment steers the emotional leaning of the copy.
- **Language (12 options):** generate posts in any of twelve supported languages.
- **Target platform:** select the platform you are writing for, and the generator shapes the length and format to suit it.
- **Hashtag suggestions (optional):** turn this on to append suggested hashtags to the draft.
- **Emoji suggestions (optional):** turn this on to include suggested emoji where they fit.

You can also apply a fine-tuned LoRA adapter to nudge the output toward a consistent brand voice. See [fine-tuning](/ai/fine-tuning) for how a brand-voice adapter is trained and applied.

## How it works: client-side with a fallback

When you generate a post, the tool first tries to run `distilgpt2` in your browser through `@xenova/transformers`. The model weights load into the page and inference happens on your own hardware. If that model is unavailable — for example on a constrained device or a browser that cannot allocate the needed resources — the generator switches to a structured template-based draft built from your selected tone, length, sentiment, language, and platform. The template path is deterministic and dependable: it never silently fails, and it keeps the experience working everywhere.

This two-path design is the same honesty-first approach used across the app. The browser-based model is genuine open-source AI, and the template fallback is a transparent backup rather than a hidden limitation. For the full picture of how local inference is wired, read [how the AI works](/ai/how-ai-works).

## Where results go

Every generated post is saved to your "My Posts" history page, so you can return to a draft, compare versions, or reuse copy later. From there you can move a post toward distribution — for example by lining it up in the [scheduling](/publishing/scheduling) workflow when you are ready to publish.

The text generator is one of several creators in the app. If you also need visuals or other formats, see the [tools overview](/tools/overview) and the sibling creators for [images](/content/images), [video and reels](/content/video-reels), [audio and music](/content/audio-music), [3D models](/content/3d-models), and [surveys and polls](/content/surveys-polls). New to the app? Start with the [introduction](/intro) and the [quick-start guide](/getting-started/quick-start).

## Frequently asked questions

**Do I need an API key or a paid account to generate posts?**
No. The generator runs the open-source `distilgpt2` model in your browser and falls back to a template-based draft when the model cannot load. There is no API key, no subscription, and no per-use charge.

**What happens if the model fails to load on my device?**
The tool automatically switches to a structured, template-based draft that uses your selected tone, length, sentiment, language, and platform. You still get a complete post; it is simply assembled from a template rather than the model.

**Can I keep a consistent brand voice across posts?**
Yes. You can apply a fine-tuned LoRA adapter to steer the output toward your brand voice. See the [fine-tuning](/ai/fine-tuning) page for details.

**Which languages are supported?**
The generator supports twelve languages, selectable per draft.

**Where do my generated posts end up?**
Each post is saved to your "My Posts" history page, where you can revisit, refine, and reuse it, including handing it off to the [scheduling](/publishing/scheduling) workflow.
