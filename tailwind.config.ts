import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22ccbd",
          50: "#f0fdfc",
          100: "#ccf7f4",
          200: "#99ebe8",
          300: "#5dd8d6",
          400: "#36c3c1",
          500: "#22ccbd",
          600: "#0f8a8a",
          700: "#0e6e70",
          800: "#11585b",
          900: "#134a4c",
          950: "#042f30",
        },
        blue: {
          DEFAULT: "#33768b",
          50: "#f1f8fa",
          100: "#dcecf2",
          200: "#bed9e6",
          300: "#91bdd5",
          400: "#5d9abe",
          500: "#3c7ea9",
          600: "#33768b",
          700: "#225573",
          800: "#224660",
          900: "#213b50",
          950: "#152736",
        },
        beige: {
          DEFAULT: "#b3896d",
          50: "#f9f6f3",
          100: "#f2ebe4",
          200: "#e1d1c2",
          300: "#d0b49c",
          400: "#b3896d",
          500: "#a27356",
          600: "#905d46",
          700: "#784a3a",
          800: "#644033",
          900: "#54382e",
          950: "#2d1e18",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
