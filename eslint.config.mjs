import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  // eslintPluginPrettierRecommended,
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    ignores: ["node_modules/", "dist/"],
  },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "no-console": "warn",
      "prefer-const": "error",
      "no-undef": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
