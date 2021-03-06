const { build } = require("esbuild");
const { stylusLoader } = require("esbuild-stylus-loader");
const fs = require("fs");

build({
  entryPoints: ["./lib/index.js"],
  bundle: true,
  minify: true,
  platform: "node",
  outdir: "./source",
  plugins: [
    stylusLoader({
      stylusOptions: {
        includeCss: true,
      },
    }),
  ],
}).then(() => {
  fs.rename("./source/index.js", "./source/js/anya.min.js", () => {});
  fs.rename("./source/index.css", "./source/css/anya.min.css", () => {});
});
