pipeline{

environment { 
        registry = "goliakshay357/mini_project" 
        registryCredential = 'dockerhubIDGoli' 
        dockerImage = '' 
    }

stages{
    stage('Cloning Git') {
        checkout scm
    }
        
    stage('Install dependencies') {
        nodejs('nodejs') {
            sh 'npm install'
            echo "Modules installed"
        }
        
    }
    stage('Build') {
        nodejs('nodejs') {
            sh 'npm run build'
            echo "Build completed"
        }
        
    }

    stage('Build image') {
	dockerImage = docker.build registry + ":$BUILD_NUMBER" 
    }


    stage('Push Image'){
        docker.withRegistry('',registryCredential) {
            app.push()
        }
    }
    stage('Cleaning up') { 
            steps { 
                sh "docker rmi $registry:$BUILD_NUMBER" 
            }
        } 


    stage('Package Build') {
        sh "tar -zcvf bundle.tar.gz dist/mini-project/"
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
