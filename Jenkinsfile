pipeline {
  agent any
  tools {nodejs "nodejs 10.16 LTS"}
  stages{
    stage("init") {
      steps {
        def values = env.GIT_BRANCH.tokenize( '/' )
        String a = env.GIT_BRANCH.split('-')[0] as String
        String b = env.GIT_BRANCH.split('-')[1] as String
        echo "remote ${remote} branch is ${branch}"
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
