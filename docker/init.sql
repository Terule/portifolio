CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  status TEXT NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  display_order INTEGER NOT NULL DEFAULT 0,
  github_url TEXT,
  live_url TEXT,
  cover_image_url TEXT,
  tags JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects (featured);
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects (display_order);

CREATE TABLE IF NOT EXISTS profile_settings (
  id SMALLINT PRIMARY KEY CHECK (id = 1),
  photo_url TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO projects (
  id,
  title,
  subtitle,
  description,
  status,
  featured,
  display_order,
  github_url,
  live_url,
  cover_image_url,
  tags
)
VALUES
  (
    '5d23e7e3-95ac-42fd-acf9-4750c31c6f0a',
    'DL Manager',
    'M365 Distribution Lists',
    'Microsoft 365 distribution list manager with owner-based access control and bulk member operations.',
    'Shipping v1',
    TRUE,
    1,
    'https://github.com/Terule/dl-manager',
    NULL,
    '/images/projects/dl-manager.svg',
    '["Next.js", "TypeScript", "Shadcn UI", "Tailwind CSS", "Biome"]'::jsonb
  ),
  (
    'ed3f78f0-2677-45ab-8f85-97f4d24f8fce',
    'Finance App',
    'Personal Finance Platform',
    'Personal finance management platform focused on performance and expense tracking.',
    'In Progress',
    FALSE,
    2,
    NULL,
    NULL,
    '/images/projects/finance-app.svg',
    '["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"]'::jsonb
  ),
  (
    '4ce76106-84e2-445f-bf2e-bb03b65cbc82',
    'IT Ops Automation',
    'Automation Suite',
    'Suite of scripts and workflows to automate user onboarding and AD auditing.',
    'Operational',
    FALSE,
    3,
    NULL,
    NULL,
    '/images/projects/it-ops.svg',
    '["PowerShell", "n8n"]'::jsonb
  )
ON CONFLICT (id) DO NOTHING;
