# Step 1: Set the base image for the React app (using a node image)
FROM node:16 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Step 4: Install the project dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Serve the React app using a lightweight web server (nginx)
FROM nginx:alpine

# Step 8: Copy the build folder from the build stage to the nginx folder
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port nginx is listening on
EXPOSE 80

# Step 10: Start nginx
CMD ["nginx", "-g", "daemon off;"]
