FROM node:18

RUN apt update -y
RUN apt install ffmpeg net-tools -y

RUN mkdir /rtmp
COPY ./*.* /rtmp

WORKDIR /rtmp
RUN npm i

#CMD tail -f /dev/null
ENTRYPOINT ["npm", "start"]