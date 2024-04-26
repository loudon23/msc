![MSC](./msc.png){: width="500"}

## 실행 
ec2는 ubuntu

### docker 
```bash
$ sudo apt-get update
$ sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
$ sudo systemctl status docker
```
### docker-compose 
```bash
$ sudo curl -L https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
$ docker-compose --version
```

## git, run container 
```bash
$ git clone https://github.com/loudon23/msc
$ cd msc/rtmp
$ docker-compose up -d
```

## 송출
* EC2 인바운드 규칙: 1935, 8000 열어야 함.
* RTMP 주소 : rtmp://{ec2_public_ip}/live
* RTMP 키 : 아무거나(본인의ID 같은거)

## 시청 
* dash : http://{ec2_public_ip}:8000/live/{RTMP키}/index.mpd
* hls : http://{ec2_public_ip}:8000/live/{RTMP키}/index.m3u8


## 참고
* [illuspas/Node-Media-Server](https://github.com/illuspas/Node-Media-Server)
* [nginx conf with env vars](https://github.com/filipkrw/nginx-conf-with-env-vars/tree/main)
* [aws ec2 docker](https://jongsky.tistory.com/49)
* [private access token으로 git clone 하기](https://velog.io/@ashappyasikonw/Private-Access-Token%EC%9C%BC%EB%A1%9Cgit-clone-%ED%95%98%EA%B8%B0)
* git
    ```
    git config --global url."https://{privatekey}:x-oauth-basic@github.com/{저장소}".insteadOf "https://github.com/{저장소}"
    ```
* docker command
    ```
    docker container ls
    docker logs -f {container_id}
    docker exec -it {container_id} /bin/bash
    ```
  
