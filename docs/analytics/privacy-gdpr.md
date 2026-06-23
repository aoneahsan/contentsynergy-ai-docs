---
id: privacy-gdpr
title: Privacy and GDPR
description: How ContentSynergy AI handles privacy and GDPR with consent settings, full JSON/CSV data export, account deletion, and on-device default AI.
sidebar_label: Privacy and GDPR
keywords:
  - privacy
  - gdpr
  - data export
  - account deletion
  - consent settings
  - on-device ai
---

# Privacy and GDPR

Privacy and GDPR support in ContentSynergy AI is the set of controls that let you decide what is collected, take a portable copy of everything you own, and permanently delete your account and content. The goal is simple: you stay in control of your data, and the app's design keeps as much of your work on your own device as the default flow allows.

A core privacy property comes from how the app runs AI. In the default flow, AI runs locally in your browser, so your prompts and the text you draft stay on-device rather than being sent to a remote inference server. You can read the full explanation on the [how the AI works](/ai/how-ai-works) page, and the [zero-cost model](/concepts/zero-cost-model) page explains why the architecture favors client-side processing.

## Privacy settings and consent

Privacy settings let you review and adjust your consent choices inside the app. Consent governs which optional measurement runs while you use ContentSynergy AI. You can revisit these settings rather than being locked into a one-time decision, which aligns with GDPR principles around informed, revocable consent.

The app's public-facing legal pages document this in plain language. You can read the privacy policy at [contentsynergy.aoneahsan.com/privacy](https://contentsynergy.aoneahsan.com/privacy) and the terms of service at the app's `/terms` page. These pages describe what the app does and do not promise capabilities the product lacks.

## Product analytics, stated honestly

To understand how the product is used and to diagnose issues, ContentSynergy AI includes product-side analytics SDKs: Firebase Analytics, Microsoft Clarity, and Amplitude. These tools measure product usage and behavior, and they are disclosed here so there is no surprise about what runs in the app. This product analytics is separate from your content: the default AI flow keeps your prompts and drafts on-device, while these SDKs report aggregate product-usage signals consistent with your consent choices.

## Exporting your data

Data export gives you a complete, portable copy of your information in JSON or CSV. JSON keeps the full structure for technical use or migration, and CSV is convenient for spreadsheets. This is the same export capability surfaced in the [analytics dashboard](/analytics/dashboard), applied here to your account data as a whole so you can exercise your right to data portability.

## Deleting your account

Account deletion removes your presence from the service. When you delete your account, the app deletes your content and removes the files you uploaded from FilesHub, the file-upload service ContentSynergy AI uses instead of a paid object-storage backend. Deletion is meant to be genuine, not a soft hide, so the data tied to your account is taken down.

You can start this process from the dedicated page at [contentsynergy.aoneahsan.com/delete-account](https://contentsynergy.aoneahsan.com/delete-account). Because deletion is permanent, export anything you want to keep first using the JSON or CSV options above.

## Where to go next

If you are setting up the app, the [installation guide](/getting-started/installation) walks through getting started, and the [introduction](/intro) gives the product overview. To see the surfaces that share your account and data, review the [tools overview](/tools/overview). For a complete technical picture of how data and AI are arranged, see the [system architecture](/concepts/architecture).

## Frequently asked questions

**Does ContentSynergy AI send my prompts to a server?**
In the default flow, AI runs locally in your browser, so your prompts and drafts stay on-device rather than being sent to a remote inference service.

**What analytics does the app itself use?**
The product uses Firebase Analytics, Microsoft Clarity, and Amplitude for product-usage measurement. These are disclosed here and governed by your consent settings.

**Can I get a full copy of my data?**
Yes. You can export your data in JSON for structured use or CSV for spreadsheets, supporting your data portability rights.

**What happens when I delete my account?**
Deleting your account removes your content and deletes your uploaded files from FilesHub. Use the [/delete-account](https://contentsynergy.aoneahsan.com/delete-account) page to start, and export anything you want to keep beforehand.

**Where are the official privacy and terms pages?**
The privacy policy is at [/privacy](https://contentsynergy.aoneahsan.com/privacy) and the terms at the app's `/terms` page on contentsynergy.aoneahsan.com.
