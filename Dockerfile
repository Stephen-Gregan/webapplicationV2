FROM node:10.16-alpine
# Create app directory
WORKDIR /
# Install app dependencies
COPY package*.json ./
RUN npm install
# Copy app source code
COPY . . 
#Expose port and start application
EXPOSE 5000
CMD [ "npm", "start" ]
