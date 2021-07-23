const defaultConfig = require("tailwindcss/defaultConfig")
const formsPlugin = require("@tailwindcss/forms")

module.exports = {
  mode: "jit",
  purge: ["index.html", "src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Inter", defaultConfig.theme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "var(--main)",
        background: "var(--background)",
        header: "var(--header)",
        accent: "var(--accent)",
      },
    },
  },
  darkMode: "media",
  plugins: [formsPlugin],
}
