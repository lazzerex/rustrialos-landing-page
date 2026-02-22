/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--color-background) / <alpha-value>)',
				'background-secondary': 'hsl(var(--color-background-secondary) / <alpha-value>)',
				'background-tertiary': 'hsl(var(--color-background-tertiary) / <alpha-value>)',
				foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
				'foreground-secondary': 'hsl(var(--color-foreground-secondary) / <alpha-value>)',
				'foreground-muted': 'hsl(var(--color-foreground-muted) / <alpha-value>)',
				'foreground-subtle': 'hsl(var(--color-foreground-subtle) / <alpha-value>)',
				brand: {
					400: 'hsl(var(--color-brand-400) / <alpha-value>)',
					500: 'hsl(var(--color-brand-500) / <alpha-value>)',
					600: 'hsl(var(--color-brand-600) / <alpha-value>)',
					700: 'hsl(var(--color-brand-700) / <alpha-value>)',
					900: 'hsl(var(--color-brand-900) / <alpha-value>)',
				},
				border: 'hsl(var(--color-border) / <alpha-value>)',
				'border-strong': 'hsl(var(--color-border-strong) / <alpha-value>)',
				card: 'hsl(var(--color-card) / <alpha-value>)',
				'card-border': 'hsl(var(--color-card-border) / <alpha-value>)',
				muted: 'hsl(var(--color-muted) / <alpha-value>)',
				'muted-foreground': 'hsl(var(--color-muted-foreground) / <alpha-value>)',
				ring: 'hsl(var(--color-ring) / <alpha-value>)',
				success: 'hsl(var(--color-success) / <alpha-value>)',
				warning: 'hsl(var(--color-warning) / <alpha-value>)',
				error: 'hsl(var(--color-error) / <alpha-value>)',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				mono: ['JetBrains Mono', 'Courier New', 'monospace'],
			},
			borderRadius: {
				sm: 'var(--radius-sm)',
				md: 'var(--radius-md)',
				lg: 'var(--radius-lg)',
				xl: 'var(--radius-xl)',
				'2xl': 'var(--radius-2xl)',
				'3xl': 'var(--radius-3xl)',
				full: 'var(--radius-full)',
			},
		},
	},
	plugins: [],
}
