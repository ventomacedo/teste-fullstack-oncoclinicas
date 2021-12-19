FROM node:alpine

WORKDIR /usr/share/nginx/html/www
ENV PATH /usr/share/nginx/html/www/node_modules/.bin:$PATH

COPY package*.json ./usr/share/nginx/html/www
COPY yarn.* ./usr/share/nginx/html/www

COPY . .
RUN yarn install

CMD yarn start