# Use an official base image as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app's source code inside the Docker image
COPY . .

# Make the container's port 3000 available to the outside world
EXPOSE 3000

# Define the command to run the app
CMD ["node", "app.js"]
docker build -t my-app-name .
docker run -p 3000:3000 my-app-name
{
  "checklist": [
    {
      "step": "Create Dockerfile",
      "description": "Write a Dockerfile to specify how to build the image."
    },
    {
      "step": "Build Docker Image",
      "description": "Use the 'docker build' command to create an image from the Dockerfile."
    },
    {
      "step": "Run Docker Container",
      "description": "Use the 'docker run' command to start a container from the image."
    }
  ]
}