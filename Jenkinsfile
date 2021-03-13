pipeline{

environment { 
        registry = "goliakshay357/mini_project" 
        registryCredential = 'dockerhubIDGoli' 
        dockerImage = '' 
    }


    agent any
stages{
    stage('Cloning Git') {
	steps{
        checkout scm
	}
    }
        
    stage('Install dependencies') {
	steps{
            sh 'npm install'
            echo "Modules installed"
	}
        
    }
    stage('Build') {
	steps{
            sh 'npm run build'
            echo "Build completed"
	}
        
    }

    stage('Build image') {
	steps{
	script{
	dockerImage = docker.build registry + ":$BUILD_NUMBER" 
}
    }
	}


    stage('Push Image'){
	steps{
	script{
        docker.withRegistry('',registryCredential) {
            app.push()
        }
	}
	}
    }
    stage('Cleaning up') { 
	steps{
            steps { 
                sh "docker rmi $registry:$BUILD_NUMBER" 
            }
        } 
	}


    stage('Package Build') {
	steps{
        sh "tar -zcvf bundle.tar.gz dist/mini-project/"
	}
    }

    stage('Artifacts Creation') {
	steps{
        fingerprint 'bundle.tar.gz'
        archiveArtifacts 'bundle.tar.gz'
        echo "Artifacts created"
	}
    }

    stage('Stash changes') {
	steps{
        stash allowEmpty: true, includes: 'bundle.tar.gz', name: 'buildArtifacts'
	}
    }
}
}
