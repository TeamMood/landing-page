FROM ruby:2.5.5-alpine3.10

RUN apk update
RUN apk add --no-cache build-base gcc cmake git

WORKDIR /usr/src/app 

# Copy the Gemfile and Gemfile.lock
COPY Gemfile* ./

# Install Bundler and project dependencies
RUN gem install bundler -v 2.3.27 && bundle install

# Copy the rest of the source code
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the Jekyll development server with live reloading
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch"]

# Run the image with
# docker run -d -p 4000:4000 -v "$PWD":/usr/src/app jekyll-site
# and go to localhost:4000