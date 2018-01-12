FROM node:carbon
# Create app directory
WORKDIR /usr/src/nodes_detail
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install
# If you are building your code for production
# RUN npm install --only=production
# Bundle app source
COPY . .
Run npm run build:dll
EXPOSE 3000 
CMD [ "npm", "start" ]
