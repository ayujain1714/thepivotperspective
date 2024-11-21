import type { Config } from "tailwindcss";

//@ts-ignore
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'
import svgToDataUri from 'mini-svg-data-uri'

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars
  })
}

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}, fontFamily: {
        mont: 'var(--font-montserrat)',
        sans: 'var(--font-hubotSans)',
      },
	  keyframes: {
        vibrate: {
          "0%": { transform: "translate(-1px, 2px) rotate(0deg)" },
          "10%": { transform: "translate(1px, -3px) rotate(1deg)" },
          "20%": { transform: "translate(-2px, 1px) rotate(-1deg)" },
          "30%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "40%": { transform: "translate(2px, -2px) rotate(-5deg)" },
          "60%": { transform: "translate(-1px, -2px) rotate(1deg)" },
          "70%": { transform: "transform: translate(0px, 2px) rotate(0deg)" },
          "80%": { transform: "translate(-1px, 2px) rotate(1deg)" },
          "90%": { transform: "translate(0px, -3px) rotate(2deg)" },
          "100%": { transform: "translate(-3px, 1px) rotate(-2deg)" },
        },
        moveUp: {
          '0%': { transform: 'translateY(5%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' }
        },
        appear: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        }
      },
      animation: {
        vibrate: 'vibrate 3s ease infinite',
        moveUp: 'moveUp 1.4s ease forwards',
        appear: 'appear 1s 0.2s forwards'
      }
  	}
  },
  plugins: [require("tailwindcss-animate"),
	addVariablesForColors,
    function ({ matchUtilities, theme, addUtilities }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    }
  ],
} satisfies Config;
