---
id: video-reels
title: Video And Reels Creator
description: Build reels and short videos in the browser with Ken Burns motion, image-to-video composition, and a timeline editor.
sidebar_label: Video & Reels
keywords:
  - video and reels creator
  - ken burns effect
  - image to video
  - timeline editor
  - client-side video compositor
  - zero-cost ai
  - graceful fallback
---

# Video And Reels Creator

The Video and Reels Creator is a browser-based video compositor that assembles short videos and reels from your source images using motion effects and a timeline, all on your own device. It offers four modes — Text-to-Video, Image-to-Video, a Ken Burns pan and zoom effect, and a timeline editor — and it is built to run without a paid rendering backend. Where a true generative video model would normally be required, the tool uses a deliberate graceful fallback so the feature stays free and keeps working.

## What it does

The creator turns still images and timeline arrangements into motion. You bring source images, choose a mode, and the tool composes a video you can save and reuse. Because everything runs in the browser, there is no GPU bill and no API key — consistent with the app's [zero-cost model](/concepts/zero-cost-model).

It is important to be transparent about what this is and what it is not. True machine-learning text-to-video requires a paid GPU and a Python backend, which this zero-cost project intentionally does not fund. The ML path is therefore a deliberate graceful fallback rather than a hidden limitation. In practice, the working, zero-cost output is Ken Burns motion applied to your source images and image-to-video composition. When the ML path is requested but unavailable, the generator clearly marks that output as a placeholder. In short, this is a client-side video compositor, not a generative video model, and that is a conscious zero-cost trade-off. For the full reasoning, read [how the AI works](/ai/how-ai-works).

## The modes and controls

The creator offers four modes:

- **Text-to-Video:** the entry point for ML-style generation. Because true ML text-to-video needs a paid backend the project does not fund, this path falls back gracefully, and any ML-unavailable output is marked as a placeholder.
- **Image-to-Video:** compose a video from your source images. This is part of the dependable, zero-cost output and runs entirely in the browser.
- **Ken Burns effect:** apply pan and zoom motion across your source images. This is the most reliable way to add real movement at no cost, since it is pure composition rather than model inference.
- **Timeline editor:** arrange clips, images, and motion on a timeline to build a longer or more structured piece.

These modes are designed to work together: you can lean on Ken Burns motion and image-to-video composition for the parts that need to render reliably, and use the timeline editor to assemble the full sequence.

## How it works: client-side with a graceful fallback

Every mode runs in your browser. The Ken Burns and image-to-video paths are genuine client-side composition — they take your images and produce motion without any server-side rendering. The Text-to-Video path is where the honest trade-off lives: rather than charging for a GPU backend, the project ships a graceful fallback, and the generator labels ML-unavailable output as a placeholder so you are never misled about what produced it.

This is the same honesty-first design used across the app: do the real work the browser can do, and be explicit where a paid backend would otherwise be needed. The result is a tool that stays free and never silently fails. To see how this trade-off connects to the rest of the product, read the [zero-cost model](/concepts/zero-cost-model) page.

## Where results go

Finished videos are saved to your "My Videos" library, where you can revisit, reuse, and refine them. From there you can carry a video into the rest of your workflow, including lining it up in the [scheduling](/publishing/scheduling) tools when you are ready to publish.

The video creator is one of several creators in the app. Explore the others from the [tools overview](/tools/overview), including [text posts](/content/text-posts), [images](/content/images), [audio and music](/content/audio-music), [3D models](/content/3d-models), and [surveys and polls](/content/surveys-polls). New here? Begin with the [introduction](/intro) and the [quick-start guide](/getting-started/quick-start).

## Frequently asked questions

**Can it generate video from text like the large hosted models?**
Not in the machine-learning sense. True ML text-to-video needs a paid GPU and Python backend that this zero-cost project intentionally does not fund. The Text-to-Video mode falls back gracefully and marks ML-unavailable output as a placeholder.

**What actually works at zero cost?**
Ken Burns pan and zoom motion over your source images, and image-to-video composition. These run entirely in the browser and are the dependable, no-cost output.

**Is this a generative video model?**
No. It is a client-side video compositor. It arranges and animates your source images rather than generating new footage from a model, which is a deliberate zero-cost trade-off.

**Will the tool fail if the ML path is unavailable?**
No. It uses a graceful fallback and clearly labels any placeholder output, so the feature keeps working without a paid backend.

**Where do my finished videos go?**
Every video is saved to your "My Videos" library, where you can revisit and reuse it, including handing it off to the [scheduling](/publishing/scheduling) workflow.
