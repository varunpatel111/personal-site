FROM mhart/alpine-node:11

RUN apt-get update && apt-get install -y \
	vim


WORKDIR /app
ADD . /app

ENV PORT=7999

RUN npm install --dev
RUN npm run build