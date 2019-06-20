pipeline {
  agent any
  tools {nodejs "nodejs 10.16 LTS"}
  stages{
    stage("init") {
      steps {
        sh 'node --version'
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

