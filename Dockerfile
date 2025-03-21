# Use official Node.js 16 image as base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy all files after installing dependencies
COPY . .

# Install dependencies in a single RUN command
RUN npm init -y

# Install nodemon globally
RUN npm install -g nodemon

RUN npm install express

# Expose the application port (modify according to your server)
EXPOSE 5000

# Start the server with Nodemon
CMD ["nodemon", "server.js"]
