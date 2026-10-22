/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F5F0E7",
          light: "#FAF7F2",
          warm: "#EFE8DC"
        },
        limestone: {
          DEFAULT: "#E7DCCB",
          deep: "#DDD0BC"
        },
        sand: {
          DEFAULT: "#D8C7AF",
          muted: "#C7B499"
        },
        taupe: {
          DEFAULT: "#A39482",
          dark: "#7A6D5D"
        },
        espresso: {
          DEFAULT: "#302820",
          light: "#463B30",
          deep: "#1E1914",
          obsidian: "#14110E"
        },
        brass: {
          DEFAULT: "#B49A68",
          light: "#C9B182",
          dark: "#947C4D"
        },
        sage: {
          DEFAULT: "#5C6654"
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "'Playfair Display'", "Georgia", "'Times New Roman'", "serif"],
        sans: ["'Plus Jakarta Sans'", "'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Consolas'", "monospace"]
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.22, 1, 0.36, 1)",
        "curtain": "cubic-bezier(0.76, 0, 0.24, 1)"
      }
    }
  },
  plugins: []
};
