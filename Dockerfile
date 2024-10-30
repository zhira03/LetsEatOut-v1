FROM node:latest

WORKDIR /app

COPY . . 

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm","start" ]

