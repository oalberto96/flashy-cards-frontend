FROM node
LABEL author="oalberto96"
COPY . /usr/src/app/
WORKDIR /usr/src/app
EXPOSE 3000
ENTRYPOINT npm install && npm start
