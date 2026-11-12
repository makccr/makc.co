import fs from "node:fs";
import path from "path";
import { createRequire } from "module";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { DateTime } from "luxon";
import pluginSitemap from "@quasibit/eleventy-plugin-sitemap";
import pluginRss from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"; // ✅ ADDED

const require = createRequire(import.meta.url);
const striptags = require("striptags");
const wordStats = require("@photogabble/eleventy-plugin-word-stats");

export default function (eleventyConfig) {

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(wordStats, {
        output: (stats) => `${stats.words} words`
    });
  eleventyConfig.addFilter("striptags", striptags);
  eleventyConfig.addFilter("firstLine", content => {
    if (!content) return "";
    return content.split("\n")[0];
  });
    eleventyConfig.addFilter("lastModified", (inputPath) => {
        if (!inputPath) return null;
        try {
          return fs.statSync(inputPath).mtime;
        } catch {
          return null;
        }
      });

      eleventyConfig.addGlobalData("eleventyComputed", {
        lastModified: (data) => {
          const inputPath = data.page?.inputPath;
          if (!inputPath) return null;
          try {
            return fs.statSync(inputPath).mtime;
          } catch {
            return null;
          }
        },
      });

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: "https://makc.co",
    },
  });
  eleventyConfig.addCollection("essays", (collectionApi) => {
    return collectionApi.getFilteredByGlob("essays/*.md");
  });
  eleventyConfig.addCollection("docs", (collectionApi) => {
    return collectionApi.getFilteredByGlob("docs/*.md");
  });

  // Plugins & passthrough
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPassthroughCopy("_style");
  eleventyConfig.addPassthroughCopy("_fonts");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("netlify.toml");
  eleventyConfig.addPassthroughCopy("downloads");

  // Filters
    eleventyConfig.addFilter("postDate", dateObj => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("d LLLL yyyy");
    });

    eleventyConfig.addFilter("displayDate", dateString => {
        return DateTime.fromISO(dateString).toFormat("d LLLL yyyy");
    });

    eleventyConfig.addFilter("modDate", (dateObj) => {
      if (!dateObj) return "";
      return DateTime.fromJSDate(dateObj).toFormat("d MMMM yyyy");
    });

  return {
    dir: {
      input: ".",
      output: "_site",
    }
  };
}
