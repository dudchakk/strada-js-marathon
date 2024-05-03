import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "warn",
        "prefer-const": ["warn", {"ignoreReadBeforeAssign": false}]
    }
}
];