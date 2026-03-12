pipeline {
    agent any


    environment {

    }

    stages {
        stage('clone Repo'){
            steps {
                git url: 'https://github.com/zahrafir/untukTest/',
                branch:'main'
            }
        }

        stage ('Inject ENV'){
            steps {
                withCredentials([file(credentialsId: 'env-file', variable: 'ENVFILE')]){
                    bat '''
                    rm -f .env
                    copy '%ENVFILE' .env
                    '''
                }
            }
        }

        stage('Deploy'){
            steps {
                bat '''
                    echo "MONGO_URI=mongodb+srv://zahralf37_db_user:zahra123@project1.wgobyav.mongodb.net/testauth" > .env
                    echo "EMAIL_PASS=aanr chad gunn zfrh" >> .env
                    echo "EMAIL_USER=zahralf37@gmail.com" >> .env
                    docker build -t docker-testdua .
                    docker run --env-file .env -d -p 3000:3000  docker-testdua 
                    docker ps
                    '''
            }
        }
    }
}