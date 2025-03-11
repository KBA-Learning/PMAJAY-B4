

## Docker Installation Link
https://docs.docker.com/engine/install/ubuntu/

## To check version of docker and docker compose
docker version
docker compose version

## To run a Docker file from Docker Hub
docker pull hello-world


## To create a new image and run 
docker build -t myimage:1.0 .
docker run myimage

# List the images by executing the following command
docker images

# To list the containers
docker ps -a



## To write docker compose file

Write 2 docker file one in UI, One in Server
Write docker-compose.yaml file
Change the package.json of ui dev :      –host
Viteconfig file change localhost to api
In index.js change mongodb connection string to mongodb:27017


# Before running
Check sudo systemctl status mongod
If active make inactive use the following command
sudo systemctl stop mongod

# To build the file
docker compose up –build



