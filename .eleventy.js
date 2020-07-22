module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
            output: "html",
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ['html', 'njk', 'md'],
    };
}

