# Stage 1 - build process
FROM node:14 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i
COPY . ./
RUN npm run build

# Stage 2 - production environment
FROM node:14-alpine
WORKDIR /app
COPY --from=build-deps /usr/src/app/build ./
RUN npm install -g serve
CMD ["serve", "-s", "."]
EXPOSE 3000