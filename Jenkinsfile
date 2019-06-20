pipeline {
  agent any
  stages{
    stage("init") {
      steps {
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

