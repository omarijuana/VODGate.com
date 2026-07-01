export const landing = {
  navigation: {
    ariaLabel: 'Main navigation',
    brandAriaLabel: 'VODGate home',
    menuButtonAriaLabel: 'Open navigation menu',
    marketButtonAriaLabel: 'Choose language',
    marketButtonTitle: 'Languages',
    marketMenuAriaLabel: 'Language selector',
  },
  navLinks: [
    { label: 'Features', href: '#features' },
    { label: 'Plans', href: '#pricing' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'vodgate.com',
    heading: 'VODGate - Premium IPTV & VOD Services',
    text: 'A clean, reliable Live TV & VOD entertainment service made for modern homes and compatible with popular devices.',
    ariaLabel: 'Service highlights',
    primaryAction: {
      label: 'Order on WhatsApp',
      href: 'https://wa.me/212642197277?text=Hello%20VODGate%2C%20I%20want%20to%20order%20an%20IPTV%20plan',
    },
    secondaryAction: {
      label: 'View Plans',
      href: '#pricing',
    },
  },
  trustBadges: [
    'Fast activation',
    '4K ready',
    'WhatsApp support',
  ],
  heroTvPreview: {
    ariaLabel: 'VODGate service preview',
    featureCardText: 'Stream movies, sports & live TV',
    rows: [
      {
        label: 'Latest movies & series',
        selector: '.tv-row-top .tv-track',
        folder: 'Latest Movies and Series Images',
        prefix: 'poster',
        count: 19,
        alt: 'Latest movie or series poster',
      },
      {
        label: 'Live TV & TV shows',
        selector: '.tv-row-bottom .tv-track',
        folder: 'Live TV and TV Shows',
        prefix: 'tv',
        count: 13,
        alt: 'Live TV or TV show thumbnail',
      },
    ],
  },
  features: {
    eyebrow: 'Features',
    heading: 'Premium access, simple setup',
    text: 'Everything you need to get started quickly with clear guidance and responsive WhatsApp support.',
    items: [
      {
        icon: '⚡',
        heading: 'Fast activation',
        text: 'Choose a plan, message us, and receive activation details without complicated checkout steps.',
      },
      {
        icon: '📺',
        heading: 'HD / Full HD / 4K ready',
        text: 'Enjoy smooth entertainment quality when your device and internet connection support it.',
      },
      {
        icon: '🧩',
        heading: 'Popular device support',
        text: 'Works on Smart TV, Android Box, Fire Stick, iPhone, Android, PC, and other compatible apps.',
      },
      {
        icon: '💬',
        heading: 'WhatsApp support',
        text: 'Get direct help before ordering and during setup through simple WhatsApp communication.',
      },
      {
        icon: '🔒',
        heading: 'Secure process',
        text: 'No online payment is required on the website; plan requests are handled personally.',
      },
      {
        icon: '🛠️',
        heading: 'Simple setup',
        text: 'Receive straightforward setup instructions tailored to your preferred compatible device.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Plans',
    heading: 'Choose your VODGate plan',
    text: 'Flexible IPTV & VOD access plans designed for quick WhatsApp ordering and easy activation.',
    plans: [
      {
        heading: '1 Month Plan',
        label: 'Great for trying the service',
        features: [
          'Live TV & VOD entertainment service',
          'HD / Full HD / 4K ready',
          'Compatible device setup help',
          'WhatsApp support included',
        ],
        actionLabel: 'Order on WhatsApp',
        actionHref: 'https://wa.me/212642197277?text=Hello%20VODGate%2C%20I%20want%20to%20order%20an%20IPTV%20plan',
      },
      {
        heading: '3 Months Plan',
        label: 'Balanced access and value',
        badge: 'Popular',
        featured: true,
        features: [
          'Live TV & VOD entertainment service',
          'HD / Full HD / 4K ready',
          'Works with popular devices',
          'Priority WhatsApp setup guidance',
        ],
        actionLabel: 'Order on WhatsApp',
        actionHref: 'https://wa.me/212642197277?text=Hello%20VODGate%2C%20I%20want%20to%20order%20an%20IPTV%20plan',
      },
      {
        heading: '12 Months Plan',
        label: 'Best for long-term access',
        features: [
          'Live TV & VOD entertainment service',
          'HD / Full HD / 4K ready',
          'Multi-device compatibility guidance',
          'Ongoing WhatsApp support',
        ],
        actionLabel: 'Order on WhatsApp',
        actionHref: 'https://wa.me/212642197277?text=Hello%20VODGate%2C%20I%20want%20to%20order%20an%20IPTV%20plan',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'How it works',
    heading: 'Start in four simple steps',
    steps: [
      {
        number: '01',
        heading: 'Choose a plan',
        text: 'Select the duration that matches your needs.',
      },
      {
        number: '02',
        heading: 'Contact us on WhatsApp',
        text: 'Send your order request and device details.',
      },
      {
        number: '03',
        heading: 'Receive setup instructions',
        text: 'We guide you through setup for compatible devices.',
      },
      {
        number: '04',
        heading: 'Start watching',
        text: 'Enjoy your Live TV & VOD entertainment access.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Common questions',
    items: [
      {
        question: 'Which devices are compatible?',
        answer: 'VODGate works with many popular devices, including Smart TV, Android Box, Fire Stick, iPhone, Android, and PC when using compatible apps.',
      },
      {
        question: 'How fast is activation?',
        answer: 'Activation is typically handled quickly after you contact us on WhatsApp and provide the required plan and device details.',
      },
      {
        question: 'Do you offer a trial?',
        answer: 'Trial availability may vary. Contact us on WhatsApp and we will let you know the current options.',
      },
      {
        question: 'How do I get support?',
        answer: 'Support is provided through WhatsApp for setup questions, compatible device guidance, and general service help.',
      },
      {
        question: 'What internet speed do I need?',
        answer: 'A stable broadband connection is recommended. Higher-quality streams such as Full HD or 4K require faster and more stable internet.',
      },
      {
        question: 'Is setup difficult?',
        answer: 'No. We provide clear setup instructions for your compatible device so you can start watching as smoothly as possible.',
      },
    ],
  },
  contactCta: {
    eyebrow: 'Contact',
    heading: 'Ready to order VODGate?',
    text: 'Message us on WhatsApp to choose your plan, confirm compatibility, and receive setup instructions. You can also email us at hello@vodgate.com.',
    email: 'hello@vodgate.com',
    actionLabel: 'Order on WhatsApp',
    actionHref: 'https://wa.me/212642197277?text=Hello%20VODGate%2C%20I%20want%20to%20order%20an%20IPTV%20plan',
  },
  footer: {
    brandAriaLabel: 'VODGate home',
    copy: 'VODGate. Live TV & VOD entertainment service.',
  },
  floatingWhatsApp: {
    label: 'WhatsApp',
    ariaLabel: 'Order VODGate on WhatsApp',
    href: 'https://wa.me/212642197277?text=Hello%20VODGate%2C%20I%20want%20to%20order%20an%20IPTV%20plan',
  },
};
