PurgeCSS (see WebVert, rapport d'intervention)
when you modify css rules:
- work on css/style.css 
- minify it on css/style-mini.css (Jekyll doesn't do it!)
- run PurgeCSS : 
    -> npm update 
    -> ./node_modules/.bin/purgecss -c purgecss.config.js -o css/purged
(don't forget to change the head stylesheets link)


# Docker

## Build the image

rm Gemfile.lock 
docker build -t jekyll-site-lp .

## Run the image with

docker run --name teammood-lp -d -p 4000:4000 -v "$PWD":/usr/src/app jekyll-site-lp

and go to localhost:4000

Stop the container in Docker when done.