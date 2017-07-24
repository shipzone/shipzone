FROM hosttoday/ht-docker-node:stable
RUN yarn global add shipzone
CMD ["shipzone", "start"]
