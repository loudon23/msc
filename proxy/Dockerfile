FROM nginx

RUN apt update -y
RUN apt install procps net-tools -y

COPY ./nginx.conf /etc/nginx/templates/nginx.conf.template

EXPOSE 1935

ENTRYPOINT ["nginx", "-g", "daemon off;"]
