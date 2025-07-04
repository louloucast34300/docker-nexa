FROM node:18

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install

COPY backend/ . 

CMD ["npm", "run", "start:dev"]