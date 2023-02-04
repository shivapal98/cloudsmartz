# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Set environment variables
ENV PORT 3000

# Expose the application's port
EXPOSE 3000

# Specify the command to run when the container starts
CMD [ "npm", "start" ]