FROM mhart/alpine-node:11

RUN apk add vim


WORKDIR /app
ADD . /app

ENV PORT=7999

RUN npm install --dev
RUN npm run build
