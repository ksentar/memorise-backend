FROM node:16

RUN apt update && apt install -y openjdk-11-jre
RUN npm install -g firebase-tools

COPY firebase.json .

EXPOSE 9099
EXPOSE 8090
EXPOSE 4000

VOLUME [ "/root/.cache/firebase/emulators" ]

CMD firebase emulators:start
