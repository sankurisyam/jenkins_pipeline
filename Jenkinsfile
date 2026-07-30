pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Node Version') {
            steps {
                sh 'node --version'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Success Message') {
            steps {
                echo 'Pipeline executed successfully!'
            }
        }
    }

    post {

        success {
            echo 'Build Success '
        }

        failure {
            echo 'Build Failed '
        }

        always {
            echo 'Pipeline Finished'
        }
    }

}