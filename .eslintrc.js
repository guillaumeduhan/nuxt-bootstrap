module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    semi: [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
  },
}
