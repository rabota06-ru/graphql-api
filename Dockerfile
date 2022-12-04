FROM node:17
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

CMD [ "npm", "run", "start:prod" ]