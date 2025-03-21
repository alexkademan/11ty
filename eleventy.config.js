import pluginWebc from "@11ty/eleventy-plugin-webc";
// import CleanCSS from "clean-css";

export default function(eleventyConfig) {
	eleventyConfig.setInputDirectory("src");
	// eleventyConfig.setOutputDirectory("dist");
	
	eleventyConfig.addPassthroughCopy("./src/css/reset.css");
	eleventyConfig.addPassthroughCopy("./src/css/base.css");

	eleventyConfig.addBundle("css")

	eleventyConfig.addPlugin(pluginWebc, {
		components: "_includes/webc/*.webc"
	});

	// eleventyConfig.addFilter("cssmin", function (code) {
	// 	return new CleanCSS({}).minify(code).styles;
	// });
	
	
};

