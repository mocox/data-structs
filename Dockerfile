# first build the app
FROM node:alpine as builder

# set the working dir for container
WORKDIR /frontend

# copy the json file first
COPY ./package.json /frontend

# install npm dependencies
RUN npm install --legacy-peer-deps

# copy other project files
COPY . .

# build the folder
RUN npm run-script build

# now deploy to nginx on container, default port 80 as in the config file
FROM nginx:alpine
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf