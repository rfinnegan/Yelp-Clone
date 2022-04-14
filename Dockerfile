FROM node:16

WORKDIR /usr/src/app

COPY ./ ./

RUN chmod +x /usr/src/app/scripts/startup.sh

WORKDIR /usr/src/app

RUN npm ci

ENTRYPOINT ./scripts/startup.sh
