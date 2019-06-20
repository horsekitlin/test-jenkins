pipeline {
  agent any
  tools {nodejs "nodejs 10.16 LTS"}
  environment {
    echo "${env.GIT_BRANCH}"
    DISABLE_AUTH = 'true'
    DB_ENGINE    = 'sqlite'
  }
  stages{
    stage("init") {
      steps {
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
