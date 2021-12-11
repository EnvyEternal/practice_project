FROM node:14.18-stretch

ARG NODE_ENV="development"

RUN mkdir -p ./client

WORKDIR /client

COPY package*.json ./

COPY . .

EXPOSE 5000

RUN npm install

CMD npm start
