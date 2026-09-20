import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { DateTime } from "luxon";
import pluginSitemap from "@quasibit/eleventy-plugin-sitemap";
import pluginRss from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"; // ✅ ADDED

const require = createRequire(import.meta.url);
const striptags = require("striptags");

export default function (eleventyConfig) {

  // ✅ Syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // ✅ Add striptags filter
  eleventyConfig.addFilter("striptags", striptags);

  eleventyConfig.addFilter("firstLine", content => {
    if (!content) return "";
    return content.split("\n")[0];
  });

  // ✅ Add RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // ✅ Optional plugin-based sitemap
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: "https://makc.co",
    },
  });

  // ✅ Custom collection: all essays
  eleventyConfig.addCollection("essays", (collectionApi) => {
    return collectionApi.getFilteredByGlob("essays/*.md");
  });

  // ✅ Custom collection: all docs
  eleventyConfig.addCollection("docs", (collectionApi) => {
    return collectionApi.getFilteredByGlob("docs/*.md");
  });

  // Plugins & passthrough
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("downloads");
  eleventyConfig.addPassthroughCopy("style");

  // Filters
    eleventyConfig.addFilter("postDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("LLLL d, yyyy");
    });

    eleventyConfig.addFilter("displayDate", dateString => {
        return DateTime.fromISO(dateString).toFormat("LLLL d, yyyy");
    });

  return {
    dir: {
      input: ".",
      output: "_site",
    }
  };
}
