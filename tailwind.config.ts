import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Primary theme colors (green & yellow)
        primaryGreen: "#064E3B",
        accentYellow: "#FACC15",
        neutralWhite: "#F5F5F4",
        lightGreen: "#A7F3D0",
        darkCharcoal: "#1C1917",
        // Modern theme colors (blue & orange)
        modernBlue: "#1E3A8A",
        modernOrange: "#FB923C",
        modernGray: "#F3F4F6",
        modernCyan: "#22D3EE",
        modernSlate: "#1E293B",
      },
    },
  },
  plugins: [],
} satisfies Config;
