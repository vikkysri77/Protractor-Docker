FROM node:10

WORKDIR /home/ubuntu/sample/

COPY package*.json ./

ENV SCRIPT=$SCRIPT

RUN apt-get update && \
    apt-get install -y --no-install-recommends && \
    apt-get install -y openjdk-8-jre-headless && \
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt install -y ./google-chrome-stable_current_amd64.deb && \
    npm install && \
    npm install -g protractor@7.0.0 && \
    webdriver-manager update && \
    webdriver-manager start --detach

COPY . .

CMD $SCRIPT

