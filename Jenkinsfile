pipeline {
  agent any
  tools {nodejs "nodejs 10.16 LTS"}
  stages{
    stage("init") {
      steps {
        echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL} GIT_BRANCH: ${env.GIT_BRANCH}"
        sh 'yarn install'
      }
    }
    stage('test') {
      steps {
        sh 'yarn test:CI'
      }
    }
    stage("build") {
      steps {
        sh 'printenv'
        echo "====Building....===="
      }
    }
    stage("deploy") {
      when {
        expression {
          currentBuild.result == null || currentBuild.result == 'SUCCESS'
        }
      }
      steps {
        echo "====Deploy....===="
        sh "ls"
        sh "gulp deploy"
      }
    }
  }
}
