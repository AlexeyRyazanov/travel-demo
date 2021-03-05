module.exports = {
   env: {
      "browser": true,
      "es6": true,
      "node": true,
      "serviceworker": true,
      "worker": true,
   },
   root: true,
   plugins: [
      "@typescript-eslint",
   ],
   extends: [
      "airbnb-typescript",
      "airbnb/hooks",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:react/recommended",
      // "eslint:recommended",
      // "plugin:node/recommended",
      // "plugin:promise/recommended",
      // "prettier",
      // "prettier/@typescript-eslint",
      // "prettier/react",
   ],
   parser: "@typescript-eslint/parser",
   parserOptions: {
      "project": [
         "./src/generic-tsconfig.json",
         "./src/main/tsconfig.json",
         "./src/workers/dedicated-worker/tsconfig.json",
         "./src/workers/service-worker/tsconfig.json"
      ],
      // "sourceType": "module"
   },
   rules: {
      "padded-blocks": 0,
      "no-var": "error",
      "semi": "error",
      // "indent": "error",
      "no-multi-spaces": "error",
      "space-in-parens": "error",
      "no-multiple-empty-lines": "error",
      "prefer-const": "error",
      "no-use-before-define": "error",
      "linebreak-style": 0,
      "object-shorthand": "error",
      "import/no-named-as-default": 0,
      "react/react-in-jsx-scope": "off",
      // "indent": "off",
      "@typescript-eslint/indent": ["error", 3],
      "react/jsx-indent-props": ["error", 3],
      "react/jsx-indent": ["error", 3],
      "prefer-arrow-callback": "off",
      "max-len": "off",
      // "max-len": ["error", { "code": 200 }],
      "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
   }
};