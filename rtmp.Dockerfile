FROM node:18

RUN apt update -y
RUN apt install ffmpeg net-tools -y
WORKDIR /
#COPY ./rtmp /rtmp

WORKDIR /rtmp
ENTRYPOINT ["npm", "start"]