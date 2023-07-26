## Developer Environment Setup Instructions:

Before proceeding with the setup, ensure that you have MongoDB running from the localhost. If you don't have MongoDB installed, please follow the steps below to quickly set it up using Docker, which is the recommended method.

### MongoDB Installation

1. Install Docker first, as it will facilitate the setup process.

2. Once Docker is installed and running, execute the following command in your terminal:

```bash
docker run -d --name mongodb --restart always -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root -p 27017:27017 mongo:latest
```

This command will set up and run a MongoDB container with the necessary credentials.

### Server Python Package Requirements Installation

In the root directory of the server, you need to install all the required Python packages. To achieve this, use the `requirements.txt` file as follows:

```bash
pip install -r ./requirements.txt
```

This command will install all the necessary dependencies for the server to function correctly.

### Running the Development Server

To run the development server, you must first add a `.env` file to the server's root folder. Follow the steps below to create the `.env` file and provide the server with the required database URL and credentials:

1. Create a `.env` file in the server's root folder.

2. Add the following content to the `.env` file, providing the appropriate MongoDB URL and credentials:

```plaintext
DB_URL = "127.0.0.1"
DB_CRED = "root:root"
```

3. After setting up the `.env` file, run the `dev.sh` script using the following command:

```bash
sh dev.sh
```

The script will start the development server.

By following these instructions, you will have your development environment set up with MongoDB and the required server packages.
