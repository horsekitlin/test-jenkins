pipeline {
  agent {
    docker {
        image 'node:10.16.0' 
        args '-p 3000:3000' 
    }
  }
  stages{
    stage("init") {
      steps {
        echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL} GIT_BRANCH: ${env.GIT_BRANCH}"
        echo "====Testing....===="
      }
    }
    stage("build") {
      steps {
         sh 'printenv'
         sh 'yarn install'
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

