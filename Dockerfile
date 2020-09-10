FROM node:12.9.0


# Create working directory to install dependencies into
RUN mkdir -p /opt/frontendapp
WORKDIR /opt/frontendapp

COPY package.json ./package-lock.json ./
RUN npm install
# EXPOSE 5900

# Copy over the application code
COPY . /opt/frontendapp
CMD npm
RUN npm run test
