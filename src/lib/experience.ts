export type TimelineItem = {
  period: string
  role: string
  summary: string
  outcome: string
}

export const timeline: TimelineItem[] = [
  {
    period: '2014 - 2020',
    role: 'IT Infrastructure and Operations',
    summary:
      'Built reliability-first foundations across support, network, and systems operations.',
    outcome:
      'Reduced operational risk and improved service continuity through standardization.',
  },
  {
    period: '2020 - 2024',
    role: 'Automation and Platform Enablement',
    summary:
      'Created scripts and internal tools to remove repetitive operational bottlenecks.',
    outcome: 'Accelerated onboarding, auditing, and troubleshooting workflows.',
  },
  {
    period: '2024 - Today',
    role: 'Full-Stack Product Development',
    summary:
      'Designing and shipping internal and customer-facing products with modern web stack.',
    outcome:
      'Bridged infrastructure knowledge with product engineering delivery.',
  },
]
