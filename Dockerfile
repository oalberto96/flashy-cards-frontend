FROM node
LABEL author="oalberto96"
COPY . /var/www
WORKDIR /var/www
EXPOSE 3000
RUN ["npm", "install"]
ENTRYPOINT [ "npm", "start" ]
