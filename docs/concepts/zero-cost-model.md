---
id: zero-cost-model
title: The zero-cost model
description: How ContentSynergy AI stays free to run — client-side AI, Firebase free tier, FilesHub uploads, and no paid cloud compute.
sidebar_label: The zero-cost model
keywords:
  - zero-cost AI app
  - free SaaS architecture
  - Firebase free tier
  - FilesHub
  - serverless content app
---

# The zero-cost model

ContentSynergy AI is built so that running it costs the developer nothing, which is what lets it stay free for everyone. This page explains where the money would normally go in an app like this and how each of those costs is engineered away.

## Four places a content app usually spends money

A studio that generates media, stores it, syncs it across devices, and publishes it typically pays for: AI inference, file storage, a backend server, and a database. ContentSynergy AI removes the first three entirely and keeps the fourth inside a free tier.

**AI inference** is the biggest cost in most AI products. Here it is zero because models run in the browser on the user's hardware — see [How the AI works](/ai/how-ai-works). No tokens are billed because no cloud model is called by default.

**File storage** uses [FilesHub](https://fileshub.zaions.com) rather than a paid object store. Uploads go through the FilesHub API, generated and stored at no per-gigabyte charge to the project, and old files are cleaned up when content or accounts are deleted.

**Backend compute** doesn't exist as a paid server. There are no Firebase Cloud Functions in this project — that's a hard rule, not an omission. Anything that would normally need a server (scheduling logic, transforms, analytics aggregation) runs client-side or against Firestore directly.

**The database** is Cloud Firestore on the free tier, which comfortably covers a creator-scale workload of reads and writes per day. Schemas and security rules are designed to keep queries cheap and access default-deny.

## What you trade for free

Nothing is truly free without a trade-off, and the docs are honest about this one: compute happens on your device. A capable laptop with WebGPU runs models faster and larger than a budget phone, and the very heaviest tasks (true text-to-video, photorealistic image synthesis) are out of reach for browser models and fall back gracefully. In exchange you get no subscription, no usage meter, no vendor lock-in on your prompts, and your default-flow data never leaving your device.

## Why this matters for trust

Because there's no metered backend, the project has no incentive to harvest usage or upsell generations. Your content lives under your account in Firestore, your files live in FilesHub, and you can export or delete everything from the app — covered in [Privacy & GDPR](/analytics/privacy-gdpr). The zero-cost architecture and the privacy posture reinforce each other: the cheapest place to run a model is also the most private.

## Frequently asked questions

**Will it ever start charging?** The architecture is designed around zero marginal cost, so there's no usage to bill. The app and its AI are free.

**Are there paid add-ons?** The core is free. Optional bring-your-own-key providers let you connect an external service you pay for directly, but they're never required.

**What are the real limits?** Firestore free-tier daily quotas and your own device's performance. For most creators neither is a wall in normal use.
