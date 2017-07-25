FROM hosttoday/ht-docker-node:npmci
RUN yarn global add shipzone
CMD ["shipzone", "start"]
