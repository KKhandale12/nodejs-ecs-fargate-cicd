FROM node:20-alpine
WORKDIR /usr/src/app
COPY app .
EXPOSE 3000
CMD ["node", "index.js"]
