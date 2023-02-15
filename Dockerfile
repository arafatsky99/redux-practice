FROM node:16-alpine
RUN npm install --location=global nodemon
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 9000
CMD [ "npm", "start" ]