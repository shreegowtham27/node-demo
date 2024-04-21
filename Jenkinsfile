node {
    def app

    stage('Clone repository') {
        git branch: "main", url: "https://github.com/shreegowtham27/node-demo.git"
    }
    
    stage('Check for GitLeaks'){
        script{
            sh "trufflehog3 --exclude package* node_modules/ https://github.com/shreegowtham27/node-docker.git"
        }
    }
    stage('SAST with NJSScan') {    
        script {
            sh 'njsscan ${WORKSPACE}'
        }
    }

    stage('Build image') {
        sh "docker build -t docker-node ."
    }
    
    stage('Security Scanning - Trivy') {
        script {
            sh "trivy image docker-node --exit-code 1 --severity CRITICAL"
           //sh "trivy image docker-node"
        }
    }
    
    stage('Run the Docker App'){
        sh "docker run -d -p 8500:8500 docker-node"
    }
    
    stage('DAST'){
        sh "wapiti -u https://localhost:8500"
    }

    stage('Tag image') {
        sh "docker tag docker-node:latest 100697818263.dkr.ecr.ap-south-1.amazonaws.com/demo-app:${BUILD_NUMBER}"
    }

    stage('Push image') {
        docker.withRegistry('https://100697818263.dkr.ecr.ap-south-1.amazonaws.com', 'ecr:ap-south-1:AWS') {
            sh "docker push 100697818263.dkr.ecr.ap-south-1.amazonaws.com/demo-app:${BUILD_NUMBER}"
        }
    }
}
