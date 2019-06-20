pipeline {
  agent any
  stages{
    stage("init") {
      steps {
        def username = 'Jenkins'
        echo 'Hello Mr. ${username}'
        echo "I said, Hello Mr. ${username}"
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

