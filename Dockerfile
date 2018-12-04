FROM node:8.14.0-alpine as builder
USER node

RUN mkdir -p /tmp/client/web
WORKDIR /tmp/client/web

COPY --chown=node ./package*.json ./
RUN npm install

COPY --chown=node . .
RUN ["npm", "run", "start"]
EXPOSE 8080

# FROM nginx:1.15.7-alpine
# WORKDIR /var/www
# COPY --from=builder /tmp/client/web/build/ /var/www/
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
