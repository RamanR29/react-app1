import eslint from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      prettier,
      "react-refresh": reactRefresh,
      "react-hooks": reactHooks,
    },
    ignores: ["dist", ".eslintrc.cjs", "prettier.config.cjs", "**/*.stories.tsx"],
    rules: {
      // --- React Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // --- TypeScript
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],

      // --- Prettier
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          usePrettierrc: true,
        },
      ],

      // --- Custom Rules
      "no-console": [
        "warn",
        {
          allow: ["assert"],
        },
      ],
      "react/jsx-no-useless-fragment": "error",
      "react-hooks/exhaustive-deps": "off",
      "no-nested-ternary": "error",
      "no-return-assign": ["error", "always"],
      "no-unneeded-ternary": [
        "error",
        {
          defaultAssignment: false,
        },
      ],
      "no-useless-rename": [
        "error",
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      "prefer-const": "error",
      "react/display-name": "off",
      "react/prop-types": "off",
      "no-unused-vars": "off", // Overridden by TS version

      // --- Restrictions
      "no-restricted-exports": [
        "error",
        {
          restrictedNamedExports: ["default", "then"],
        },
      ],
      "no-restricted-globals": [
        "error",
        {
          name: "isFinite",
          message:
            "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
        },
        {
          name: "isNaN",
          message:
            "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
        },
        "addEventListener",
        "blur",
        "close",
        "closed",
        "confirm",
        "defaultStatus",
        "defaultstatus",
        "event",
        "external",
        "find",
        "focus",
        "frameElement",
        "frames",
        "history",
        "innerHeight",
        "innerWidth",
        "length",
        "location",
        "locationbar",
        "menubar",
        "moveBy",
        "moveTo",
        "name",
        "onblur",
        "onerror",
        "onfocus",
        "onload",
        "onresize",
        "onunload",
        "open",
        "opener",
        "opera",
        "outerHeight",
        "outerWidth",
        "pageXOffset",
        "pageYOffset",
        "parent",
        "print",
        "removeEventListener",
        "resizeBy",
        "resizeTo",
        "screen",
        "screenLeft",
        "screenTop",
        "screenX",
        "screenY",
        "scroll",
        "scrollbars",
        "scrollBy",
        "scrollTo",
        "scrollX",
        "scrollY",
        "self",
        "status",
        "statusbar",
        "stop",
        "toolbar",
        "top",
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain. Use Object.{keys,values,entries} instead.",
        },
        {
          selector: "ForOfStatement",
          message:
            "Avoid using for..of due to regenerator-runtime overhead. Prefer array methods.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are like GOTO. Avoid them for better code clarity.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode and makes code unpredictable.",
        },
      ],
    },
  },

  // --- Override for test files
  {
    files: ["**/*.test.tsx"],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
    },
  }
);