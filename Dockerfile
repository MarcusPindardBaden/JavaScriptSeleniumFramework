# RUN apk --no-cache add \
#   nodejs \
#   npm \
#   ffmpeg \
#   android-tools@edgetesting \
#   && npm install -g \
#   npm@latest \
#   # Clean up obsolete files:
#   && rm -rf \
#   /tmp/* \
#   /root/.npm
FROM node:12.9.0

# Create working directory to install dependencies into
RUN mkdir -p /opt/frontendapp
WORKDIR /opt/frontendapp

COPY package.json /opt/frontendapp
RUN npm install

# Copy over the application code
COPY . /opt/frontendapp