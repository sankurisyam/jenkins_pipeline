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

        httpRequest(
            httpMode: 'POST',
            url: SLACK_WEBHOOK,
            contentType: 'APPLICATION_JSON',
            requestBody: '''
            {
    "text": "🚀 *${env.JOB_NAME}*\\nBuild: #${env.BUILD_NUMBER}\\nStatus: SUCCESS\\nURL: ${env.BUILD_URL}"
            }
            '''
        )
    }

    failure {

        httpRequest(
            httpMode: 'POST',
            url: SLACK_WEBHOOK,
            contentType: 'APPLICATION_JSON',
            requestBody: '''
            {
                "text": "❌ *${env.JOB_NAME}*\\nBuild: #${env.BUILD_NUMBER}\\nStatus: FAILURE\\nURL: ${env.BUILD_URL}"
            }
            '''
        )
    }

}


}