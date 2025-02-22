pipeline {
    agent { label "agentom" }
    
    stages {
        stage("Code") {
            steps {
                echo "This is cloning the code"
                git url: "https://github.com/OmSantoshHarsule/textutils-2.git", branch: "main"
                echo "Code Cloning Successful"
            }
        }
    
        stage("Build") {
            steps {
                echo "This is building the code"
                sh "docker build -t textutils:latest ."
            }
        }
        
        stage("Pushing to DockerHub") {
            steps {
                echo "Pushing to DockerHub"
                withCredentials([usernamePassword(credentialsId: "dockerHubCred", 
                                                  passwordVariable: "dockerHubPass", 
                                                  usernameVariable: "dockerHubUser")]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass} "
                    sh "docker tag textutils:latest ${dockerHubUser}/textutils:latest"
                    sh "docker push ${dockerHubUser}/textutils:latest"
                }
            }
        }
        
        stage("Run") {
            steps {
                echo "This is running the container"
                sh "sudo docker run -d -p 5000:5000 textutils:latest"
            }
        }
    }        
}
