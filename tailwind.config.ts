import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: colors.amber,   // brand-yellow-50..900
          orange: colors.orange,  // brand-orange-50..900
          green: colors.emerald,  // brand-green-50..900
          red: colors.rose,       // brand-red-50..900
        },
      },
    },
  },
  plugins: [],
} satisfies Config;