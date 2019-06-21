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
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])
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
        script {
          def server = Artifactory.server 'My_Artifactory'
          uploadArtifact(server)
        }
      }
    }
  }
}

def uploadArtifact(server) {
  def uploadSpec = """{
            "files": [
              {
                "pattern": "continuous-test-code-coverage-guide*.tgz",
                "target": "npm-stable/"
              }
           ]
          }"""
  server.upload(uploadSpec)

  def buildInfo = Artifactory.newBuildInfo()
  server.upload spec: uploadSpec, buildInfo: buildInfo
  server.publishBuildInfo buildInfo
}