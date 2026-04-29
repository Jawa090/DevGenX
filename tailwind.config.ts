import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				sora: ['Sora', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				display: ['Sora', 'sans-serif'],
				futuristic: ['Orbitron', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				/* Layer 1 — Backgrounds */
				bg: {
					base:    '#080808',
					page:    '#0b0e18',
					card:    '#141618',
					surface: '#1c1e22',
					subtle:  '#282827',
				},
				/* Layer 2 — Primary Accent (Electric / Cyan) */
				neon: {
					blue:   '#00d2ff',   /* Electric Blue — CTA, links, active */
					sky:    '#45b8f9',   /* Sky Blue — hover state of CTA */
					deep:   '#0ea5e0',   /* Deep Sky — pressed state */
					tint:   'rgba(0,0,210,0.10)', /* Accent Tint — tag bg, chip bg */
					cyan:   '#00e5ff',
					navy:   '#0a192f',
				},
				/* Layer 3 — Secondary Accent (Purple / Linear-style) */
				purple: {
					linear:   '#5e6da2',  /* Linear Purple — labels, icons */
					violet:   '#7c3aed',  /* Violet — gradient start */
					lavender: '#a878fa',  /* Lavender — badge text, icons */
					tint:     'rgba(124,58,237,0.10)',
				},
				/* Layer 4 — Typography */
				text: {
					primary: '#ffffff',   /* Pure White — H1, H2, hero */
					high:    '#b0b4b7',   /* Off White — H3, subheadings */
					body:    '#818188',   /* Zinc Gray — body, paragraphs */
					muted:   '#525258',   /* Muted Zinc — captions, meta */
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(160, 32, 240, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(160, 32, 240, 0.5)'
					},
				},
				'pulse-slow': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.7 },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'circuit-flow': {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' },
				},
				'hexagon-pulse': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.1)', opacity: '0.8' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'circuit-flow': 'circuit-flow 3s linear infinite',
				'hexagon-pulse': 'hexagon-pulse 2s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
			},
			backdropBlur: {
				xs: '2px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
