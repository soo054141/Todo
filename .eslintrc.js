module.exports = {
    parser: "babel-eslint",
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: ["airbnb", "prettier"],
    plugins: ["prettier"],
    rules: {
        "react/jsx-filename-extension": [
            "error",
            { extensions: [".js", ".jsx"] },
        ],
    },
};
