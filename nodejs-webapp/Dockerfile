FROM node:20-alpine

ENV PORT=3000
ENV BG_COLOR=blue
ENV FG_COLOR=white

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE ${PORT}
ENTRYPOINT node index.js
