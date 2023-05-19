FROM node:20-alpine3.16
COPY . .

RUN npm install

EXPOSE 3000

RUN ls /app

CMD ["node", "/app/server.js"]
