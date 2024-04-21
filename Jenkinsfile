node {
    def app
    stage('Clone repository') {
        git branch: "master", url: "https://github.com/shreegowtham27/node-docker.git"
    }
    stage('Build image') {
        app = sh "docker build -t docker-node ."
    }
    stage('tag image') {
        sh "docker tag docker-node:latest 100697818263.dkr.ecr.ap-south-1.amazonaws.com/demo-app:latest"
    }
    stage('Push image') {
        docker.withRegistry('https://100697818263.dkr.ecr.us-east-1.amazonaws.com', 'ecr:ap-south-1:AWS') {
            sh "docker push 100697818263.dkr.ecr.ap-south-1.amazonaws.com/demo-app:latest"
        }
    }
}
