## NODE
FROM node:alpine

WORKDIR /usr/share/nginx/html/www
ENV PATH /usr/share/nginx/html/www/node_modules/.bin:$PATH

COPY package*.json ./usr/share/nginx/html/www
COPY yarn.* ./usr/share/nginx/html/www

COPY . .
RUN yarn install

CMD yarn build

## NGINX
FROM nginx:1.16.0-alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html/www

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]