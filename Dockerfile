# Use a slim Node.js image as the base image
FROM node:14-slim

# Create a working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your Node.js app is running on
EXPOSE 3000

# Start the Node.js application
CMD ["node", "server.js"]
