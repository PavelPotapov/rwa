/** @type {import('stylelint').Config} */

export default {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "at-rule-no-unknown": null,
    "no-descending-specificity": null,
    "import-notation": null,
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]*$", // Регулярное выражение для camelCase
      {
        message: "Class name should be in camelCase",
      },
    ],
    "custom-property-pattern": "^[a-z][a-zA-Z]*$",
    "custom-media-pattern": "^[a-z][a-zA-Z0-9]*$",
  },
};
