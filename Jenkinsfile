pipeline {
    agent any

    tools {
        nodejs 'node22'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install --no-audit --no-fund'
            }
        }

        stage('Run app') {
            steps {
                sh 'node app.js'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}