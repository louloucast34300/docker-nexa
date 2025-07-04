FROM node:18

WORKDIR /usr/src/app

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .

CMD ["npm", "run", "dev"]