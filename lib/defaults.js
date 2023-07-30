module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "tsconfig.json"
    },
    "rules": {
        "@typescript-eslint/return-await": 0,
        "@typescript-eslint/strict-boolean-expressions": 0,
        "@typescript-eslint/comma-dangle": [
            "error",
            "only-multiline"
        ],
        "comma-dangle": [
            "error",
            "only-multiline"
        ],
        "max-len": [
            "error",
            {
                "code": 140,
                "ignoreUrls": true
            }
        ]
    }
};