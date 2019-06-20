pipeline {
  agent {

  }
  environment {
      AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
      AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
  }
  stages{
    stage("init") {
      steps {
        echo "Running AWS_ACCESS_KEY_ID: ${env.AWS_ACCESS_KEY_ID} AWS_SECRET_ACCESS_KEY: ${env.AWS_SECRET_ACCESS_KEY}"
        echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
        echo "====Testing....===="
      }
    }
    stage("build") {
      steps {
        echo "====Building....===="
      }
    }
    stage("deploy") {
      steps {
        echo "====Deploy....===="
      }
    }
  }
}

