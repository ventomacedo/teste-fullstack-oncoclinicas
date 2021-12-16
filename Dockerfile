FROM node:16

WORKDIR /usr/app
COPY package*.json ./
COPY yarn.* ./

RUN yarn install
COPY . .

EXPOSE 80
CMD yarn start