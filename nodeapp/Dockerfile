FROM node:10-alpine
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 80
CMD ["node", "app.js"]
