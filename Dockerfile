FROM node:9

ENV NODE_ENV development
WORKDIR /src

RUN npm install nodemon -g

COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json
RUN npm install --silent && mv node_modules ../

COPY ./nodemon.json /src/nodemon.json
COPY . .

EXPOSE 3000
CMD npm start
