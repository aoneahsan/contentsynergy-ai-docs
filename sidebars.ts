import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for ContentSynergy AI docs.
 * Mirrors the real feature surface of the app at https://contentsynergy.aoneahsan.com.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started/installation', 'getting-started/quick-start'],
    },
    {
      type: 'category',
      label: 'Content Creation',
      collapsed: false,
      items: [
        'content/text-posts',
        'content/images',
        'content/video-reels',
        'content/audio-music',
        'content/3d-models',
        'content/surveys-polls',
      ],
    },
    {
      type: 'category',
      label: 'Publishing',
      collapsed: true,
      items: [
        'publishing/social-platforms',
        'publishing/scheduling',
        'publishing/community-templates',
      ],
    },
    {
      type: 'category',
      label: 'AI & Customization',
      collapsed: true,
      items: [
        'ai/how-ai-works',
        'ai/fine-tuning',
        'ai/themes-personalization',
      ],
    },
    {
      type: 'category',
      label: 'Creator & Developer Tools',
      collapsed: true,
      items: ['tools/overview'],
    },
    {
      type: 'category',
      label: 'Analytics & Compliance',
      collapsed: true,
      items: [
        'analytics/dashboard',
        'analytics/privacy-gdpr',
        'analytics/multi-language',
      ],
    },
    {
      type: 'category',
      label: 'Platforms',
      collapsed: true,
      items: [
        'platforms/web',
        'platforms/android',
        'platforms/browser-extension',
        'platforms/desktop',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: true,
      items: ['concepts/architecture', 'concepts/zero-cost-model'],
    },
    {
      type: 'category',
      label: 'About',
      collapsed: true,
      items: ['about-the-author'],
    },
  ],
};

export default sidebars;
