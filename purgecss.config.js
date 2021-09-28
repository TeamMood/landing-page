module.exports = {
    // These are the files that Purgecss will search through
    content: ["./_site/**/*.html","./_site/js/*.js"],
  
    // These are the stylesheets that will be subjected to the purge
    css: ["./_site/css/style-mini.css","./_site/css/bootstrap.min.css","./_site/css/fontawesome.css"]
  };