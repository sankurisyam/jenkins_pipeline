pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

    }

    post {

    success {
        slackSend(
            channel: '#jenkins-builds',
            color: 'good',
            message: "✅ ${env.JOB_NAME} #${env.BUILD_NUMBER} succeeded"
        )
    }

    failure {
        slackSend(
            channel: '#jenkins-builds',
            color: 'danger',
            message: "❌ ${env.JOB_NAME} #${env.BUILD_NUMBER} failed"
        )
    }
}

}