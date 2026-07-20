'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className="rounded-full border border-border/70 bg-background/70 text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      size="icon-sm"
      type="button"
      variant="ghost"
    >
      {isDark ? (
        <Sun data-icon="inline-start" />
      ) : (
        <Moon data-icon="inline-start" />
      )}
      <span className="sr-only">
        Switch to {isDark ? 'light' : 'dark'} theme
      </span>
    </Button>
  )
}
