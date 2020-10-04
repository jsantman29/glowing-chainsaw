#!/bin/bash
IMAGE_NAME="jsantman29/personal-resume"
IMAGE_TAR="docker_image.tar"
VPS="jsantman29@jsantman29.me"

export CURRENT_VPS=${VPS}

# Uses the current Dockerfile to build an image.
echo "Building Docker image..."
docker build . -t ${IMAGE_NAME}

# Saves the Docker image as a tar file.
echo "Saving Docker image as tar file..."
docker save -o ${IMAGE_TAR} ${IMAGE_NAME}

# SSH into a VPS, deploy the docker file, and load it.
echo "Transferring Docker image to ${CURRENT_VPS}"
scp ${IMAGE_TAR} ${CURRENT_VPS}:~/sites/docker-images/.

echo "Removing it locally..."
rm ${IMAGE_TAR}

echo "Deploying Docker image on ${CURRENT_VPS}"
ssh ${CURRENT_VPS} "cd ~/sites/docker-images/; docker load -i ${IMAGE_TAR}; rm ${IMAGE_TAR};"
