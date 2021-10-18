PurgeCSS (see WebVert, rapport d'intervention)
when you modify css rules:
- work on css/style.css 
- minify it on css/style-mini.css (Jekyll doesn't do it!)
- run PurgeCSS : 
    -> npm update 
    -> ./node_modules/.bin/purgecss -c purgecss.config.js -o css/purged
(don't forget to change the head stylesheets link)