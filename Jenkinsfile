pipeline {

    agent any

    environment {
        SLACK_WEBHOOK = credentials('slack-webhook')
    }

    stages {

        stage('Build') {
            steps {
                echo "Building..."
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
                    "text":"✅ Jenkins Build Successful"
                }
                '''
            )

        }

    }

}