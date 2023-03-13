## Deploy Laravel Project Using Docker (QUICK SETUP)

#### Clone repo

    git clone https://github.com/1DevOps2/Laravel_Deployment.git
    
#### Copy the "Dockerfile" , "docker-compose.yml" and "Docker" to your project directory.

    cd Laravel_Deployment && cp -r -t /Path/to/Project Docker/ Dockerfile docker-compose.yml .env.example
    
#### Go to the Project directory & copy the env file and make changes if you want i-e. (db name)

    cd /Path/to/Project && cp .env.example .env
    
#### Change the permission of Project Direoctory

    chmod -R 777 /Path/to/Project
    
#### Up the containers 
    
    docker-compose up
    
#### APP & DB UI Acess

    http://yourip:8000
    
    http://yourip:8080
