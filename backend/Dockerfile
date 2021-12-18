FROM node:16

WORKDIR /usr/app
COPY package*.json ./usr/app
COPY yarn.* ./usr/app

COPY . .
RUN yarn install
CMD yarn start