pipeline {

    agent any


    tools{
        nodejs 'node22'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('install') {
            steps {
                sh 'npm install'
            }
        }

        

        stage('build')
steps{
    sh 'npm run build'
}
    }
post {
        success {
            echo "✅ Build Successful"
        }

        failure {
            echo "❌ Build Failed"
        }
    }
}