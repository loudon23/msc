FROM nginx

RUN apt update -y
RUN apt install procps net-tools -y

COPY ./proxy/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
