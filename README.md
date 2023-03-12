## Deploy Laravel Project Using Docker (QUICK SETUP)

#### Clone repo

    git clone https://github.com/1DevOps2/Laravel_App_Deployment
    
#### Copy the "Dockerfile" , "docker-compose.yml" and "Docker" to your project directory.

    cp -r -t /Path/to/Project Docker/ Dockerfile docker-compose.yml .env.example
    
#### Go to the Project directory & copy the env file and make changes if you want i-e. (db name)

    cd /Path/to/Project && cp .env.example .env
    
#### Up the containers 
    
    docker-compose up
    
#### APP & DB UI Acess

    http://yourip:8000
    
    http://yourip:8080
