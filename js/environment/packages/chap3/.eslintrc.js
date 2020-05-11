module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    //  tells ESLint that your config extends the given configurations
    "extends": [
        // is ESLint's inbuilt "recommended" config - 
        // it turns on a small, sensible set of rules which lint for well-known best-practices.
        "eslint:recommended",
        // is a configuration we provide which disables a few of the recommended rules from the previous set
        // that we know are already covered by TypeScript's typechecker.
        "plugin:@typescript-eslint/eslint-recommended",
        // is our "recommended" config - it's just like eslint:recommended,
        // except it only turns on rules from our TypeScript-specific plugin.
        'plugin:@typescript-eslint/recommended',
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    // tells ESLint to use the parser package you installed (@typescript-eslint/parser).
    // This allows ESLint to understand TypeScript syntax.
    // This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    //  tells ESLint to load the plugin package you installed (@typescript-eslint/eslint-plugin).
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
};
