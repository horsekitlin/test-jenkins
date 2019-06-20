pipeline {
  agent any
  environment {
      AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
      AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
  }
  stages{
    stage("init") {
      steps {
        echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL} env: ${env}"
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

