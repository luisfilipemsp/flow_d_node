FROM node:20-alpine3.16

WORKDIR filipe
COPY . /filipe

RUN cd /filipe && npm install

EXPOSE 3000

RUN ls /filipe/app

CMD ["node", "/app/server.js"]
