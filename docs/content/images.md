---
id: images
title: AI Image Creator
description: Create styled images in the browser with twelve styles, twelve moods, six aspect ratios, and ten starting templates.
sidebar_label: Images
keywords:
  - ai image creator
  - browser image generation
  - styles and moods
  - aspect ratios
  - fileshub storage
  - placeholder fallback
  - zero-cost ai
---

# AI Image Creator

The AI Image Creator is a browser-based visual tool that turns a prompt and a set of style choices into a styled image, generated client-side on your own device. It is built to run without a paid image service: when a device cannot complete a full render, it falls back to a placeholder render so the workflow keeps moving. This fits the app's [zero-cost model](/concepts/zero-cost-model), where every creator runs locally and stays genuinely free.

## What it does

The creator takes a description and a combination of style, mood, aspect ratio, and an optional starting template, then composes an image from those inputs. Generation runs in the browser rather than on a remote server, which is what keeps the tool free to use. You can iterate on a concept by adjusting the controls and generating again.

It is important to set expectations honestly. Browser image generation is not a data-center diffusion model. It produces styled compositions shaped by your choices, and on constrained devices it falls back to a placeholder render. Think of it as a fast, no-cost way to produce on-brand visual concepts rather than a heavyweight rendering engine. For the reasoning behind this trade-off, see [how the AI works](/ai/how-ai-works).

## The options and controls

You shape each image with these controls:

- **Style (12 options):** photorealistic, digital-art, oil-painting, watercolor, sketch, anime, cartoon, 3d-render, pixel-art, pop-art, minimalist, and abstract. Style sets the overall visual treatment.
- **Mood (12 options):** vibrant, calm, dramatic, mysterious, cheerful, nostalgic, futuristic, vintage, dark, bright, and more. Mood guides the color and atmosphere of the composition.
- **Aspect ratio (6 options):** choose the shape of the canvas to match where the image will be used.
- **Starting templates (10 options):** begin from one of ten templates to get a faster, more guided result.

Combining a style with a mood and an aspect ratio gives you a wide range of looks from the same prompt, so you can explore several directions before settling on one.

## How it works: client-side with a placeholder fallback

When you generate an image, the tool composes it in your browser using your selected style, mood, aspect ratio, and template. Because everything runs on your device, there is no remote rendering bill and no API key. On a device that cannot complete the composition — for example one with limited resources — the creator produces a placeholder render instead of failing. The placeholder is a deliberate, transparent fallback, not a hidden error state.

This is the same honesty-first pattern the rest of the app follows: real client-side generation where the device can handle it, and a clear fallback where it cannot. The point is reliability without ongoing cost. To understand how the zero-cost approach shapes every feature, read the [zero-cost model](/concepts/zero-cost-model) page.

## Where results go

Generated images are saved to your "My Images" gallery, so you can revisit, compare, and reuse them. Images can also be uploaded and stored through FilesHub, the app's file-storage layer — this is the project's chosen storage path, not a paid object-storage service. From your gallery you can take a visual into the rest of your workflow, including lining content up in the [scheduling](/publishing/scheduling) tools.

The image creator is one of several creators in the app. Explore the others from the [tools overview](/tools/overview), including [text posts](/content/text-posts), [video and reels](/content/video-reels), [audio and music](/content/audio-music), [3D models](/content/3d-models), and [surveys and polls](/content/surveys-polls). If you are just getting started, see the [introduction](/intro) and the [quick-start guide](/getting-started/quick-start).

## Frequently asked questions

**Is the image creator really free?**
Yes. It runs client-side in your browser with no API key and no usage charge. When a device cannot complete a render, it falls back to a placeholder so you still get a result.

**Is this a diffusion model like the large hosted image services?**
No. Browser image generation here is not a data-center diffusion model. It produces styled compositions from your style, mood, aspect ratio, and template choices, and it falls back to a placeholder render on constrained devices.

**What happens on a low-powered device?**
The creator produces a placeholder render instead of failing. This is a deliberate fallback so the tool keeps working everywhere.

**Where are my images stored?**
Generated images are saved to your "My Images" gallery and can be uploaded and stored through FilesHub, the app's file-storage layer, rather than a paid object-storage service.

**How many style and mood combinations can I try?**
You can pick from twelve styles and twelve moods, across six aspect ratios, with ten starting templates — enough to explore many directions from a single prompt.
