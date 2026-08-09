# Rafael Aguiar / Terule — Portfolio

Modern software-engineering portfolio built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Motion, and Three.js.

## Profile photo

Add Rafael's portrait as `public/images/profile.jpg`. The hero photo slot will pick it up automatically; until then it displays a styled placeholder.

## Local development

```bash
npm ci
npm run dev
```

Validate a production build with:

```bash
npm run lint
npx next build --webpack
```

## Deploy with Coolify

1. Push this repository to your Git provider.
2. In Coolify, create a **New Resource** from that repository and select either **Dockerfile** or **Docker Compose** as the build pack.
3. Set the domain to `terule.dev.br` and enable HTTPS.
4. Use port `3000` as the exposed/container port. Coolify will route traffic and use the container health check automatically.

The Docker image uses Next.js standalone output, runs as a non-root user, and includes only runtime files. No environment variables are required for the current static portfolio.

For local production testing with Compose:

```bash
docker compose up --build
```
