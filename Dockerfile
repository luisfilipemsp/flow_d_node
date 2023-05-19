FROM node:20-alpine3.16

WORKDIR filipe
COPY . /filipe

RUN cd /filipe && npm install

EXPOSE 3000

RUN ls /filipe && ls /filipe/app

RUN node /filipe/app/server.js
