FROM node:10.2.1-slim
LABEL author="Daniel Con"

# Copy Files
WORKDIR /var/www/
COPY . ./

# Install Packages
RUN apt install git

# Start Service
