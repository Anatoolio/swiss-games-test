// Switch sass-loader to the modern Dart Sass JS API so we don't emit
// "legacy JS API deprecated" warnings during build / dev.
module.exports = {
  style: {
    sass: {
      loaderOptions: {
        api: "modern",
      },
    },
  },
};
