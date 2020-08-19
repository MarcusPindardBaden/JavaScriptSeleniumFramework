FROM node:12.9.0

# Create working directory to install dependencies into
RUN mkdir -p /opt/frontendapp
WORKDIR /opt/frontendapp

COPY package.json /opt/frontendapp
RUN npm install
EXPOSE 4444

# Copy over the application code
COPY . /opt/frontendapp
CMD [ "./node_modules/.bin/wdio", "wdio.docker.conf.js" ]