FROM node:14-alpine

RUN apk add --no-cache tzdata

ENV TZ="Asia/Seoul"

COPY . /app

EXPOSE 3200

WORKDIR /app/backend

RUN yarn install



