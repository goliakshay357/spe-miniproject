pipeline {
  environment {
    registry = "goliakshay357/mini-project"
    registryCredential = 'goliakshay357'
  }

  agent any

  stages {
    stage('Cloning Git') {
    checkout scm
    }
    
    stage('Install dependencies') {
    nodejs('nodejs') {
        sh 'npm install'
        echo "Modules installed"
     }
    }

    stage('Package Build') {
       sh "tar -zcvf bundle.tar.gz dist/mini-project/"
    }

    stage('Building Docker image') {
      steps{
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }

    stage('Deploying the image'){
        steps{
            script {
                docker.withRegistry( '', registryCredential ){
                    dockerImage.push()
                }
            }
        }
    }

    stage('Cleaning up'){
        steps {
            sh "docker rmi $registry:$BUILD_NUMBER"
        }
    }

    stage('Artifacts Creation') {
       fingerprint 'bundle.tar.gz'
       archiveArtifacts 'bundle.tar.gz'
       echo "Artifacts created"
    }

   stage('Stash changes') {
       stash allowEmpty: true, includes: 'bundle.tar.gz', name: 'buildArtifacts'
   }

  }
}