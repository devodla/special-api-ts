FROM node:12
WORKDIR /usr/src/special-api-ts
COPY ./package.json .
RUN npm install --only=prod