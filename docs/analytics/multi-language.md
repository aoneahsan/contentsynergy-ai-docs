---
id: multi-language
title: Multi-Language Support
description: ContentSynergy AI offers a selectable multi-language UI via i18next with English, Spanish, French, German, Chinese, and Arabic with full RTL.
sidebar_label: Multi-Language
keywords:
  - multi-language
  - i18next
  - react-i18next
  - rtl support
  - localization
  - arabic
---

# Multi-Language Support

Multi-language support in ContentSynergy AI is the ability to use the app's interface in your chosen language and to generate text in a range of languages. The interface is localized so menus, labels, and controls appear in a language you select, rather than being fixed to English.

The localization is built on [i18next](https://www.i18next.com/) together with react-i18next, a widely used internationalization stack for React applications. This pairing manages translation strings, switches locales at runtime, and keeps the UI consistent as you move between languages. To see where multi-language fits among the app's surfaces, review the [tools overview](/tools/overview) and the [introduction](/intro).

## Supported interface languages

The user interface is available in six languages:

- English
- Spanish
- French
- German
- Chinese
- Arabic

Each locale translates the app's interface text so you can work in the language you are most comfortable with. The UI language is user-selectable, meaning you choose it directly rather than relying on automatic detection alone, and your selection drives how the interface reads.

## Right-to-left support for Arabic

Arabic is provided with full right-to-left (RTL) support. RTL is more than translating words: it mirrors layout direction so text flows from right to left and interface elements align correctly for an Arabic reader. Building RTL support into the app means Arabic users get a properly oriented interface instead of a left-to-right layout with translated labels awkwardly placed. This is a meaningful accessibility and usability investment for languages written right to left.

## Text generation in 12 languages

Beyond the interface, ContentSynergy AI's text generation supports 12 languages. That means the content you create with the app's AI features can be produced in more languages than the interface itself offers. The interface localization and the generation language are distinct: you might run the app's UI in English while generating text in another supported language, or match them, depending on your needs.

Because the app runs its default AI flow on the client using open-source models, language generation happens within the same client-side approach described on the [how the AI works](/ai/how-ai-works) page. The [zero-cost model](/concepts/zero-cost-model) page explains why this on-device, no-paid-backend design is central to the product.

## Choosing your language

You select the UI language from within the app, and the choice persists so the interface stays in your preferred language on return visits. If you are setting up the app for the first time, the [installation guide](/getting-started/installation) covers getting started, after which you can pick your language and begin working.

For users who care about how their data and language preferences are handled, the [privacy and GDPR](/analytics/privacy-gdpr) page describes the app's consent and data-control features.

## Frequently asked questions

**Which languages does the interface support?**
The UI is available in English, Spanish, French, German, Chinese, and Arabic. You select your preferred language directly in the app.

**Does the app support right-to-left languages?**
Yes. Arabic ships with full RTL support, mirroring the layout so the interface reads correctly from right to left.

**How many languages can I generate text in?**
Text generation supports 12 languages. This is separate from the interface, so your generation language and UI language can differ.

**What technology powers the translations?**
Localization is built with i18next and react-i18next, a standard internationalization stack for React that handles translation strings and runtime locale switching.

**Can I run the interface in one language and generate in another?**
Yes. The UI language and the text-generation language are independent, so you can mix them to suit your workflow.
