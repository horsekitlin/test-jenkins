pipeline {
  agent any
  tools {nodejs "nodejs 10.16 LTS"}
  environment {
    BRANCH="${GIT_BRANCH.split("/")[1]}"
    PACKAGE_NAME="test-jenkins"
  }
  stages{
    stage("init") {
      steps {
        sh "cp /var/local/envs/${PACKAGE_NAME}/${BRANCH}.env ./.env"
        sh "yarn install"
      }
    }
    stage("test") {
      steps {
        sh "yarn test:CI"
      }
       post {
        always {
          publishHTML target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll             : true,
            reportDir            : 'output/coverage/jest',
            reportFiles          : 'index.html',
            reportName           : 'Test Report'
          ]
        }
      }
    }
    stage("build") {
      steps {
        sh "printenv"
        echo "====Building....===="
      }
    }
    stage("deploy") {
      when {
        expression {
          currentBuild.result == null || currentBuild.result == "SUCCESS"
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
