pipeline {
  agent any
  tools {nodejs 'nodejs 10.16 LTS'}
  environment {
    BRANCH='${GIT_BRANCH.split('/')[1]}'
    PACKAGE_NAME='test-jenkins'
  }
  stages{
    stage('init') {
      steps {
        sh 'cp /var/local/envs/${BRANCH}.env ./'
        sh 'yarn install'
      }
    }
    stage('test') {
      steps {
        sh 'yarn test:CI'
      }
    }
    stage('build') {
      steps {
        sh 'printenv'
        echo '====Building....===='
      }
    }
    stage('deploy') {
      when {
        expression {
          currentBuild.result == null || currentBuild.result == 'SUCCESS'
        }
      }
      steps {
        echo '====Deploy....===='
        sh 'ls'
        sh 'gulp deploy'
      }
    }
  }
}
