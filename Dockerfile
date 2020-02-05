FROM node
 
COPY app.js /
 
EXPOSE 8080 8081

RUN apt-get update

RUN apt-get install curl
 
HEALTHCHECK --interval=5s --timeout=10s --retries=3 CMD curl -sS 127.0.0.1:8080 || exit 1
 
CMD [ "node", "/app.js" ]


# FROM mhart/alpine-node:4.4

# ADD ./package.json ./package.json 
# RUN npm i
# ADD ./app.js  ./app.js 

# EXPOSE 9000

# RUN apk --update add curl

# #HEALTHCHECK CMD curl --fail -s localhost:9000/guid || exit 1
# HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \  
#  CMD node /healthcheck.js

# CMD ["npm", "start"]