---
id: surveys-polls
title: Surveys & Polls Builder
description: Build surveys and polls with 12 question types, drag-and-drop, conditional logic, and D3-powered response analytics. Free and client-side.
sidebar_label: Surveys & Polls
keywords:
  - survey builder
  - polls
  - conditional logic
  - drag and drop builder
  - response analytics
  - d3 charts
---

# Surveys & Polls Builder

The surveys and polls builder is a browser-based tool for designing questionnaires, collecting responses, and reading the results through interactive charts. It lets you assemble a survey from a range of question types, arrange them visually, route respondents down different paths based on their answers, and then study what people said, all from one workspace in ContentSynergy AI.

## What it does

The builder gives you 12 question types so you can ask for ratings, choices, free text, and more within the same survey. You lay questions out with a drag-and-drop editor, reordering and arranging them by hand rather than editing a list. Conditional logic, also called branching, lets a respondent's answer change which question comes next, so one survey can adapt to different people instead of forcing everyone through the same fixed sequence. Once responses come in, the builder renders response analytics as charts so you can see distributions and patterns at a glance. It is well suited to audience research and engagement, whether you are testing an idea, gathering feedback, or running a quick poll. When you need the raw numbers elsewhere, you can export your results.

## Options and controls

You begin by choosing question types from the set of 12 and dropping them onto your survey canvas. The drag-and-drop builder is powered by @dnd-kit, so reordering and positioning questions feels direct and visual. For each question you can wire up conditional logic that shows, hides, or redirects to later questions depending on earlier answers, which is how you build branching paths. On the analysis side, the response views are rendered with D3.js, giving you interactive charts of how people answered. Export is available when you want to take results into another tool. These controls stay visible as distinct steps so you can move between building, branching, and analyzing without losing your place.

## How it works: client-side building and where data lives

The survey builder itself runs client-side in your browser. Designing the form, arranging questions with @dnd-kit, and configuring branching all happen in the page, which is consistent with the [zero-cost model](/concepts/zero-cost-model) that lets ContentSynergy AI stay free. There is no paid form service behind it.

Surveys and polls differ from the media generators in one important way: they collect responses from real people, so those responses need a durable home. Your surveys, along with the responses they gather, are stored under your account in Firestore. That keeps a poll's results available across sessions and tied to you, rather than living only in a single browser tab. The analytics you see are computed and drawn from that stored data using D3.js. For more on how data and processing are handled across the app, see [how the AI works](/ai/how-ai-works).

## Where results go

Responses accumulate against each survey in your account, and the builder turns them into D3-rendered charts you can read directly. For a broader view of your activity and how this tool sits beside everything else you create, head to the [analytics dashboard](/analytics/dashboard). Surveys also pair naturally with the rest of your content: gather opinions before drafting [text posts](/content/text-posts), test reactions to [images](/content/images) or a [video reel](/content/video-reels), or follow up an [audio](/content/audio-music) or [3D model](/content/3d-models) project with a quick poll. When you need to work with the data outside the app, use the export option.

New to ContentSynergy AI? Read the [introduction](/intro), follow the [quick start](/getting-started/quick-start), or browse the [tools overview](/tools/overview) to see how surveys fit into the wider toolkit.

## Frequently asked questions

**How many question types can I use?**
The builder offers 12 question types, so you can mix ratings, choices, open text, and others within a single survey.

**What does conditional logic do?**
Conditional logic, or branching, lets a respondent's earlier answers decide which questions they see next. This means one survey can adapt to different people instead of asking everyone the exact same set in the same order.

**Where are my surveys and responses stored?**
The builder runs client-side, but your surveys and the responses they collect are stored under your account in Firestore, so results persist across sessions and stay tied to you.

**Can I get the raw results out of the app?**
Yes. You can export your results to use them in other tools when you need the underlying data rather than the in-app charts.

**How are the analytics drawn?**
Response analytics are rendered with D3.js as interactive charts. You can also see your wider activity on the analytics dashboard.
