/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      }
    },
    extend: {
      colors: {
        "scheme-background": "hsl(0, 0%, 100%)",
        "scheme-text": "hsl(222, 47%, 11%)",
        "scheme-border": "hsl(210, 16%, 90%)",
        "neutral-darkest": "hsl(222, 47%, 11%)"
      },
      borderRadius: {
        card: "1.5rem",
        image: "1.25rem"
      },
      spacing: {
        18: "4.5rem"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        },
        "loop-horizontally": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "loop-vertically": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "loop-horizontally": "loop-horizontally 25s linear infinite",
        "loop-vertically": "loop-vertically 25s linear infinite"
      }
    }
  },
  plugins: []
};