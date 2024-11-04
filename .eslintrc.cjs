module.exports = {
  extends: ["plugin:prettier/recommended", "plugin:react/jsx-runtime"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
