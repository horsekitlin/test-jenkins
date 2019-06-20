pipeline {
  agent any
  stages{
    stage("init") {
      steps {
        sh 'ls'
        echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL} GIT_BRANCH: ${env.GIT_BRANCH}"
        echo "====Testing....===="
      }
    }
    stage("build") {
      steps {
         sh 'printenv'
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

